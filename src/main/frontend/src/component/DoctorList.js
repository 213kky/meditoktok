import {Link} from "react-router-dom";

export default function DoctorList({doctorName}) {
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

    return (
        <li><span>
            <details>
                <summary>{doctorName}</summary>
                {/*<Link id="show" onClick={toggleDoctor}>▼</Link>*/}
                {/*<Link id="show">▼</Link>*/}
            <div id="hide" class="bookBox">
                <div class="bookSchedule">
                    <div class="calendar">달력</div>
                    <div class="selectTime">
                        <table border="1" class="timeTable">
                            <th style={{height: "50px"}} colspan="4">오전</th>
                            <tr>
                                <td><div>9 : 00</div><div>2/7</div></td>
                                <td><div>9 : 30</div><div>2/7</div></td>
                                <td><div>10 : 00</div><div>2/7</div></td>
                                <td><div>10 : 30</div><div>2/7</div></td>
                            </tr>
                            <tr>
                                <td><div>11 : 00</div><div>2/7</div></td>
                                <td><div>11 : 30</div><div>2/7</div></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <th style={{height: "50px"}} colspan="4">오후</th>
                            <tr>
                                <td><div>14 : 00</div><div>2/7</div></td>
                                <td><div>14 : 30</div><div>2/7</div></td>
                                <td><div>15 : 00</div><div>2/7</div></td>
                                <td><div>15 : 30</div><div>2/7</div></td>
                            </tr>
                            <tr>
                                <td><div>16 : 00</div><div>1/7</div></td>
                                <td><div>16 : 30</div><div>2/7</div></td>
                                <td><div>17 : 00</div><div>1/7</div></td>
                                <td><div>17 : 30</div><div>2/7</div></td>
                            </tr>
                            <tr>
                                <td><div>18 : 00</div><div>0/7</div></td>
                                <td><div>18 : 30</div><div>0/7</div></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
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