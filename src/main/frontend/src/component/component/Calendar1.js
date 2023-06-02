//import React, { useState } from 'react';
//import moment from 'moment';
//import 'moment/locale/ko';
//import './Calendar.css';
//import TableComponent1 from './TableComponent1';
//
//moment.locale('ko');
//
//function Calendar() {
//  const [selectedDate, setSelectedDate] = useState(moment());
//  const [isTableVisible, setIsTableVisible] = useState(false);
//
//  const handleChange = (event) => {
//    const { name, value } = event.target;
//    setSelectedDate((prevDate) => prevDate.clone().set(name, value).startOf('month'));
//  };
//
//  const handlePrevMonth = () => {
//    setSelectedDate((prevDate) => prevDate.clone().subtract(1, 'month').startOf('month'));
//  };
//
//  const handleNextMonth = () => {
//    setSelectedDate((prevDate) => prevDate.clone().add(1, 'month').startOf('month'));
//  };
//
//  const weekdaysShort = moment.weekdaysShort(true);
//  const months = moment.months();
//
//  const handleDateClick = (day) => {
//    setSelectedDate(day);
//    setIsTableVisible(true);
//  };
//
//  return (
//    <div className="calendar">
//      <div className="dropdowns">
//        <select name="year" value={selectedDate.format('YYYY')} onChange={handleChange}>
//          {Array.from({ length: 100 }, (_, i) => moment().year() - i).map((year) => (
//            <option key={year} value={year}>
//              {year}
//            </option>
//          ))}
//        </select>
//        <select name="month" value={selectedDate.format('MM')} onChange={handleChange}>
//          {months.map((month, i) => (
//            <option key={month} value={i + 1}>
//              {month}
//            </option>
//          ))}
//        </select>
//      </div>
//      <div className="calendar-body">
//        <div className="calendar-header">
//          <button onClick={handlePrevMonth}>{'<'}</button>
//          <h2>{selectedDate.format('MMMM YYYY')}</h2>
//          <button onClick={handleNextMonth}>{'>'}</button>
//        </div>
//        <table>
//          <thead>
//            <tr>
//              {weekdaysShort.map((day) => (
//                <th key={day}>{day}</th>
//              ))}
//            </tr>
//          </thead>
//          <tbody>
//            {Array.from({ length: selectedDate.daysInMonth() }, (_, i) =>
//              selectedDate.clone().date(i + 1)
//            ).reduce(
//              (rows, currentDate) => {
//                if (rows[rows.length - 1].length === 7) {
//                  rows.push([currentDate]);
//                } else {
//                  rows[rows.length - 1].push(currentDate);
//                }
//                return rows;
//              },
//              [[]]
//            ).map((week, i) => (
//              <tr key={i}>
//                {week.map((day) => (
//                  <td
//                    key={day.format('YYYY-MM-DD')}
//                    onClick={() => handleDateClick(day)}
//                  >
//                    {day.format('D')}
//                  </td>
//                ))}
//              </tr>
//            ))}
//          </tbody>
//        </table>
//      </div>
//
//
//      <div className='tableC'>
//        {isTableVisible && (
//          <div className="table-wrapper">
//            <TableComponent1 selectedDate={selectedDate} />
//          </div>
//        )}
//      </div>
//    </div>
//  );
//}
//
//export default Calendar;


import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import './Calendar.css';
import TableComponent1 from './TableComponent1';
import axios from "axios";
import {useCookies} from "react-cookie";
import { useNavigate } from 'react-router-dom';

moment.locale('ko');

function Calendar1({selectedDoctor, onTimeClick , onFilter, handleTimeCount}) {
  const [selectedDate, setSelectedDate] = useState(moment());
  const [isTableVisible, setIsTableVisible] = useState(false);
  const [clickedDate, setClickedDate] = useState(null);
  const [reservationData, setReservationData] = useState([]);
  const [hospitalId, setHospitalId] = useState('');
  const [reservationList, setReservationList] = useState([]);

  const [cookies, setCookie] = useCookies(['memberInfo']);
    const cookieValue = cookies['memberInfo'];
//    const doctorId = cookieValue.doctorId;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelectedDate((prevDate) => prevDate.clone().set(name, value).startOf('month'));
  };
  
  const handlePrevMonth = () => {
    setSelectedDate((prevDate) => prevDate.clone().subtract(1, 'month').startOf('month'));
  };
  
  const handleNextMonth = () => {
    setSelectedDate((prevDate) => prevDate.clone().add(1, 'month').startOf('month'));
  };





