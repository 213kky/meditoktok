import { Link } from "react-router-dom";
import './Header.css'

export default function Header() {
  return (
  <div className="header">
    <div class="log">
    <span><Link to="/">로그인</Link></span>
    <span> | </span>
    <span><Link to="/">회원가입</Link></span>
    </div>
  <div class="mainLogo"><Link to="/">메디톡톡</Link><div>관리자</div></div>
  <div class="MhospitalName">OOO 병원</div>
  <nav class="headerNav">
    <ul>
      <li><Link to="/manager1">병원 정보 수정 / 공지사항</Link></li>
      <li><Link to="/manager2">예약시간 관리</Link></li>
      <li><Link to="/manager3">예약자 관리</Link></li>
    </ul>
  </nav>
  </div>
  );
}