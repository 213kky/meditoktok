    import './Patient.css'
    import List from './List.js'
    import Calendar1 from "../component/Calendar1";
    import { useState } from "react";
    export default function Patient({selectedDoctor}) {
    const [reservationList, setReservationList] = useState([]);
    const [reservationData, setReservationData] = useState([]);

    //const handleData = (data) => {
    //    // 상위 컴포넌트에서 데이터를 처리하는 로직을 작성
    //    console.log('Received data:', data);
    //  };

    const [count, setCount] = useState(0);

      const handleTimeCount = (count) => {
          // count 값을 이용한 원하는 작업을 수행합니다
          setCount(count);
          console.log('받은 count:', count);
          // ...
        };


    const [filteredReservations, setFilteredReservations] = useState([]);

      const handleFilteredReservations = (filteredData) => {
        setFilteredReservations(filteredData);
      };



    console.log('filteredReservations', filteredReservations);
    console.log('handleCountReservation', filteredReservations.length)

      return (
        <div>
        <div className="Cal">
          <div className='Cd'><Calendar1 selectedDoctor={selectedDoctor}  onFilter={handleFilteredReservations} handleTimeCount={handleTimeCount}/></div>
        </div>

        <div className='List'>
        <caption className='number'>{filteredReservations.length}/{count}</caption>
        <table className='list'>
          {filteredReservations.map((reservation, index) => (
                  <List
                    key={index}
                    name={reservation.patientName}
                    tel={reservation.phoneNumber}
                    txt={reservation.notes}
                  />
                ))}
        </table>

        </div>
        </div>
      )
    }