import './TableComponent.css';


export default function TableComponent({reservationData, reservationList, handleTimeClick, handleTimeCount }) {
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
      const count = item.count;

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
      const count = item.count;
      console.log(`오전 ${time}: 설정 인원 - ${count}`);
    });

    afternoonTimes.forEach((item) => {
      const time = item.time;
      const count = item.count;
      console.log(`오후 ${time}: 설정 인원 - ${count}`);
    });

//const [count, setCount] = useState(0);

//const counting = reservationList.forEach((item, time) => {
//  const reservationTime = item.reservationDate.split(' ')[1]; // 시간 추출
//
//  if (reservationTime == time) {
//    setCount(count + 1);
//  }
//
//});
//const handleTimeClick = (time) => {
//  const filteredReservations = reservationList.filter((item) => {
//    const reservationTime = item.reservationDate.split(' ')[1];
//    return reservationTime === time;
//  });
//
//  // filteredReservations를 사용하여 원하는 작업을 수행
//
//  console.log('Filtered Reservations:', filteredReservations);
//  onFilter(filteredReservations);
//};


const handleClick = (time, cnt) => {
    // handleTimeClick 함수 호출하여 시간 전달
    handleTimeClick(time);
handleTimeCount(cnt);
//const count = time.count;
//    handleTimeCount(count);
    console.log('time.count', cnt);
  };




//    return (
//    <div>
//    <table class="Ptime">
//    <thead>
//      <tr><th colspan="4">오전</th></tr>
//    </thead>
//    <tbody>
//      <tr>
//        <td>1/3<br/>09:00</td>
//        <td>3/5<br/>10:00</td>
//        <td>0/0<br/>11:00</td>
//        <td>1/2<br/>12:00</td>
//      </tr>
//    </tbody>
//  </table>
//  <table class="Ptime">
//    <thead>
//      <tr><th colspan="4">오후</th></tr>
//    </thead>
//    <tbody>
//      <tr>
//        <td>1/1<br/>14:00</td>
//        <td>0/0<br/>15:00</td>
//        <td>1/2<br/>16:00</td>
//        <td>1/3<br/>17:00</td>
//      </tr>
//    </tbody>
//  </table>
//  </div>
//);


return (
    <div>
      <table className="Ptime">
        <thead>
          <tr>
            <th colSpan="4">오전</th>
          </tr>
        </thead>
        <tbody>
          <tr>
                      {morningTimes.map((time, index) => {
                        let count = 0;

                        reservationList.forEach((item) => {
                          const reservationTime = item.reservationDate.split(' ')[1];
                          if (reservationTime === time.time) {
                            count++;
                          }
                        });

                        return (
                          <td key={index} onClick={() => handleClick(time.time, time.count)}>
                            {time.time}<br />
                            {count}/{time.count}
                          </td>
                        );
                      })}
                    </tr>
        </tbody>
      </table>
      <table className="Ptime">
        <thead>
          <tr>
            <th colSpan="4">오후</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {afternoonTimes.map((time, index) => {
              let count = 0;

              reservationList.forEach((item) => {
                const reservationTime = item.reservationDate.split(' ')[1];
                if (reservationTime === time.time) {
                  count++;
                }
              });

              return (
                <td key={index} onClick={() => handleClick(time.time, time.count)}>
                  {time.time}<br />
                  {count}/{time.count}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );

}