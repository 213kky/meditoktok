import {Link} from "react-router-dom";
import './Header.css'
import {useCookies} from "react-cookie";

export default function Header(props) {
    const [cookies, setCookie, removeCookie] = useCookies(['memberInfo']);
    const cookieValue = cookies['memberInfo'];
    return (
        <div className="header">
            <div class="log">
                <span onClick={props.onToggleAdmin} style={{color: "white"}}>관리자 페이지로</span>
                {props.isLogin ? <><span>{cookieValue.name}님</span><span>|</span><span onClick={()=>{removeCookie('memberInfo'); props.setIsLogin(false); props.setIsAdmin(false)}}><Link to="/">로그아웃</Link></span></>:  <><span><Link to="/login">로그인</Link></span><span>|</span><span><Link to="/signup">회원가입</Link></span></> }

                {/*<span><Link to="/">로그인</Link></span>*/}
                {/*<span> | </span>*/}
                {/*<span><Link to="/">회원가입</Link></span>*/}
            </div>
            <div class="mainLogo"><Link to="/">메디톡톡</Link>
                <div className="manager_ver">관리자</div>
            </div>
            <div class="MhospitalName">{props.hospName}</div>
            <nav class="MheaderNav">
                <ul>
                    <li><Link to="/manager1">병원 정보 수정 / 공지사항</Link></li>
                    <li><Link to="/manager2">예약시간 관리</Link></li>
                    <li><Link to="/manager3">예약자 관리</Link></li>
                </ul>
            </nav>
        </div>
    );
}