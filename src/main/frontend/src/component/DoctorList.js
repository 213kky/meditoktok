import {Link} from "react-router-dom";
import Calendar from "./component/Calendar";
import {useEffect, useState} from "react";
import TimeTable from "./TimeTable";

export default function DoctorList({doctorId, doctorName, doctorDepartment}) {
    const [clickedDate, setClickedDate] = useState(null);
    const [isDateClick, setIsDateClick] = useState(false);
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
        if(clickedDate!==null){
            console.log("DoctorList Calendar : ", clickedDate.format("YYYY-MM-DD"));
            setIsDateClick(true);
        }
    }, [clickedDate])

    return (
        <li><span>
            <details>
                <summary>{doctorName} : {doctorDepartment}</summary>
                {/*<Link id="show" onClick={toggleDoctor}>▼</Link>*/}
                {/*<Link id="show">▼</Link>*/}
                <div id="hide" class="bookBox">
                <div class="bookSchedule">
                    <div class="calendarU"><Calendar clickedDate={clickedDate} setClickedDate={setClickedDate}/></div>
                    <div class="selectTime">
                            {isDateClick ? <TimeTable doctorId={doctorId} clickDate={clickedDate.format("YYYY-MM-DD")}/> : <></>}
                    </div>
                    <div class="commentBox">특이사항
                        <textarea name="" id="" cols="30" rows="4" class="comment"
                                  placeholder="앓고 있는 질병 이름이나 증상을 입력해주세요."></textarea>
                    </div>
                    </div>
                    <button class="button">예약하기</button>
                </div>
            </details>
        </span></li>
    );
}