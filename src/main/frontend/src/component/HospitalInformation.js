import DoctorList from "./DoctorList";
import {useEffect, useState} from "react";
import axios from "axios";

export default function HospitalInformation() {
    const queryParams = new URLSearchParams(window.location.search);
    const yadmNm = queryParams.get('yadmNm');
    const addr = queryParams.get('addr');
    const [data, setData] = useState(null); //getHospBasisList : 병원 URL, 주소, ykiho 조회
    const [data2, setData2] = useState(null); //getDtlInfo2 : 진료 시간 조회
    const [data3, setData3] = useState(null); //getDgsbjtInfo2 : 진료 과목, 의료진 수 조회
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(false);
    const [loading3, setLoading3] = useState(false);
    let items, items2, items3, renderList;

    useEffect(() => {
        if (loading) {
            axios.get(`https://apis.data.go.kr/B551182/hospInfoServicev2/getHospBasisList?serviceKey=G3OZp5dYqrTm0I9gNRRu%2BXouEslD9Gs7F%2BYz9LUKT8%2F%2BJjRHdzSmmSwbLnJ7vR6znJD4hftgOK5ZZ%2FCE9iG3XA%3D%3D&pageNo=1&numOfRows=1&emdongNm=${addr}&yadmNm=${yadmNm}`)
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.error(error);
                })
                .finally(() => {
                    setLoading(false);
                    setLoading2(true);
                    setLoading3(true);
                });
        }
    }, [loading]);

    useEffect(() => {
        if (loading2) {
            axios.get(`https://apis.data.go.kr/B551182/MadmDtlInfoService2/getDtlInfo2?serviceKey=%2Fzt1jmOZn0y5Q8ql8mxBIKRoXvyqetyRjCvZUNCV6OCXxnnYWFFZUnNcW5E2yCax4iZMPg%2FAbMM%2FpAw7%2BeYhtQ%3D%3D&ykiho=${items.ykiho}`)
                .then(response => {
                    setData2(response.data);
                })
                .catch(error => {
                    console.error(error);
                })
                .finally(() => {
                    setLoading2(false);
                });
        }
    }, [loading2]);

    useEffect(() => {
        if (loading3) {
            axios.get(`https://apis.data.go.kr/B551182/MadmDtlInfoService2/getDgsbjtInfo2?serviceKey=%2Fzt1jmOZn0y5Q8ql8mxBIKRoXvyqetyRjCvZUNCV6OCXxnnYWFFZUnNcW5E2yCax4iZMPg%2FAbMM%2FpAw7%2BeYhtQ%3D%3D&ykiho=${items.ykiho}`)
                .then(response => {
                    setData3(response.data);
                })
                .catch(error => {
                    console.error(error);
                })
                .finally(() => {
                    setLoading3(false);
                });
        }
    }, [loading3]);

    if (data === null) {
        return null
    } else {
        items = data.response.body.items.item;
    }
    if (data2 === null) {
        return null
    } else {
        if (data2.response.body.totalCount !== 0) {
            items2 = data2.response.body.items.item;
        }else{
            items2 = null;
        }
    }
    if (data3 === null) {
        return null
    } else {
        if (data3.response.body.totalCount !== 0) {
            items3 = data3.response.body.items.item;
            renderList = () => {
                return items3.map((item3, index) => {
                    return (
                        <>
                            {item3.dgsbjtCdNm} : {item3.dgsbjtPrSdrCnt}명 <br/>
                        </>
                    );
                });
            };
        }else{
            items3 = null;
        }
    }



    return (
        <section class="contents">
            <div class="hospitalName">{yadmNm}</div>
            <div class="hospitalInfo">병원 정보</div>
            <div class="hospitalInfoBox">
                <span>공지사항</span>
                {/*<div>{items.ykiho}</div>*/}
                <div>공지사항이 없습니다.</div>
                <span>병원 URL</span>
                <div>{items.hospUrl != null ? items.hospUrl : "URL이 존재하지 않습니다."}</div>
                <span>진료과목</span>
                <div>{items3 != null ?  (items3.map((item3, index)=> item3.dgsbjtCdNm+(index !== items3.length-1?", ":""))): "진료과목 정보가 존재하지 않습니다."}</div>
                <span>의료진</span>
                {/*<div>{items3 != null ? (items3.map((item3, index)=> item3.dgsbjtCdNm+" : "+item3.dgsbjtPrSdrCnt+"명 ")) : "의료진 정보가 존재하지 않습니다."}</div>*/}
                <div>{items3 != null ? renderList() : "의료진 정보가 존재하지 않습니다."}</div>
                <span>운영시간</span>
                {/*다른 운영시간에 대한 정보가 없을 시 표현 생각 (주중, 주말, 요일별 진료시간, 점심시간 등등*/}
                <div>{items2 != null ? ("주중 운영시간 : "+items2.rcvWeek) : "운영시간 정보가 존재하지 않습니다."}</div>
                <span>주소</span>
                <div>{addr}</div>
                <span>전화번호</span>
                <div>{items.telno != null ? items.telno : "전화번호가 존재하지 않습니다."}</div>
            </div>
            <ul class="doctorList">
                <DoctorList doctorName={"의사1"}/>
                <DoctorList doctorName={"의사2"}/>
                <DoctorList doctorName={"의사3"}/>
            </ul>
        </section>
    );
}