import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import MyMap from "./MyMap";
import MyRegion from "./MyRegion";

export default function Two() {
    const [isMap, setIsMap] = useState(true);
    const [data, setData] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [sido, setSido] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleToggleMap = () => {
        setIsMap(true);
    };
    const handleToggleRegion = () => {
        setIsMap(false);
    };

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
        if (data === null) {
            return (
                <tr>
                    지역을 선택해주세요.
                </tr>
            );
        }
        const items = data.response.body.items.item;
        return items.map((item, index) => {
            return (
                <tr key={index}>
                    <td><Link
                        to={`/hospital_information/?yadmNm=${item.yadmNm}&addr=${item.addr}`}>{item.yadmNm}<br/>{item.addr}
                    </Link></td>
                </tr>
            );
        });
    };

    return(
        <section className="contents">
            <div className="mapOrRegionBox">
                <div className="mapOrRegionSelect">
                    <div onClick={handleToggleMap} className={`${isMap ?  'selected': ''}`}>좌표 지정</div>
                    <div onClick={handleToggleRegion} style={{marginLeft:"32px"}} className={`${isMap ?  '': 'selected'}`}>지역 선택</div>
                </div>
                <div className={`${isMap ?  'mapBox': 'regionBox'}`}>
                    {isMap ? <MyMap /> : <MyRegion mode={1} selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} sido={sido} setSido={setSido} setLoading={setLoading}/> }
                </div>
            </div>
            <div className="hospitalListBox">
                <div className="hospitalListA">병원목록 <span>가나다순 | 거리순</span></div>
                <div className="hospitalListB" style={{height:"496px"}}><table>{renderList()}</table></div>
            </div>
        </section>
    );

}

