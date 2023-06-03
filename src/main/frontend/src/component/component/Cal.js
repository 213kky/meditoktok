import React, { useState } from 'react';
import DatePicker from './DatePicker';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // 선택된 날짜 처리 로직 작성
  };

  return (
    <div>
      <h1>Select Date</h1>
      <DatePicker selectedDate={selectedDate} onChange={handleDateChange} />
      {/* 다른 컴포넌트들 */}
    </div>
  );
}

export default App;