const handleTimeClick = (time) => {
    const filteredReservations = reservationList.filter((item) => {
      const reservationTime = item.reservationDate.split(' ')[1];
      return reservationTime === time;
    });

    // filteredReservations를 사용하여 원하는 작업을 수행

    console.log('Filtered Reservations:', filteredReservations);

    // 상위 컴포넌트로 filteredReservations 전달
    onFilter(filteredReservations);
  };

  const handleDateClick = async (day) => {
    setSelectedDate(day);
    setIsTableVisible(true);
    setClickedDate(day);
    console.log("handleDateClick",day.format('YYYY-MM-DD'));

const formData = {
      doctorId: selectedDoctor,
      reservationDate: day.format('YYYY-MM-DD'),
    };

    try {
      console.log("cl",selectedDoctor)
      const response = await axios.post('/send/date', formData);
      console.log("formData: ",formData);
      console.log(response.data);
      setReservationData(response.data);

      const reservationList = await axios.get('/test/test', {
                          params: {
                              reservationDate: day.format('YYYY-MM-DD'),
                          },
                      });
                      setReservationList(reservationList.data);
console.log('reservationList', reservationList.data);

    } catch (error) {
      console.error('Error:', error);
    }
  };











  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      hospitalId: hospitalId,
      selectedDate: selectedDate.format('YYYY-MM-DD'),
    };
    const isFormValid = hospitalId && selectedDate;
    if(isFormValid) {
    console.log(formData);
    axios
        .post('/reservation', formData)
        .then((response) => {
          console.log(response.data);
          if (response.data !== 'reservation') {
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }else { }

  };

  const weekdaysShort = moment.weekdaysShort(true);
  const months = moment.months();
const handleClick = (count) => {
    // 클릭한 {time.count} 값을 처리하는 로직을 작성합니다.
    console.log('Clicked count:', count);
  };
  return (
    <div className="calendar">
      <div className="dropdowns">
        <select name="year" value={selectedDate.format('YYYY')} onChange={handleChange}>
          {Array.from({ length: 100 }, (_, i) => moment().year() - i).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <select name="month" value={selectedDate.format('MM')} onChange={handleChange}>
          {months.map((month, i) => (
            <option key={month} value={i + 1}>
              {month}
            </option>
          ))}
        </select>
      </div>
      <div className="calendar-body">
        <div className="calendar-header">
          <button onClick={handlePrevMonth}>{'<'}</button>
          <h2>{selectedDate.format('MMMM YYYY')}</h2>
          <button onClick={handleNextMonth}>{'>'}</button>
        </div>
        <table>
          <thead>
            <tr>
              {weekdaysShort.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: selectedDate.daysInMonth() }, (_, i) =>
              selectedDate.clone().date(i + 1)
            ).reduce(
              (rows, currentDate) => {
                if (rows[rows.length - 1].length === 7) {
                  rows.push([currentDate]);
                } else {
                  rows[rows.length - 1].push(currentDate);
                }
                return rows;
              },
              [[]]
            ).map((week, i) => (
              <tr key={i}>
                {week.map((day) => (
                <td
                key={day.format('YYYY-MM-DD')}
                className={day.isSame(clickedDate, 'day') ? 'clicked' : ''}
                onClick={() => handleDateClick(day)}
      >
                    {day.format('D')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='tableC'>
        {isTableVisible && clickedDate && (
          <div className="table-wrapper">
            <TableComponent1 selectedDate={clickedDate} reservationData = {reservationData} reservationList={reservationList} handleTimeClick={handleTimeClick} handleTimeCount={handleTimeCount} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Calendar1;