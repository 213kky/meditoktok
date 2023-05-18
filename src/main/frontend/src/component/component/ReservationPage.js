import React, { useState } from 'react';
import Calendar from './Calendar';
import "./Create.css";

function ReservationPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    if (name === 'startTime') {
      setStartTime(value);
    } else if (name === 'endTime') {
      setEndTime(value);
    }
  };

  return (
    <div className='R'>
    <div className="Create">
      <div className="CD"></div>
      <Calendar onSelect={handleDateSelect} />
      </div>
    <div className='SE'>
      <div className='start'>
        <div className='S'>시작</div>
        <br/>
        <input className="startT" type="text" name="startTime" value={startTime} onChange={handleTimeChange} />
      </div>

      <div className='end'>
      <div className='E'>끝</div>
      <br/>
        <input className="endT" type="text" name="endTime" value={endTime} onChange={handleTimeChange} />
      </div>

      {/* 확인 버튼 */}
      <button className="made1" onClick={() => console.log(selectedDate, startTime, endTime)}>
        확인
      </button>
    </div>

      {/* 타임테이블 표시 */}
      {/* ... */}
      </div>
  );
}

export default ReservationPage;
