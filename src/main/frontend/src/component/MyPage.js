import NowTr from "./NowTr";
import HistoryTr from "./HistoryTr";
import {Link} from "react-router-dom";
import {useCookies} from "react-cookie";
import axios from "axios";
import { useState, useEffect } from "react";


export default function MyPage() {
    const [cookies] = useCookies(['memberInfo']);
    const cookieValue = cookies['memberInfo'];
   console.log('cookieValue', cookieValue);
const [reservations, setReservations] = useState([]);
  const [futureReservations, setFutureReservations] = useState([]);
  const [pastReservations, setPastReservations] = useState([]);

   const fetchData = async () => {
       const formData = {
         id: cookieValue.id,
       };

       try {
         const response = await axios.get('/test/res/1', { params: formData });
         console.log("formData: ", formData);
         console.log('response.data',response.data);
         setReservations(response.data)
       } catch (error) {
         console.error('Error:', error);
       }
     };

     useEffect(() => {
       fetchData();
     }, []);


useEffect(() => {
    const today = new Date();
    const futureReservations = reservations.filter(reservation => new Date(reservation.reservationDate) > today);
    const pastReservations = reservations.filter(reservation => new Date(reservation.reservationDate) <= today);
    setFutureReservations(futureReservations);
    setPastReservations(pastReservations);
  }, [reservations]);


//const handleCancelReservation = async (reservationId) => {
//    try {
//      await axios.get(`/test/res/3/${reservationId}`);
//      // 예약 취소 후에 예약 정보 다시 가져오기
//      fetchData();
//    } catch (error) {
//      console.error('Error:', error);
//    }
//  };


const handleCancelReservation = async (reservationId) => {
    const data = async () => {
      const formData = {
        id: cookieValue.id,
      };
      try {
        await axios.get(`/test/res/3?id=${reservationId}`);
        fetchData(); // 예약 취소 후에 예약 정보 다시 가져오기
      } catch (error) {
        console.error('Error:', error);
      }
    };

    data(); // data 함수 호출
  };

    return (
        <section className="contents">
            <div className="userName">{cookieValue.name}님</div>
            <div className="userInfoModify">
                <Link to="/my_page/change" >회원정보수정</Link>
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
{futureReservations.map((reservation) => (
          <NowTr onCancel={() => handleCancelReservation(reservation.id)}
            key={reservation.id}
            hosp={reservation.hospiName}
            doc={reservation.medicalStaffName}
            date={reservation.reservationDate}
          />
        ))}
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
                    {pastReservations.map((reservation) => (
                                <HistoryTr
                                  key={reservation.id}
                                  hosp={reservation.hospiName}
                                  doc={reservation.medicalStaffName}
                                  date={reservation.reservationDate}
                                />
                              ))}
                </table>
            </div>
        </section>


    );
}