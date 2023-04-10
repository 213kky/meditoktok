import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

// 서울에 속한 구 리스트
const seoulDistricts = ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'];

// 경기도에 속한 도시 리스트
const gyeonggiCities = ['가평군', '고양시', '과천시', '광명시', '광주시', '구리시', '군포시', '김포시', '남양주시', '동두천시', '부천시', '성남시', '수원시', '시흥시', '안산시', '안성시', '안양시', '양주시', '양평군', '여주시', '연천군', '오산시', '용인시', '의왕시', '의정부시', '이천시', '파주시', '평택시', '포천시', '하남시', '화성시'];
export default function Two() {
    const [selectedRegion, setSelectedRegion] = useState(null);

    const [sido, setSido] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    /*const hospList = (ct) => {
        setSido(ct);
        axios.get(`https://apis.data.go.kr/B551182/hospInfoServicev2/getHospBasisList?serviceKey=%2Fzt1jmOZn0y5Q8ql8mxBIKRoXvyqetyRjCvZUNCV6OCXxnnYWFFZUnNcW5E2yCax4iZMPg%2FAbMM%2FpAw7%2BeYhtQ%3D%3D&emdongNm=${sido}`).then(response => {
            setData(response.data);
        });
    };*/
    const hospList = () => {
        // setSido(ct);
        setLoading(true);
    }

    useEffect(() => {
        if (loading) {
            axios.get(`https://apis.data.go.kr/B551182/hospInfoServicev2/getHospBasisList?serviceKey=%2Fzt1jmOZn0y5Q8ql8mxBIKRoXvyqetyRjCvZUNCV6OCXxnnYWFFZUnNcW5E2yCax4iZMPg%2FAbMM%2FpAw7%2BeYhtQ%3D%3D&emdongNm=${sido}`)
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

    const renderList = () => {
        if (data === null) return null;
        const items = data.response.body.items.item;
        return items.map((item, index) => {
            return (
                <tr key={index}>
                    <td className="edge"><Link to="/hospital_information">{item.yadmNm}<br/>{item.addr}</Link></td>
                </tr>
            );
        });
    };

    const handleRegionSelect = (region) => {
        setSelectedRegion(region);
    }
    return (
        <section class="contents">


            <div class="selection">
                <div><Link to="/hospital_reservation/2">좌표 지정</Link></div>
                <div><a href="#">지역 선택</a></div>
            </div>

            <br/>
            <br/>


            <table width="99%" height="100%">
                <tr>

                    <td width="45%">
                        <table class="b">
                            <tr>
                                <td>
                                    <div class="twobox2">
                                        <table class="edge sss tt" width="25%" height="90%">
                                            <tr>
                                                <td>
                                                    <div onClick={() => handleRegionSelect('서울')}>서울</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div onClick={() => handleRegionSelect('경기도')}>경기</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>강원</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>대전</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>부산</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>울산</div>
                                                </td>
                                            </tr>

                                        </table>

                                        <table class="edge sss tt" width="65%" height="90%">


                                            <tr>
                                                <td>
                                                    <div className="selectCity">

                                                        {selectedRegion === '서울' && (
                                                            <ul>
                                                                {seoulDistricts.map((district) => (
                                                                    <li key={district} onClick={() => {setSido(district)}}>
                                                                        <Link
                                                                            to={`/hospital_reservation/1/?data=${district}`}>{district}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}

                                                        {selectedRegion === '경기도' && (
                                                            <ul>
                                                                {gyeonggiCities.map((city) => (
                                                                    <li key={city} onClick={() => {setSido(city)}}><Link
                                                                        to={`/hospital_reservation/1/?data=${city}`}>{city}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                </td>

                                            </tr>

                                        </table>

                                    </div>
                                </td>
                            </tr>
                            <tr><td><button onClick={hospList}>불러오기</button></td></tr>

                        </table>
                    </td>

                    <td width="10%">

                    </td>


                    <td width="45%">
                        <table class="aaa">

                            <tr>
                                <td height="20%">
                                    <table>
                                        <div class="hospital-list">
                                            <div class="hs" style={{marginLeft: "25px"}}>병원목록</div>
                                            <div style={{marginLeft: "170px"}}><a href="#">가나다순/거리순</a></div>
                                        </div>
                                    </table>
                                </td>
                            </tr>

                            <tr>
                                <td height="80%">
                                    <table width="95%" height="100%" align="center">
                                        <div className="renderList">
                                            {renderList()}
                                        </div>
                                        {/* <tr>
                                            <td class="edge"><Link to="/hospital_information">OO병원<br/>주소</Link></td>
                                        </tr>
                                        <tr>
                                            <td class="edge">OO병원<br />주소</td>
                                        </tr>
                                        <tr>
                                            <td class="edge">OO병원<br />주소</td>
                                        </tr>
                                        <tr>
                                            <td class="edge">OO병원<br />주소</td>
                                        </tr>*/}
                                    </table>
                                </td>
                            </tr>

                        </table>
                    </td>
                </tr>
            </table>


        </section>

    );
}

