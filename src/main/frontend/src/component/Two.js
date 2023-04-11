import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

// 서울에 속한 구 리스트
const seoulDistricts = ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'];

// 경기도에 속한 도시 리스트
const gyeonggiCities = ['가평군', '고양시', '과천시', '광명시', '광주시', '구리시', '군포시', '김포시', '남양주시', '동두천시', '부천시', '성남시', '수원시', '시흥시', '안산시', '안성시', '안양시', '양주시', '양평군', '여주시', '연천군', '오산시', '용인시', '의왕시', '의정부시', '이천시', '파주시', '평택시', '포천시', '하남시', '화성시'];

// 인천광역시에 속한 구 리스트
const incheonDistricts = ['강화군', '계양구', '남동구', '동구', '부평구', '서구', '연수구', '옹진군', '중구'];

// 충청북도에 속한 도시 리스트
const chungcheongNorthCities = ['괴산군', '단양군', '보은군', '영동군', '옥천군', '음성군', '제천시', '증평군', '진천군', '청원군', '청주시', '충주시'];

// 충청남도에 속한 도시 리스트
const chungcheongSouthCities = ['공주시', '금산군', '논산시', '당진시', '보령시', '부여군', '서산시', '서천군', '아산시', '예산군', '천안시', '청양군', '태안군', '홍성군'];

// 대전광역시에 속한 구 리스트
const daejeonDistricts = ['대덕구', '동구', '서구', '유성구', '중구'];

// 전라북도에 속한 도시 리스트
const jeollaNorthCities = ['고창군', '군산시', '김제시', '남원시', '무주군', '부안군', '순창군', '완주군', '익산시', '임실군', '장수군', '전주시', '정읍시'];

// 전라남도에 속한 도시 리스트
const jeollaSouthCities = ['강진군', '고흥군', '곡성군', '광양시', '구례군', '나주시', '담양군', '목포시', '무안군', '보성군', '순천시', '신안군', '여수시', '영광군', '영암군', '완도군', '장성군', '장흥군', '진도군', '함평군', '해남군', '화순군'];

// 광주광역시에 속한 구 리스트
const gwangjuDistricts = ['광산구', '남구', '동구', '북구', '서구'];

// 경상북도에 속한 도시 리스트
const gyeongsangbukdoCities = ['경산시', '경주시', '고령군', '구미시', '군위군', '김천시', '문경시', '봉화군', '상주시', '성주군', '안동시', '영덕군', '영양군', '영주시', '영천시', '예천군', '울릉군', '울진군', '의성군', '청도군', '청송군', '칠곡군', '포항시'];

// 대구에 속한 구 리스트
const daeguDistricts = ['남구', '달서구', '달성군', '동구', '북구', '서구', '수성구', '중구'];

// 경상남도에 속한 도시 리스트
const gyeongsangnamdoCities = ['거제시', '거창군', '고성군', '김해시', '남해군', '밀양시', '사천시', '산청군', '양산시', '의령군', '진주시', '창녕군', '창원시', '통영시', '하동군', '함안군', '함양군', '합천군'];

// 부산에 속한 구 리스트
const busanDistricts = ['강서구', '금정구', '기장군', '남구', '동구', '동래구', '부산진구', '북구', '사상구', '사하구', '서구', '수영구', '연제구', '영도구', '중구', '해운대구'];

// 울산에 속한 구 리스트
const ulsanDistricts = ['남구', '동구', '북구', '울주군', '중구'];

// 강원도에 속한 도시 리스트
const gangwonCities = ['강릉시', '고성군', '동해시', '삼척시', '속초시', '양구군', '양양군', '영월군', '원주시', '인제군', '정선군', '철원군', '춘천시', '태백시', '평창군', '홍천군', '화천군', '횡성군'];

