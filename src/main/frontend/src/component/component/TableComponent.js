import "./TableComponent.css";
import axios from "axios";
import {useEffect} from "react";

export default function TableComponent({doctor, startTime, endTime, clickedDate, setIsTableVisible, defaultCount}) {


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
    // console.log(timeSlots[0].time);

    const amSlots = timeSlots.filter(slot => {
        return slot.time.includes("오전");
    });
    const pmSlots = timeSlots.filter(slot => {
        return slot.time.includes("오후");
    });

    useEffect(()=>{
        for(let i=0; i<reservationCounts.length; i++){
            reservationCounts[i].count = defaultCount;
        }
    },[defaultCount])
    const handleChange = (time, e) => {
        const existingIndex = reservationCounts.findIndex(item => item.time === time);
        if (reservationCounts[existingIndex]) {
            reservationCounts[existingIndex].count = parseInt(e.target.value);
        }
    };


//    const handleClick = () => {
//        console.log("Reservation Counts:", reservationCounts);
//    };

    const handleClick = async () => {
        try {
            const combinedList = [{doctorId: doctor, date: clickedDate}, ...reservationCounts];
//  temp.doctorId =  doctor;
//  temp.date = clickedDate;
//  temp.push({ doctorId: doctor, date: clickedDate });
//  temp.push(reservationCounts);


            console.log(combinedList);
            const response = await axios.post('/api/createReservation', combinedList);

            console.log('Reservation data sent successfully.');
            alert('예약 설정이 저장되었습니다.');
            setIsTableVisible(false);
            // Handle successful response from the backend
        } catch (error) {
            console.log('Error sending reservation data:', error);
            // Handle error during the request or response
        }
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
                            defaultValue={defaultCount}
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
            <button className="save" style={{float: "left"}} onClick={() => {
                const confirmed = window.confirm("해당 날짜의 예약 설정을 정말 취소하시겠습니까?");
                if (confirmed) {
                    setIsTableVisible(false)
                }
                ;
            }}>
                취소
            </button>
            <button className="save" style={{display: "inline-block"}} onClick={handleClick}>
                저장
            </button>
        </div>
    );
}