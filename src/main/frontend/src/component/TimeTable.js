import {useEffect, useState} from "react";
import axios from "axios";

export default function TimeTable({doctorId, clickDate, setClickedTime}) {
    const [timeData, setTimeData] = useState([]);
    const [selectedTd, setSelectedTd] = useState(null);
    const [loading, setLoading] = useState(false);
    const [notReservation, setNotReservation] = useState(false);
    const [count, setCount] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (clickDate !== null) {
                try {
                    const response = await axios.get('/timeTable', {
                        params: {
                            doctorId: doctorId,
                            reservationDate: clickDate,
                        },
                    });
                    setLoading(false);

                    setTimeData(response.data);
                    setNotReservation(false);
                    console.log(response);
                } catch (error) {
                    setNotReservation(true);
                    console.error('Error', error);
                }
            }
        };

        fetchData();
    }, [clickDate]);

    useEffect(() => {
        const fetchData = async () => {
            if (timeData.length > 0) {
                try {
                    const promises = timeData.map(async (item) => {
                        const response = await axios.post('/api/count', {
                                doctorId: doctorId,
                                reservationDate: `${clickDate} ${item.timeId}`,
                        });
                        return { time: item.timeId, count: response.data };
                    });

                    const countData = await Promise.all(promises);
                    setLoading(true);
                    setCount(countData);
                } catch (error) {
                    console.error('Error', error);
                }
            }
        };

        fetchData();
    }, [timeData]);

    const handleTdClick = (index) => {
        setSelectedTd(index);
    };
    function separateTime(data, countData) {
        if (timeData.length > 0 && countData.length > 0 && loading) {
            const amTable = [];
            const pmTable = [];

            data.forEach(item => {
                const countItem = countData.find(count => count.time === item.timeId);
                if (item.timeId < '12:00' && countItem) {
                    amTable.push({ ...item, count: countItem.count });
                } else {
                    pmTable.push({ ...item, count: countItem.count });
                }
            });

            return { amTable, pmTable };
        }

        return { amTable: [], pmTable: [] };
    }

    const { amTable, pmTable } = separateTime(timeData, count);

    function renderTable(data) {
        const rows = [];
        let currentRow = [];

        for (let i = 0; i < data.length; i++) {
            const tdStyle = selectedTd === data[i].timeId ? { backgroundColor: 'yellow', cursor: 'pointer' } : data[i].count === data[i].max
                ? { backgroundColor: 'gray', cursor: 'default' } : { cursor: 'pointer' };



            const canClick = data[i].count !== data[i].max;
            currentRow.push(
                <td key={data[i].timeId} style={tdStyle} onClick={() => {
                    if (canClick) {
                        setClickedTime(`${clickDate} ${data[i].timeId}`);
                        handleTdClick(data[i].timeId);
                    }
                }} >
                    <div>{data[i].timeId}</div>
                    <div>{data[i].count}/{data[i].max}</div>
                </td>
            );

            if (currentRow.length === 4 || i === data.length - 1) {
                rows.push(<tr key={i}>{currentRow}</tr>);
                currentRow = [];
            }
        }

        return rows;
    }
    return (
        <table border="1" className="timeTable">
            {notReservation ? <div>{clickDate} <br/>예약 일정이 설정되지 않았습니다.</div>: <><th style={{height: "50px"}} colSpan="4">오전</th>
                {loading&&renderTable(amTable)}
                <th style={{height: "50px"}} colSpan="4">오후</th>
                {loading&&renderTable(pmTable)}</>}

        </table>
    );
}