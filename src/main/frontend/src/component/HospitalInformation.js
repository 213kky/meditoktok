import DoctorList from "./DoctorList";
import {useEffect, useState} from "react";
import axios from "axios";

export default function HospitalInformation() {
    const queryParams = new URLSearchParams(window.location.search);
    const yadmNm = queryParams.get('yadmNm');
    const addr = queryParams.get('addr');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    let items;

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
                });
        }
    }, [loading]);

    if (data === null) {
        return null
    }else {
        items = data.response.body.items.item;
    }



    return (
        <section class="contents">
            <div class="hospitalName">{yadmNm}</div>
            <div class="hospitalInfo">병원 정보</div>
            <div class="hospitalInfoBox">
                <span>공지사항</span>
                <div></div>
                <span>병원 URL</span>
                <div>{items.hospUrl != null ? items.hospUrl: "URL이 존재하지 않습니다." }</div>
                <span>진료과목</span>
                <div></div>
                <span>의료진</span>
                <div></div>
                <span>운영시간</span>
                <div></div>
                <span>주소</span>
                <div>{addr}</div>
                <span>전화번호</span>
                <div>{items.telno != null ? items.telno: "전화번호가 존재하지 않습니다." }</div>
            </div>
            <ul class="doctorList">
                <DoctorList doctorName={"의사1"}/>
                <DoctorList doctorName={"의사2"}/>
                <DoctorList doctorName={"의사3"}/>
            </ul>
        </section>
    );
}