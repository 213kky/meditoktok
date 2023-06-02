import './TableComponent.css';

export default function TableComponent({ reservationData, reservationList, handleTimeClick, handleTimeCount }) {
    console.log('reservationData : ', reservationData);
    console.log('reservationList1:', reservationList);
    // 오전 시간대 배열
    const morningTimes = [];
    // 오후 시간대 배열
    const afternoonTimes = [];

    // reservationData 배열을 timeId를 기준으로 정렬
    const sortedData = reservationData.sort((a, b) => {
        const timeA = a.timeId;
        const timeB = b.timeId;
        return timeA.localeCompare(timeB, 'en', { numeric: true });
    });

    // 정렬된 데이터를 오전과 오후로 나누기
    sortedData.forEach((item) => {
        const time = item.timeId;
        const count = item.max;

        const hour = parseInt(time.split(':')[0]);
        if (hour < 12) {
            // 오전
            morningTimes.push({ time, count });
        } else {
            // 오후
            afternoonTimes.push({ time, count });
        }
    });

    // 각 시간대에 해당하는 설정 인원 확인
    morningTimes.forEach((item) => {
        const time = item.time;
        const count = item.max;
        console.log(`오전 ${time}: 설정 인원 - ${count}`);
    });

    afternoonTimes.forEach((item) => {
        const time = item.time;
        const count = item.max;
        console.log(`오후 ${time}: 설정 인원 - ${count}`);
    });

    const handleClick = (time, count) => {
        handleTimeClick(time);
        handleTimeCount(count);
        console.log('count:', count);
    };

    const renderTimeSlots = (timeSlots) => {
        const rows = [];
        let currentRow = [];

        for (let i = 0; i < timeSlots.length; i++) {
            const time = timeSlots[i].time;
            const count = timeSlots[i].count;

            let reservationCount = 0;

            reservationList.forEach((item) => {
                const reservationTime = item.reservationDate.split(' ')[1];
                if (reservationTime === time) {
                    reservationCount++;
                }
            });

            currentRow.push(
                <td key={i} onClick={() => handleClick(time, count)}>
                    {time}
                    <br />
                    {reservationCount}/{count}
                </td>
            );

            if (currentRow.length === 4 || i === timeSlots.length - 1) {
                rows.push(<tr key={i}>{currentRow}</tr>);
                currentRow = [];
            }
        }

        return rows;
    };

    return (
        <div style={{height:"380px",overflowY:"scroll", overflowX:"hidden"}}>
            <table className="Ptime">
                <thead>
                <tr>
                    <th colSpan="4">오전</th>
                </tr>
                </thead>
                <tbody>{renderTimeSlots(morningTimes)}</tbody>
            </table>
            <table className="Ptime">
                <thead>
                <tr>
                    <th colSpan="4">오후</th>
                </tr>
                </thead>
                <tbody>{renderTimeSlots(afternoonTimes)}</tbody>
            </table>
        </div>
    );
}
