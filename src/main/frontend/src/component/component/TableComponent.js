import "./TableComponent.css";

export default function TableComponent({startTime, endTime, clickedDate}) {


    const generateTimeSlots = () => {
        const start = new Date(`${clickedDate} ${startTime}`);
        console.log("start : ", start);
        const end = new Date(`${clickedDate} ${endTime}`);
        console.log("end : ", end);
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


    const timeSlots = generateTimeSlots();
    const reservationCounts = generateTimeSlots();
    console.log(timeSlots[0].time);

    const amSlots = timeSlots.filter(slot => {
        return slot.time.includes("오전");
    });
    const pmSlots = timeSlots.filter(slot => {
        return slot.time.includes("오후");
    });


    const handleChange = (time, e) => {
        const existingIndex = reservationCounts.findIndex(item => item.time === time);
        if (reservationCounts[existingIndex]) {
            reservationCounts[existingIndex].count = parseInt(e.target.value);
        }
    };


    const handleClick = () => {
        console.log("Reservation Counts:", reservationCounts);
    };

    const renderTimeSlots = (slots) => {
        const rows = [];
        for (let i = 0; i < slots.length; i += 4) {
            const row = slots.slice(i, i + 4);
            rows.push(row);
        }
        console.log("rows: ", rows);
        return rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
                {row.map((slot, index) => (
                    <td key={index}>
                        <input
                            type="number"
                            min="0"
                            max="5"
                            onChange={(e) => handleChange(slot.time, e)}
                        />
                        <br/>
                        {slot.time}
                    </td>
                ))}
            </tr>
        ));
    };

    return (
        <div className="Save" style={{width: "410px", height: "550px", overflow: "auto", overflowX: "hidden"}}>
            <div className="TT">
                <table className="time">
                    <thead>
                    <tr>
                        <th colSpan="4">오전</th>
                    </tr>
                    </thead>
                    <tbody>{renderTimeSlots(amSlots)}</tbody>
                </table>

                <table className="time">
                    <thead>
                    <tr>
                        <th colSpan="4">오후</th>
                    </tr>
                    </thead>
                    <tbody>{renderTimeSlots(pmSlots)}</tbody>
                </table>
            </div>

            <button className="save" onClick={handleClick}>
                저장
            </button>
        </div>
    );
}

