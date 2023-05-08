import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import './Calendar.css';
import TableComponent1 from './TableComponent1';

moment.locale('ko');

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(moment());
  const [isTableVisible, setIsTableVisible] = useState(false);

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

  const weekdaysShort = moment.weekdaysShort(true);
  const months = moment.months();

  const handleDateClick = (day) => {
    setSelectedDate(day);
    setIsTableVisible(true);
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
        {isTableVisible && (
          <div className="table-wrapper">
            <TableComponent1 selectedDate={selectedDate} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Calendar;