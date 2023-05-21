import NowTr from "./NowTr";
import HistoryTr from "./HistoryTr";
import {Link} from "react-router-dom";
import {useCookies} from "react-cookie";

export default function MyPage() {
    const [cookies] = useCookies(['memberInfo']);
    const cookieValue = cookies['memberInfo'];
    return (
        <section className="contents">
            <div className="userName">{cookieValue}님</div>
            <div className="userInfoModify">
                <Link to="/my_page/change">회원정보수정</Link>
            </div>
            <div className="tableSubject">현재 예약된 병원</div>
            <nav className="nowNav">
                <ul>
                    <li>병원 이름</li>
                    <li>의사 이름</li>
                    <li>예약 시간</li>
                </ul>
            </nav>
            <table className="nowTable">
                <NowTr/>
                <NowTr/>
            </table>
            <div className="tableSubject">예약 내역</div>
            <nav className="historyNav">
                <ul>
                    <li>병원 이름</li>
                    <li>의사 이름</li>
                    <li>예약 시간</li>
                </ul>
            </nav>
            <div className="tableScroll">
                <table className="historyTable">
                    <HistoryTr/>
                    <HistoryTr/>
                    <HistoryTr/>
                    <HistoryTr/>
                    <HistoryTr/>
                    <HistoryTr/>
                </table>
            </div>
        </section>


    );
}