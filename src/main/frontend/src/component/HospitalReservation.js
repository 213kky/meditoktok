import React, {useEffect, useRef, useState} from "react";
import MyMap from "./MyMap";
import MyRegion from "./MyRegion";
import axios from "axios";
import {Link} from "react-router-dom";

export default function HospitalReservation() {
    const [isMap, setIsMap] = useState(true);
    const [data, setData] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [sido, setSido] = useState(null);
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [mapData, setMapData] = useState(null);

    const scrollRef = useRef(null);
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
    // useEffect(() => {
    //     if (mapLoading) { //numOfRows=10 --> 표시되는 행의 수 (테스트를 위해 10으로 설정)
    //         axios.get(`https://apis.data.go.kr/B551182/hospInfoServicev2/getHospBasisList?ServiceKey=%2Fzt1jmOZn0y5Q8ql8mxBIKRoXvyqetyRjCvZUNCV6OCXxnnYWFFZUnNcW5E2yCax4iZMPg%2FAbMM%2FpAw7%2BeYhtQ%3D%3D&pageNo=1&numOfRows=100&xPos=${mapX}&yPos=${mapY}&radius=1000`)
    //             .then(response => {
    //                 setData(response.data);
    //             })
    //             .catch(error => {
    //                 console.error(error);
    //             })
    //             .finally(() => {
    //                 setMapLoading(false);
    //             });
    //     }
    // }, [mapLoading]);
    const mapRenderList = () => {
        if (mapData === null) {
            return (
                <tr>
                    <h3>로딩 중 입니다...</h3>
                </tr>
            );

        }
        if (mapData.response.body.totalCount === 0) {
            return (
                <tr>
                    조건에 맞는 병원이 없습니다.
                </tr>
            );
        }

        const items = mapData.response.body.items.item;

        if (scrollRef.current) { //스크롤 초기화
            scrollRef.current.scrollTop = 0;
        }

        return items.map((item, index) => {
            return (
                <tr key={index}>
                    <Link
                        to={`/hospital_information/?yadmNm=${item.yadmNm}&addr=${item.addr}`}>
                        <td>{item.yadmNm}<br/>{item.addr}
                        </td>
                    </Link>
                </tr>
            );
        });
    };

    const regionRenderList = () => {
        if (data === null) {
            return (
                <tr>
                    <h3>지역을 선택해주세요.</h3>
                </tr>
            );
        }
        if (data.response.body.totalCount === 0) {
            return (
                <tr>
                    조건에 맞는 병원이 없습니다.
                </tr>
            );
        }

        const items = data.response.body.items.item;

        if (scrollRef.current) { //스크롤 초기화
            scrollRef.current.scrollTop = 0;
        }

        return items.map((item, index) => {
            return (
                <tr key={index}>
                    <Link
                        to={`/hospital_information/?yadmNm=${item.yadmNm}&addr=${item.addr}`}>
                        <td>{item.yadmNm}<br/>{item.addr}
                        </td>
                    </Link>
                </tr>
            );
        });
    };


    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    return (
        <section className="contents">
            <div className="mapOrRegionBox">
                <div className="mapOrRegionSelect">
                    <div onClick={handleToggleMap} className={`${isMap ? 'selected' : ''}`}>좌표 지정</div>
                    <div onClick={handleToggleRegion} style={{marginLeft: "32px"}}
                         className={`${isMap ? '' : 'selected'}`}>지역 선택
                    </div>
                </div>
                <div className={`${isMap ? 'mapBox' : 'regionBox'}`}>
                    {/*setMapX={setMapX} setMapY={setMapY} setMapLoading={setMapLoading}*/}
                    {isMap ? <MyMap setMapData={setMapData}/> :
                        <MyRegion mode={0} selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}
                                  sido={sido} setSido={setSido} setLoading={setLoading}/>}
                </div>
            </div>
            <div className="hospitalListBox">
                <div className="hospitalListA">병원목록 <span>가나다순 | 거리순</span></div>
                <div ref={scrollRef} className="hospitalListB">
                    <table>{ isMap ? mapRenderList() : regionRenderList()}</table>
                </div>
                <input type="text" name="searchKeyword" placeholder="병원 이름 검색하기" value={inputValue}
                       onChange={handleInputChange}/>
            </div>
        </section>
    );
}