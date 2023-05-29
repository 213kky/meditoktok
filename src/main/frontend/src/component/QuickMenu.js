import {Link} from "react-router-dom";

export default function QuickMenu(props) {
    return (
        <aside>
            <div className="quickHospital">
                자주 찾는 병원
                <ul>
                    {props.isLogin ? <><li><Link to="/hospital_information">세란병원</Link></li>
                        <li><Link to="/">본병원</Link></li>
                        <li><Link to="/">삼성서울병원</Link></li></> : <span>로그인이 필요한 서비스입니다.</span> }
                </ul>
            </div>
            <div className="quickDisease">
                자주 찾는 질병
                <ul>
                    {props.isLogin ? <><li><Link to="/disease_information">녹내장</Link></li>
                        <li><Link to="/">감기</Link></li>
                        <li><Link to="/">중이염</Link></li></> : <span>로그인이 필요한 서비스입니다.</span>}
                </ul>
            </div>
        </aside>
    );
}