import {Link, useNavigate} from "react-router-dom";
import Calendar from "./component/Calendar";
import {useEffect, useState} from "react";
import TimeTable from "./TimeTable";
import axios from "axios";
import {useCookies} from "react-cookie";

export default function DoctorList({yadmNm, doctorId, doctorName, doctorDepartment}) {
    const [clickedDate, setClickedDate] = useState(null);
    const [clickedTime, setClickedTime] = useState(null);
    const [isDateClick, setIsDateClick] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [cookies] = useCookies(['memberInfo']);
    const cookieValue = cookies['memberInfo'];
    const navigate = useNavigate();
    // console.log("cookie: ",cookieValue);
    /*
        function toggleDoctor() {
            if ($(hide).style.display === "none") {
                hide.style.display = '';
                show.innerText = '▲'
            } else {
                hide.style.display = 'none';
                show.innerText = '▼'
            }
        }
    */
    useEffect(() => {
        if (clickedDate !== null) {
            console.log("DoctorList Calendar : ", clickedDate.format("YYYY-MM-DD"));
            setIsDateClick(true);
        }
    }, [clickedDate])

    useEffect(() => {
        console.log(clickedTime);
    }, [clickedTime])

    async function onReservation() {
        if(cookieValue!==undefined){
            if (clickedTime !== null) {
                const confirmed = window.confirm(
                    `병원 : ${yadmNm}\n진료 과목 : ${doctorDepartment}\n의사 이름 : ${doctorName}\n예약 일시 : ${clickedTime}\n특이사항 : ${inputValue}\n\n예약을 하시겠습니까?`);
                if (confirmed) {
                    try {
                        const response = await axios.post('/test/res', {
                            doctorId: doctorId,
                            reservationDate: clickedTime,
                            department: doctorDepartment,
                            medicalStaffName: doctorName,
                            notes: inputValue,
                            hospName: yadmNm,
                            userId: cookieValue.id,
                        });
                        alert(response.data);
                        console.log(response);
                        navigate("/my_page");
                    } catch (error) {
                        console.error('Error', error);
                    }
                } else {
                    alert('예약이 취소되었습니다.');
                }
            } else {
                alert("예약 시간을 선택해주세요");
            }
        }else{
            alert("로그인 후에 이용 가능합니다.");
            navigate("/login");
        }



    }

    return (
        <li><span>
            <details>
                <summary>{doctorName} : {doctorDepartment}</summary>
                {/*<Link id="show" onClick={toggleDoctor}>▼</Link>*/}
                {/*<Link id="show">▼</Link>*/}
                <div id="hide" class="bookBox">
                <div class="bookSchedule">
                    <div class="calendarU"><Calendar clickedDate={clickedDate} setClickedDate={setClickedDate}
                                                     setClickedTime={setClickedTime}/></div>
                    <div class="selectTime">
                            {isDateClick ? <TimeTable doctorId={doctorId} clickDate={clickedDate.format("YYYY-MM-DD")}
                                                      setClickedTime={setClickedTime}/> : <></>}
                    </div>
                    <div class="commentBox">특이사항
                        <textarea name="" id="" cols="30" rows="4" class="comment" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                                  placeholder="앓고 있는 질병 이름이나 증상을 입력해주세요."></textarea>
                    </div>
                    </div>
                    <button class="button" onClick={onReservation}>예약하기</button>
                </div>
            </details>
        </span></li>
    );
}