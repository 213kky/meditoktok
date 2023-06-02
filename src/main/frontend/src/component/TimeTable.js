import {useEffect, useState} from "react";
import axios from "axios";

export default function TimeTable({doctorId, clickDate}) {
    const [timeData, setTimeData] = useState([]);
    const dummy = [
        { time: '09:00', max: '2/7' },
        { time: '09:30', max: '2/7' },
        { time: '10:00', max: '2/7' },
        { time: '10:30', max: '2/7' },
        { time: '11:00', max: '2/7' },
        { time: '11:30', max: '2/7' },
        { time: '12:00', max: '2/7' },
        { time: '12:30', max: '2/7' },
        { time: '13:00', max: '2/7' },
        { time: '13:30', max: '2/7' },
        { time: '14:00', max: '2/7' },
        { time: '14:30', max: '2/7' },
        { time: '15:00', max: '2/7' },
        { time: '15:30', max: '2/7' },
        { time: '16:00', max: '2/7' },
        { time: '16:30', max: '2/7' },
    ];

    useEffect(() => {
        const fetchData = async () => {
            if (clickDate !== null) {
                try {
                    const response = await axios.post('/timeTable', {
                        params: {
                            doctorId: doctorId,
                            reservationDate: clickDate,
                        },
                    });
                    setTimeData(response.data);
                    console.log(response);
                } catch (error) {
                    console.error('Error', error);
                }
            }
        };

        fetchData();
    }, [clickDate]);

    // if (timeData !== []) {
    //
    //     setAmTable(timeData.map((item, index) => {
    //             if(item.timeId < "12:00"){
    //                 return item;
    //             }
    //         })
    //     )
    //     setPmTable(timeData.map((item, index)=>{
    //         if(item.timeId >= "12:00"){
    //             return item;
    //         }
    //     }))
    // }
    function separateTime(data) {
        const amTable = [];
        const pmTable = [];

        data.forEach(item => {
            if (item.time < '12:00') {
                amTable.push(item);
            } else {
                pmTable.push(item);
            }
        });

        return { amTable, pmTable };
    }
    const { amTable, pmTable } = separateTime(dummy);
    function generateCode(data) {
        const rows = [];
        let currentRow = [];

        for (let i = 0; i < data.length; i++) {
            currentRow.push(
                <td key={i}>
                    <div>{data[i].time}</div>
                    <div>{data[i].max}</div>
                </td>
            );

            if (currentRow.length === 4 || i === data.length - 1) {
                rows.push(<tr key={i}>{currentRow}</tr>);
                currentRow = [];
            }
        }

        return rows;
    }
    //현재 예약된 인원을 알아야 함.
    return (
        <table border="1" className="timeTable">
            <th style={{height: "50px"}} colSpan="4">오전</th>
            {generateCode(amTable)}
            <th style={{height: "50px"}} colSpan="4">오후</th>
            {generateCode(pmTable)}
        </table>
    );
}