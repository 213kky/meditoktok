import {Link} from "react-router-dom";

export default function QuickMenu(props) {
    return (
        <aside>
            <div className="quickHospital">
                자주 찾는 병원
                <ul>
                    {props.isLogin ? <><li><Link to="/hospital_information">OOO 병원</Link></li>
                        <li><Link to="/">OOO 병원</Link></li>
                        <li><Link to="/">OOO 병원</Link></li></> : <span>로그인이 필요한 서비스입니다.</span> }
                </ul>
            </div>
            <div className="quickDisease">
                자주 찾는 질병
                <ul>
                    {props.isLogin ? <><li><Link to="/disease_information">A 질병</Link></li>
                        <li><Link to="/">B 질병</Link></li>
                        <li><Link to="/">C 질병</Link></li></> : <span>로그인이 필요한 서비스입니다.</span>}
                </ul>
            </div>
        </aside>
    );
}