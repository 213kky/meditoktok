import {Link} from "react-router-dom";

export default function QuickMenu() {
    return (
        <aside>
            <div className="quickHospital">
                자주 찾는 병원
                <ul>
                    <span>로그인이 필요한 서비스입니다.</span>
                    <li><Link to="/hospital_information">OOO 병원</Link></li>
                    <li><Link to="/">OOO 병원</Link></li>
                    <li><Link to="/">OOO 병원</Link></li>
                </ul>
            </div>
            <div className="quickDisease">
                자주 찾는 질병
                <ul>
                    <span>로그인이 필요한 서비스입니다.</span>
                    <li><Link to="/disease_information">A 질병</Link></li>
                    <li><Link to="/">B 질병</Link></li>
                    <li><Link to="/">C 질병</Link></li>
                </ul>
            </div>
        </aside>
    );
}