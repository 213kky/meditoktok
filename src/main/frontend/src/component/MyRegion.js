import {Link} from "react-router-dom";
import React from "react";

// 서울에 속한 구 리스트
const seoulDistricts = ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'];

// 경기도에 속한 도시 리스트
const gyeonggiCities = ['가평군', '고양시', '과천시', '광명시', '광주시', '구리시', '군포시', '김포시', '남양주시', '동두천시', '부천시', '성남시', '수원시', '시흥시', '안산시', '안성시', '안양시', '양주시', '양평군', '여주시', '연천군', '오산시', '용인시', '의왕시', '의정부시', '이천시', '파주시', '평택시', '포천시', '하남시', '화성시'];

// 인천광역시에 속한 구 리스트
const incheonDistricts = ['강화군', '계양구', '남동구', '동구', '부평구', '서구', '연수구', '옹진군', '중구'];

// 충청북도에 속한 도시 리스트
const chungcheongNorthCities = ['괴산군', '단양군', '보은군', '영동군', '옥천군', '음성군', '제천시', '증평군', '진천군', '청주시', '충주시'];

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

//세종시 없음. 도시 전체 점검 필요할듯 chat gpt ㅄ임
export default function MyRegion(props) {
    const hospList = (cd) => {
        props.setSido(cd);
        props.setLoading(true);
    }
    const handleRegionSelect = (region) => {
        props.setSelectedRegion(region);
    }

    const isRegionSelected = (region) => {
        return region === props.selectedRegion;
    };
    const isSidoSelected = (cd) => {
        return cd === props.sido;
    };

    return (
        <div width="100%" height="100%">
            <div className="selectCity1">
                <div
                    className={`${isRegionSelected('서울특별시') ? 'selected' : ''}`}
                    onClick={() => handleRegionSelect('서울특별시')}>서울
                </div>
                <div
                    className={`${isRegionSelected('경기도') ? 'selected' : ''}`}
                    onClick={() => handleRegionSelect('경기도')}>경기
                </div>

                <div
                    className={`${isRegionSelected('인천광역시') ? 'selected' : ''}`}
                    onClick={() => handleRegionSelect('인천광역시')}>인천
                </div>

                <div
                    className={`${isRegionSelected('충청북도') ? 'selected' : ''}`}
                    onClick={() => handleRegionSelect('충청북도')}>충북
                </div>

                <div
                    className={`${isRegionSelected('충청남도') ? 'selected' : ''}`}
                    onClick={() => handleRegionSelect('충청남도')}>충남
                </div>

                <div
                    className={`${isRegionSelected('대전광역시') ? 'selected' : ''}`}
                    onClick={() => handleRegionSelect('대전광역시')}>대전
                </div>

                <div
                    className={`${isRegionSelected('전라북도') ? 'selected' : ''}`}
                    onClick={() => handleRegionSelect('전라북도')}>전북
                </div>

                <div
                    className={`${isRegionSelected('전라남도') ? 'selected' : ''}`}
                    onClick={() => handleRegionSelect('전라남도')}>전남
                </div>

                <div
                    className={`${isRegionSelected('광주광역시') ? 'selected' : ''}`}
                    onClick={() => handleRegionSelect('광주광역시')}>광주
                </div>

                <div
                    className={`${isRegionSelected('경상북도') ? 'selected' : ''}`}
                    onClick={() => handleRegionSelect('경상북도')}>경북
                </div>

                <div
                    className={`${isRegionSelected('대구광역시') ? 'selected' : ''}`}
                    onClick={() => handleRegionSelect('대구광역시')}>대구
                </div>

                <div
                    className={`${isRegionSelected('경상남도') ? 'selected' : ''}`}
                    onClick={() => handleRegionSelect('경상남도')}>경남
                </div>

                <div
                    className={`${isRegionSelected('부산광역시') ? 'selected' : ''}`}
                    onClick={() => handleRegionSelect('부산광역시')}>부산
                </div>

                <div
                    className={`${isRegionSelected('울산광역시') ? 'selected' : ''}`}
                    onClick={() => handleRegionSelect('울산광역시')}>울산
                </div>

                <div
                    className={`${isRegionSelected('강원도') ? 'selected' : ''}`}
                    onClick={() => handleRegionSelect('강원도')}>강원
                </div>

                <div
                    className={`${isRegionSelected('제주특별자치도') ? 'selected' : ''}`}
                    onClick={() => handleRegionSelect('제주특별자치도')}>제주
                </div>

            </div>
            <div className="selectCity2">

                {props.selectedRegion === '서울특별시' && (
                    <ul>
                        {seoulDistricts.map((cd) => (
                            <li className={`${isSidoSelected(cd) ? 'selected' : ''}`}
                                key={cd} onClick={() => {
                                hospList(cd)
                            }}>
                                <Link
                                    to={`/hospital_reservation/${props.mode}/?data=${cd}`}>{cd}</Link>
                            </li>
                        ))}
                    </ul>
                )}

                {props.selectedRegion === '경기도' && (
                    <ul>
                        {gyeonggiCities.map((cd) => (
                            <li className={`${isSidoSelected(cd) ? 'selected' : ''}`}
                                key={cd} onClick={() => {
                                hospList(cd)
                            }}><Link
                                to={`/hospital_reservation/${props.mode}/?data=${cd}`}>{cd}</Link>
                            </li>
                        ))}
                    </ul>
                )}

                {props.selectedRegion === '인천광역시' && (
                    <ul>
                        {incheonDistricts.map((cd) => (
                            <li className={`${isSidoSelected(cd) ? 'selected' : ''}`}
                                key={cd} onClick={() => {
                                hospList(cd)
                            }}><Link
                                to={`/hospital_reservation/${props.mode}/?data=${cd}`}>{cd}</Link>
                            </li>
                        ))}
                    </ul>
                )}
                {props.selectedRegion === '충청북도' && (
                    <ul>
                        {chungcheongNorthCities.map((cd) => (
                            <li className={`${isSidoSelected(cd) ? 'selected' : ''}`}
                                key={cd} onClick={() => {
                                hospList(cd)
                            }}><Link
                                to={`/hospital_reservation/${props.mode}/?data=${cd}`}>{cd}</Link>
                            </li>
                        ))}
                    </ul>
                )}
                {props.selectedRegion === '충청남도' && (
                    <ul>
                        {chungcheongSouthCities.map((cd) => (
                            <li className={`${isSidoSelected(cd) ? 'selected' : ''}`}
                                key={cd} onClick={() => {
                                hospList(cd)
                            }}><Link
                                to={`/hospital_reservation/${props.mode}/?data=${cd}`}>{cd}</Link>
                            </li>
                        ))}
                    </ul>
                )}
                {props.selectedRegion === '대전광역시' && (
                    <ul>
                        {daejeonDistricts.map((cd) => (
                            <li className={`${isSidoSelected(cd) ? 'selected' : ''}`}
                                key={cd} onClick={() => {
                                hospList(cd)
                            }}><Link
                                to={`/hospital_reservation/${props.mode}/?data=${cd}`}>{cd}</Link>
                            </li>
                        ))}
                    </ul>
                )}
                {props.selectedRegion === '전라북도' && (
                    <ul>
                        {jeollaNorthCities.map((cd) => (
                            <li className={`${isSidoSelected(cd) ? 'selected' : ''}`}
                                key={cd} onClick={() => {
                                hospList(cd)
                            }}><Link
                                to={`/hospital_reservation/${props.mode}/?data=${cd}`}>{cd}</Link>
                            </li>
                        ))}
                    </ul>
                )}
                {props.selectedRegion === '전라남도' && (
                    <ul>
                        {jeollaSouthCities.map((cd) => (
                            <li className={`${isSidoSelected(cd) ? 'selected' : ''}`}
                                key={cd} onClick={() => {
                                hospList(cd)
                            }}><Link
                                to={`/hospital_reservation/${props.mode}/?data=${cd}`}>{cd}</Link>
                            </li>
                        ))}
                    </ul>
                )}
                {props.selectedRegion === '광주광역시' && (
                    <ul>
                        {gwangjuDistricts.map((cd) => (
                            <li className={`${isSidoSelected(cd) ? 'selected' : ''}`}
                                key={cd} onClick={() => {
                                hospList(cd)
                            }}><Link
                                to={`/hospital_reservation/${props.mode}/?data=${cd}`}>{cd}</Link>
                            </li>
                        ))}
                    </ul>
                )}
                {props.selectedRegion === '경상북도' && (
                    <ul>
                        {gyeongsangbukdoCities.map((cd) => (
                            <li className={`${isSidoSelected(cd) ? 'selected' : ''}`}
                                key={cd} onClick={() => {
                                hospList(cd)
                            }}><Link
                                to={`/hospital_reservation/${props.mode}/?data=${cd}`}>{cd}</Link>
                            </li>
                        ))}
                    </ul>
                )}
                {props.selectedRegion === '대구광역시' && (
                    <ul>
                        {daeguDistricts.map((cd) => (
                            <li className={`${isSidoSelected(cd) ? 'selected' : ''}`}
                                key={cd} onClick={() => {
                                hospList(cd)
                            }}><Link
                                to={`/hospital_reservation/${props.mode}/?data=${cd}`}>{cd}</Link>
                            </li>
                        ))}
                    </ul>
                )}
                {props.selectedRegion === '경상남도' && (
                    <ul>
                        {gyeongsangnamdoCities.map((cd) => (
                            <li className={`${isSidoSelected(cd) ? 'selected' : ''}`}
                                key={cd} onClick={() => {
                                hospList(cd)
                            }}><Link
                                to={`/hospital_reservation/${props.mode}/?data=${cd}`}>{cd}</Link>
                            </li>
                        ))}
                    </ul>
                )}
                {props.selectedRegion === '부산광역시' && (
                    <ul>
                        {busanDistricts.map((cd) => (
                            <li className={`${isSidoSelected(cd) ? 'selected' : ''}`}
                                key={cd} onClick={() => {
                                hospList(cd)
                            }}><Link
                                to={`/hospital_reservation/${props.mode}/?data=${cd}`}>{cd}</Link>
                            </li>
                        ))}
                    </ul>
                )}
                {props.selectedRegion === '울산광역시' && (
                    <ul>
                        {ulsanDistricts.map((cd) => (
                            <li className={`${isSidoSelected(cd) ? 'selected' : ''}`}
                                key={cd} onClick={() => {
                                hospList(cd)
                            }}><Link
                                to={`/hospital_reservation/${props.mode}/?data=${cd}`}>{cd}</Link>
                            </li>
                        ))}
                    </ul>
                )}
                {props.selectedRegion === '강원도' && (
                    <ul>
                        {gangwonCities.map((cd) => (
                            <li className={`${isSidoSelected(cd) ? 'selected' : ''}`}
                                key={cd} onClick={() => {
                                hospList(cd)
                            }}><Link
                                to={`/hospital_reservation/${props.mode}/?data=${cd}`}>{cd}</Link>
                            </li>
                        ))}
                    </ul>
                )}
                {props.selectedRegion === '제주특별자치도' && (
                    <ul>
                        {jejuCities.map((cd) => (
                            <li className={`${isSidoSelected(cd) ? 'selected' : ''}`}
                                key={cd} onClick={() => {
                                hospList(cd)
                            }}><Link
                                to={`/hospital_reservation/${props.mode}/?data=${cd}`}>{cd}</Link>
                            </li>
                        ))}
                    </ul>
                )}

            </div>

        </div>

    );
}

