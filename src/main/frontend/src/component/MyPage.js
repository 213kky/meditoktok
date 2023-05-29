import NowTr from "./NowTr";
import HistoryTr from "./HistoryTr";
import {Link} from "react-router-dom";
import {useCookies} from "react-cookie";

export default function MyPage() {
    const [cookies] = useCookies(['memberInfo']);
    const cookieValue = cookies['memberInfo'];
    return (
        <section className="contents">
            <div className="userName">{cookieValue.name}님</div>
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

                <NowTr hosp="본병원" doc="김기수" date="2023년 06월 03일 14시 30분"/>
                <NowTr hosp="삼성서울병원" doc="이민준" date="2023년 06월 07일 12시 30분"/>
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
                    <HistoryTr hosp="강북연세병원" doc="최서준" date="2023년 04월 03일 10시 30분"/>
                    <HistoryTr hosp="방병원" doc="민도준" date="2023년 04월 30일 14시 30분"/>
                    <HistoryTr hosp="세힘병원" doc="김예준" date="2023년 05월 03일 17시 30분"/>
                    <HistoryTr hosp="본정형외과" doc="홍서예" date="2023년 05월 17일 18시 30분"/>
                    <HistoryTr hosp="강북삼성병원" doc="하지민" date="2023년 05월 21일 21시 00분"/>
                    <HistoryTr hosp="세란병원" doc="송지아" date="2023년 05월 29일 14시 30분"/>
                </table>
            </div>
        </section>


    );
}