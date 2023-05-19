import {Link} from "react-router-dom";
import React, {useState, useRef} from "react";
import MyMap from "./MyMap";
import MyRegion from "./MyRegion";

export default function Two() {
    const [isMap, setIsMap] = useState(true);
    const [data, setData] = useState(null);
    const scrollRef = useRef(null);
    const [sortSelect, setSortSelect] = useState('abc');
    const [hospitals, setHospitals] = useState([]);
    const [totalCount, setTotalCount] = useState(null);
    const handleToggleMap = () => {
        setIsMap(true);
    };
    const handleToggleRegion = () => {
        setIsMap(false);
    };

    const mapRenderList = () => {
        if (totalCount === null) {
            return (
                <tr>
                    <h3>로딩 중 입니다...</h3>
                </tr>
            );

        }
        if (totalCount === 0) {
            return (
                <tr>
                    조건에 맞는 병원이 없습니다.
                </tr>
            );
        } else if (totalCount == 1) {
            const item = hospitals;
            return (
                <tr key={0}>
                    <Link
                        to={`/hospital_information/?yadmNm=${item.yadmNm}&addr=${item.addr}`}>
                        <td>{item.yadmNm}<br/>{item.addr}
                        </td>
                    </Link>
                </tr>
            );
        }

        const items = hospitals;

        if (scrollRef.current) { //스크롤 초기화
            scrollRef.current.scrollTop = 0;
        }
        if (sortSelect === 'abc') {
            items.sort((a, b) => a.yadmNm.localeCompare(b.yadmNm)); // 가나다 오름차순
        } else if (sortSelect === 'cba') {
            items.sort((a, b) => b.yadmNm.localeCompare(a.yadmNm)); // 가나다 내림차순
        } else if (sortSelect === 'distance') {
            items.sort((a, b) => a.distance - b.distance);
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
        if (sortSelect === 'distance') {
            setSortSelect('abc')
        }
        if (sortSelect === 'abc') {
            items.sort((a, b) => a.yadmNm.localeCompare(b.yadmNm)); // 가나다 오름차순
        } else if (sortSelect === 'cba') {
            items.sort((a, b) => b.yadmNm.localeCompare(a.yadmNm)); // 가나다 내림차순
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
                    {isMap ? <MyMap mode={1} setTotalCount={setTotalCount} setHospitals={setHospitals}/> :
                        <MyRegion mode={1} setData={setData}/>}
                </div>
            </div>
            <div className="hospitalListBox">
                <div className="hospitalListA">병원목록
                    <select className="sortSelect" name="sort" onChange={(e) => setSortSelect(e.target.value)}>
                        <option value="abc">가나다 오름차순</option>
                        <option value="cba">가나다 내림차순</option>
                        {isMap ? <option value="distance">거리 가까운순</option> : null}
                    </select>
                </div>
                <div ref={scrollRef} className="hospitalListB" style={{height: "496px"}}>
                    <table>{isMap ? mapRenderList() : regionRenderList()}</table>
                </div>
            </div>
        </section>
    );

}

