import "./TableComponent.css";

export default function TableComponent({ startTime, endTime }) {
  const reservationCounts = [];


  const generateTimeSlots = () => {
    const start = new Date(`01/01/2000 ${startTime}`);
    const end = new Date(`01/01/2000 ${endTime}`);
    const timeSlots = [];

    while (start < end) {
      const time = start.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      });
      timeSlots.push({
        time,
        count: 0
      });

      start.setMinutes(start.getMinutes() + 30);
    }

    return timeSlots;
  };

  const handleChange = (index, e) => {
    if (reservationCounts[index]) {
      reservationCounts[index].count = e.target.value;
    }
  };

  const handleClick = () => {
    console.log("Reservation Counts:", reservationCounts);
  };

  const timeSlots = generateTimeSlots();
  const halfLength = Math.ceil(timeSlots.length / 2);
  const amSlots = timeSlots.slice(0, halfLength);
  const pmSlots = timeSlots.slice(halfLength);

  const renderTimeSlots = (slots, className) => {
    const rows = [];
    for (let i = 0; i < slots.length; i += 4) {
      const row = slots.slice(i, i + 4);
      rows.push(row);
    }
    return rows.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {row.map((slot, index) => (
          <td key={index}>
            <input
              type="number"
              min="0"
              max="5"
              onChange={(e) => handleChange(index + rowIndex * 4, e)}
            />
            <br />
            {slot.time}
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <div className="Save" style={{ width: "410px", height: "550px", overflow: "auto", overflowX: "hidden" }}>
      <div className="TT">
        <table className="time">
          <thead>
            <tr>
              <th colSpan="4">오전</th>
            </tr>
          </thead>
          <tbody>{renderTimeSlots(amSlots, "time")}</tbody>
        </table>

        <table className="time1">
          <thead>
            <tr>
              <th colSpan="4">오후</th>
            </tr>
          </thead>
          <tbody>{renderTimeSlots(pmSlots, "time1")}</tbody>
        </table>
      </div>

      <button className="save" onClick={handleClick}>
        저장
      </button>
    </div>
  );
}