import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePicker({ selectedDate, onChange }) {
  const [startDate, setStartDate] = useState(selectedDate);

  const handleChange = (date) => {
    setStartDate(date);
    onChange(date);
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={handleChange}
      dateFormat="yyyy-MM-dd"
    />
  );
}

export default DatePicker;

