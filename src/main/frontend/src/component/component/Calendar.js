import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/ko';

moment.locale('ko');

function Calendar({ clickedDate, setClickedDate, setClickedTime }) {
  const [selectedDate, setSelectedDate] = useState(moment());
 const handleDateClick = (clickedDate) => {
        setClickedDate(clickedDate);
        if (typeof setClickedTime === "function") {
            setClickedTime(null);
        }
        console.log(clickedDate.format('YYYY-MM-DD')); // 선택된 날짜 출력
    };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelectedDate((prevDate) => prevDate.clone().set(name, value));
  };

  const handlePrevMonth = () => {
    setSelectedDate((prevDate) => prevDate.clone().subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setSelectedDate((prevDate) => prevDate.clone().add(1, 'month'));
  };

  const months = moment.months();

  const firstDayOfMonth = moment(selectedDate).date(1);
  const firstDayOfWeek = firstDayOfMonth.day();
  const daysInMonth = selectedDate.daysInMonth();

  const calendarRows = [];
  let currentRow = [];

  for (let i = 0; i < firstDayOfWeek; i++) {
    currentRow.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const currentDate = firstDayOfMonth.clone().date(i);
    currentRow.push(currentDate);

    if (currentRow.length === 7) {
      calendarRows.push(currentRow);
      currentRow = [];
    }
  }

  if (currentRow.length > 0) {
    calendarRows.push(currentRow);
  }

  const weekdaysShort = moment.weekdaysShort();

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
                <th key={day}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {calendarRows.map((week, i) => (
              <tr key={i}>
                {week.map((day, index) => (
                  <td
                    key={day ? day.format('YYYY-MM-DD') : index}
                    className={
                      day && day.isSame(selectedDate, 'day')
                        ? day.isSame(clickedDate, 'day')
                          ? 'selected clicked'
                          : 'selected'
                        : day && day.isSame(clickedDate, 'day')
                        ? 'clicked'
                        : ''
                    }
                    onClick={() => day && handleDateClick(day)}
                  >
                    {day && day.format('D')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calendar;