// 제주도에 속한 도시 리스트
const jejuCities = ['서귀포시', '제주시'];
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
        if (loading) { //numOfRows=10 --> 표시되는 행의 수 (테스트를 위해 10으로 설정)
            axios.get(`https://apis.data.go.kr/B551182/hospInfoServicev2/getHospBasisList?serviceKey=G3OZp5dYqrTm0I9gNRRu%2BXouEslD9Gs7F%2BYz9LUKT8%2F%2BJjRHdzSmmSwbLnJ7vR6znJD4hftgOK5ZZ%2FCE9iG3XA%3D%3D&pageNo=1&numOfRows=10&emdongNm=${selectedRegion} ${sido}`)
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
                    <td className="edge"><Link to={`/hospital_information/?yadmNm=${item.yadmNm}&addr=${item.addr}`}>{item.yadmNm}<br/>{item.addr}</Link></td>
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
                                            <div className="selectCity1">
                                            <tr>
                                                <td>
                                                    <div onClick={() => handleRegionSelect('서울특별시')}>서울</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div onClick={() => handleRegionSelect('경기도')}>경기</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div onClick={() => handleRegionSelect('인천광역시')}>인천</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div onClick={() => handleRegionSelect('충청북도')}>충북</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div onClick={() => handleRegionSelect('충청남도')}>충남</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div onClick={() => handleRegionSelect('대전광역시')}>대전</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div onClick={() => handleRegionSelect('전라북도')}>전북</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div onClick={() => handleRegionSelect('전라남도')}>전남</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div onClick={() => handleRegionSelect('광주광역시')}>광주</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div onClick={() => handleRegionSelect('경상북도')}>경북</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div onClick={() => handleRegionSelect('대구광역시')}>대구</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div onClick={() => handleRegionSelect('경상남도')}>경남</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div onClick={() => handleRegionSelect('부산광역시')}>부산</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div onClick={() => handleRegionSelect('울산광역시')}>울산</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div onClick={() => handleRegionSelect('강원도')}>강원</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div onClick={() => handleRegionSelect('제주특별자치도')}>제주</div>
                                                </td>
                                            </tr>
                                            </div>
                                        </table>

                                        <table class="edge sss tt" width="65%" height="90%">


                                            <tr>
                                                <td>
                                                    <div className="selectCity2">

                                                        {selectedRegion === '서울특별시' && (
                                                            <ul>
                                                                {seoulDistricts.map((cd) => (
                                                                    <li key={cd} onClick={() => {setSido(cd)}}>
                                                                        <Link
                                                                            to={`/hospital_reservation/1/?data=${cd}`}>{cd}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}

                                                        {selectedRegion === '경기도' && (
                                                            <ul>
                                                                {gyeonggiCities.map((cd) => (
                                                                    <li key={cd} onClick={() => {setSido(cd)}}><Link
                                                                        to={`/hospital_reservation/1/?data=${cd}`}>{cd}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}

                                                        {selectedRegion === '인천광역시' && (
                                                            <ul>
                                                                {incheonDistricts.map((cd) => (
                                                                    <li key={cd} onClick={() => {setSido(cd)}}><Link
                                                                        to={`/hospital_reservation/1/?data=${cd}`}>{cd}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        {selectedRegion === '충청북도' && (
                                                            <ul>
                                                                {chungcheongNorthCities.map((cd) => (
                                                                    <li key={cd} onClick={() => {setSido(cd)}}><Link
                                                                        to={`/hospital_reservation/1/?data=${cd}`}>{cd}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        {selectedRegion === '충청남도' && (
                                                            <ul>
                                                                {chungcheongSouthCities.map((cd) => (
                                                                    <li key={cd} onClick={() => {setSido(cd)}}><Link
                                                                        to={`/hospital_reservation/1/?data=${cd}`}>{cd}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        {selectedRegion === '대전광역시' && (
                                                            <ul>
                                                                {daejeonDistricts.map((cd) => (
                                                                    <li key={cd} onClick={() => {setSido(cd)}}><Link
                                                                        to={`/hospital_reservation/1/?data=${cd}`}>{cd}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        {selectedRegion === '전라북도' && (
                                                            <ul>
                                                                {jeollaNorthCities.map((cd) => (
                                                                    <li key={cd} onClick={() => {setSido(cd)}}><Link
                                                                        to={`/hospital_reservation/1/?data=${cd}`}>{cd}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        {selectedRegion === '전라남도' && (
                                                            <ul>
                                                                {jeollaSouthCities.map((cd) => (
                                                                    <li key={cd} onClick={() => {setSido(cd)}}><Link
                                                                        to={`/hospital_reservation/1/?data=${cd}`}>{cd}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        {selectedRegion === '광주광역시' && (
                                                            <ul>
                                                                {gwangjuDistricts.map((cd) => (
                                                                    <li key={cd} onClick={() => {setSido(cd)}}><Link
                                                                        to={`/hospital_reservation/1/?data=${cd}`}>{cd}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        {selectedRegion === '경상북도' && (
                                                            <ul>
                                                                {gyeongsangbukdoCities.map((cd) => (
                                                                    <li key={cd} onClick={() => {setSido(cd)}}><Link
                                                                        to={`/hospital_reservation/1/?data=${cd}`}>{cd}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        {selectedRegion === '대구광역시' && (
                                                            <ul>
                                                                {daeguDistricts.map((cd) => (
                                                                    <li key={cd} onClick={() => {setSido(cd)}}><Link
                                                                        to={`/hospital_reservation/1/?data=${cd}`}>{cd}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        {selectedRegion === '경상남도' && (
                                                            <ul>
                                                                {gyeongsangnamdoCities.map((cd) => (
                                                                    <li key={cd} onClick={() => {setSido(cd)}}><Link
                                                                        to={`/hospital_reservation/1/?data=${cd}`}>{cd}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        {selectedRegion === '부산광역시' && (
                                                            <ul>
                                                                {busanDistricts.map((cd) => (
                                                                    <li key={cd} onClick={() => {setSido(cd)}}><Link
                                                                        to={`/hospital_reservation/1/?data=${cd}`}>{cd}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        {selectedRegion === '울산광역시' && (
                                                            <ul>
                                                                {ulsanDistricts.map((cd) => (
                                                                    <li key={cd} onClick={() => {setSido(cd)}}><Link
                                                                        to={`/hospital_reservation/1/?data=${cd}`}>{cd}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        {selectedRegion === '강원도' && (
                                                            <ul>
                                                                {gangwonCities.map((cd) => (
                                                                    <li key={cd} onClick={() => {setSido(cd)}}><Link
                                                                        to={`/hospital_reservation/1/?data=${cd}`}>{cd}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        {selectedRegion === '제주특별자치도' && (
                                                            <ul>
                                                                {jejuCities.map((cd) => (
                                                                    <li key={cd} onClick={() => {setSido(cd)}}><Link
                                                                        to={`/hospital_reservation/1/?data=${cd}`}>{cd}</Link>
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

