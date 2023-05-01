import {Link} from "react-router-dom";
import App from "../App";

export default function Header(props) {
    return (
        <header>
            <div className="sign">
                <span onClick={props.onToggleAdmin} style={{color:"white"}}>관리자 페이지로</span>
                <span><Link to="/login">로그인</Link></span>
                <span>|</span>
                <span><Link to="/signup">회원가입</Link></span>
            </div>
            <div className="mainLogo"><Link to="/">메디톡톡</Link></div>
            <div className="headerNav">
                <ul>
                    <li><Link to="/symptom_search">증상 검색</Link></li>
                    <li><Link to="/disease_search">질병 정보</Link></li>
                    <li><Link to="/hospital_reservation/0">병원 예약</Link></li>
                    <li><Link to="/my_page">마이페이지</Link></li>
                </ul>
            </div>
        </header>
    );
}