import DiseaseInfo from "./DiseaseInfo";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function DiseaseInformation() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const cntntsSn = queryParams.get('cntntsSn');
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
                        return (<img style={{display: "block", margin: "0 auto"}} src={item.CNTNTS_CL_CN.__cdata} alt="이미지"/>);
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
                    <div className="department">소화기내과</div>
                    <div className="hospitalList"><Link to="/hospital_reservation/1">병원목록</Link></div>
                </div>
                {/*<div className="disease_image1">질병 사진</div>*/}
                <div className="diseaseInfo" style={{marginTop: "10px",}}>
                    {renderInfo()}
                </div>
            </section>
        </div>
    );
}