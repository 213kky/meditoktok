import DiseaseInfo from "./DiseaseInfo";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function DiseaseInformation() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const cntntsSn = queryParams.get('cntntsSn');
    const [data, setData] = useState(null);
    useEffect(() => {
        //numOfRows=10 --> 표시되는 행의 수 (테스트를 위해 10으로 설정)
        axios.get(`http://api.kdca.go.kr/api/provide/healthInfo?TOKEN=1872816dcdd1&cntntsSn=${cntntsSn}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
            });

    }, []);

    return (
        <div>
            <section className="contents">
                <div style={{float: "left",}}>
                    <div className="disease">간염{cntntsSn}</div>
                    <div className="department">소화기내과</div>
                    <div className="hospitalList"><Link to="/hospital_reservation/1">병원목록</Link></div>
                </div>
                <div className="disease_image1">질병 사진</div>
                <div className="diseaseInfo" style={{marginTop: "10px",}}>
                    <DiseaseInfo subject={"정의"}
                                 content={"바이러스 간염이란 바이러스 감염으로 인해 간 조직에 염증이 생기고, 다양한 증상이 나타나는 질환을 말합니다."}/>
                    <DiseaseInfo subject={"원인"}
                                 content={"바이러스 간염의 주요 발생 원인은 A형, B형, C형, D형 및 E형 간염 바이러스입니다.\nB형간염과 C형간염은 급성 간염 이후에 만성 간염으로 진행할 수 있는데 반해 A형간염과 E형간염은 급성 간염에서 만성 간염으로 진행하지 않습니다."}/>
                    <DiseaseInfo subject={"증상"}
                                 content={"1. 만성 간염의 일반적인 증상\n\n만성 바이러스 간염의 증상은 무증상 감염에서부터 말기 간부전까지 다양합니다. 만성 간염 초기에는 대부분 특별한 증상이 없으며 질환이 진행하면서 서서히 증상을 경험하게 됩니다. 간염과 관련된 증상으로는 만성 피로가 가장 흔합니다. 만성 간염이 진행된 경우 간헐적 또는 지속적 황달이 오게 되며 식욕 부진, 구역 또는 구토를 호소하는 경우도 있습니다.\n\n2. 만성 간염의 합병증과 관련된 증상\n\n1) 간경화(간경변증)의 증상\n\n간경화(간경변증)로 인해 발생하는 대표적인 증상인 황달은 짙은 갈색 소변과 눈의 흰자위와 피부가 노랗게 변하는 증상을 말합니다. 복수가 차면 복부 팽만감을 느끼게 되고 이로 인해 식욕 부진이 더욱 심해지기도 합니다. 간경화(간경변증)가 진행하면서 식도 또는 위 정맥이 늘어나는 정맥류가 발생하기도 하며, 이는 간경화(간경변증) 환자에서 심각한 위장관 출혈의 원인이 됩니다. 또한 간 기능이 나빠지면서 간성 혼수가 발생하기도 하는데 시간, 장소, 사람에 대한 지남력이 떨어지고 심한 경우 의식이 흐려지는 증상이 발생하기도 합니다.\n\n2) 간암(간세포암종)의 증상\n\n진행성 간암으로 진행하기 전까지는 간암 환자의 대부분은 간암과 관련된 특별한 증상을 느끼지 않습니다. 간암이 진행하면서 식욕 부진이 심해져서 식사량이 줄고 이에 따라 체중이 감소하는 경우도 있으나, 간경화(간경변증)가 동반된 경우가 많아 복수가 차면 체중이 오히려 늘게 되는 경우도 있습니다. 증상이 발현하는 진행 간암 상태로 진단되는 경우, 효과적인 치료를 기대하기 어렵고 임상 경과가 매우 좋지 못하므로 간암의 고위험군인 만성 간염 환자는 주기적인 간암 감시 검사를 반드시 받아야 합니다."}/>
                    <DiseaseInfo subject={"진단/검사"}
                                 content={"1. B형간염의 진단\n\nB형간염은 B형간염 바이러스 표면 항원(HBsAg)을 혈액에서 검출하는 혈액 검사를 통해 진단하는데, 이 검사만으로 B형간염을 진단할 수 있습니다. 만성 B형간염은 표면 항원이 6개월 이상 양성인 경우를 말합니다. 만성 B형간염 환자에서는 B형간염 바이러스 증식 정도를 평가하는 것이 매우 중요합니다. 바이러스의 증식 정도를 평가하기 위해 e항원/e항체(HBeAg/anti-HBe) 검사, 혈청 B형간염 바이러스 DNA 정량 검사를 시행합니다. 만성 B형 간염은 간 효소 수치, 혈액 내 바이러스(혈청 HBV DNA) 수치, 표면 항원 검사 결과에 따라 면역 관용기, e항원(HBeAg) 양성 면역 활동기, 면역 비활동기, e항원(HBeAg) 음성 면역 활동기, 표면 항원(HBsAg) 소실기로 나뉘어집니다.\n\n2. C형간염의 진단\n\nC형간염 여부 확인을 위해 일차 선별 검사로 C형간염 바이러스에 대한 항체(HCV 항체)를 검출하는 검사를 시행합니다. 혈액에서 C형간염 바이러스에 대한 항체가 검출되는 경우, C형간염의 진단을 위해서는 C형간염 바이러스 RNA 검사(HCV RNA 검사)를 시행합니다. 실시간 중합 효소 연쇄 반응법(real-time PCR, Polymerase Chain Reaction)을 이용하여 매우 적은 양의 HCV RNA도 검출할 수 있으며 C형간염의 진단 및 치료 반응 평가에 널리 사용하고 있습니다. 6개월 이상 C형간염이 지속되는 경우 만성 C형간염으로 진단할 수 있습니다. 일반적으로 HCV RNA 검사와 함께 C형간염 바이러스 유전자형 검사를 시행하여 항바이러스 치료 반응 예측 등에 활용하게 됩니다."}/>
                    <DiseaseInfo subject={"치료"}
                                 content={"1. 급성 바이러스 간염의 치료\n\n급성 바이러스 간염에 대한 특이적인 치료법은 없으며, 일반적으로 영양 수액 주사, 절대적 안정과 같은 치료에 의존하게 됩니다. 이전에 건강했던 젊은 환자에게는 절대적 안정은 필요하지 않으나 황달이나 구역 및 식욕 부진과 같은 증상이 심한 경우 적절한 수분과 영양 공급을 위해 영양 수액 주사 요법을 시행하면서 휴식을 취하게 합니다. 식이 요법으로는 적절한 고단백, 고칼로리 식단이 권장됩니다. B형간염의 경우 급성 간염에 걸린 성인 환자의 대부분은 급성 간염에서 회복되는 반면, C형 간염의 경우 성인 환자의 대부분이 만성 간염으로 진행하게 되므로 추적 검사를 통해 만성 간염으로 진행하는지 확인해야 합니다."}/>
                    <DiseaseInfo subject={"합병증"} content={"간경화(간경변증) 및 간암(간세포 암종)"}/>
                </div>
            </section>
        </div>
    );
}