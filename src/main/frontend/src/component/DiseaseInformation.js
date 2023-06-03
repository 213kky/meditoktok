import DiseaseInfo from "./DiseaseInfo";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function DiseaseInformation() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const cntntsSn = queryParams.get('cntntsSn');
    const department = queryParams.get('department');
    const code = queryParams.get('code').split(', ');
    console.log("code: ",code);

    const [data, setData] = useState(null);

    // useEffect(() => {
    //     //numOfRows=10 --> 표시되는 행의 수 (테스트를 위해 10으로 설정)
    //     axios.get(`https://api.kdca.go.kr/api/provide/healthInfo?TOKEN=1872816dcdd1&cntntsSn=${cntntsSn}`)
    //         .then(response => {
    //             setData(response.data);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         })
    //         .finally(() => {
    //         });
    //
    // }, []);
    useEffect(() => {
        import(`./diseaseDummy/disease${cntntsSn}.json`)
            .then((module) => {
                const json = module.default;
                setData(json);
            })
            .catch((error) => {
                console.error('Error importing JSON:', error);
            });
    }, [cntntsSn]);

    const renderInfo = () => {
        if (data === null) {
            return;
        }
        const info = data.XML.svc.cntntsClList.cntntsCl;
        let prevData = "";
        return info.map((item, index) => {
                if (prevData === item.CNTNTS_CL_NM.__cdata) {
                    if (item.CNTNTS_CL_CN.__cdata.includes("https://chs.kdca.go.kr")) {
                        return (
                            <img style={{display: "block", margin: "0 auto"}} src={item.CNTNTS_CL_CN.__cdata} alt="이미지"/>);
                    }
                    return (<span className="boxInfo">{item.CNTNTS_CL_CN.__cdata}</span>);
                }
                prevData = item.CNTNTS_CL_NM.__cdata;
                if (item.CNTNTS_CL_CN.__cdata.includes("https://chs.kdca.go.kr")) {
                    return (<img style={{display: "block", margin: "0 auto"}} src={item.CNTNTS_CL_CN.__cdata} alt="이미지"/>);
                }
                return (
                    <DiseaseInfo subject={item.CNTNTS_CL_NM.__cdata} content={item.CNTNTS_CL_CN.__cdata}/>
                )
            }
        )
    }

    return (
        <div>
            <section className="contents">
                {/*style={{float: "left",}} 아래 div 스타일 (사진 있을 시)*/}
                <div>
                    <div className="disease">{data ? data.XML.svc.CNTNTSSJ.__cdata : null}</div>
                    <div className="department">{department}</div>
                    <div className="hospitalList"><Link to={`/hospital_reservation/1?code=${code[0]}`}>병원목록</Link></div>
                </div>
                {/*<div className="disease_image1">질병 사진</div>*/}
                <div className="diseaseInfo" style={{marginTop: "10px",}}>
                    {renderInfo()}
                </div>
                <div className="open-box">
                    <ul style={{fontSize:"14px"}}>
                        {/*<li><Link to="https://www.kogl.or.kr/info/licenseType4.do" target="_blank" title="공공누리 바로가기"><img*/}
                        {/*    src="https://health.kdca.go.kr/healthinfo/static/images/sub/open.png" alt="공공누리"/></Link></li>*/}
                        {/*<li style={{display:"inline-block"}}>본 공공저작물은 공공누리<strong> "출처표시+상업적이용금지+변경금지" </strong>조건에 따라 이용할 수 있습니다.</li>*/}
                        <li>이 저작물은 질병관리청 국가건강정보포털의 "건강정보"에서 발췌하였으며, 해당 저작물은 국가건강정보포털 누리집<a href="https://health.kdca.go.kr" target="_blank">(health.kdca.go.kr)</a>에서 무료로 사용하실 수
                            있습니다. <br/>이 저작물은 질병관리청 국가건강정보포털<a href="https://health.kdca.go.kr" target="_blank">(health.kdca.go.kr)</a>의 "건강정보"에서 발췌한 것입니다. <br/> 출처: 질병관리청 국가건강정보포털<a href="https://health.kdca.go.kr" target="_blank">(health.kdca.go.kr)</a>, "건강정보", 2023-06-02,
                            <br/>웹 주소 <a href="https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfo/gnrlzHealthInfoMain.do?lclasSn=1" target="_blank">(https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfo/gnrlzHealthInfoMain.do?lclasSn=1)</a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}