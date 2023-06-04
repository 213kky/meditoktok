import {useState, useEffect} from "react";
import "./Create.css";
import Calendar from "../component/Calendar";
import TableComponent from "../component/TableComponent";
import Dropdown from "../component/Dropdown";

export default function Create({originData}) {
    const [selectedDoctor, setSelectedDoctor] = useState("");
    const [startPeriod, setStartPeriod] = useState("AM");
    const [startHour, setStartHour] = useState("");
    const [startMinute, setStartMinute] = useState("00");
    const [endPeriod, setEndPeriod] = useState("AM");
    const [endHour, setEndHour] = useState("");
    const [endMinute, setEndMinute] = useState("00");
    const [isTableVisible, setIsTableVisible] = useState(false);
    const [clickedDate, setClickedDate] = useState(null);
    const [defaultCount, setDefaultCount] = useState(0);
    const minValue = 0;
    const maxValue = 5;

    const handleIncrement = () => {
        if (defaultCount < maxValue) {
            setDefaultCount(defaultCount + 1);
        }
    };

    const handleDecrement = () => {
        if (defaultCount > minValue) {
            setDefaultCount(defaultCount - 1);
        }
    };
    const handleDoctorSelect = (doctorName) => {
        setSelectedDoctor(doctorName);
    };

    const handleStartPeriodChange = (e) => {
        setStartPeriod(e.target.value);
    };

    const handleStartHourChange = (e) => {
        setStartHour(e.target.value);
    };

    const handleStartMinuteChange = (e) => {
        setStartMinute(e.target.value);
    };

    const handleEndPeriodChange = (e) => {
        setEndPeriod(e.target.value);
    };

    const handleEndHourChange = (e) => {
        setEndHour(e.target.value);
    };

    const handleEndMinuteChange = (e) => {
        setEndMinute(e.target.value);
    };

    const handleCreateClick = () => {
        const formattedStartTime = formatTime(startPeriod, startHour, startMinute);
        const formattedEndTime = formatTime(endPeriod, endHour, endMinute);
        console.log("Test : ", endPeriod, endHour, endMinute);
        if(!selectedDoctor){
            alert("의사를 선택해주세요.");
            return;
        }
        if(!clickedDate){
            alert("예약 설정을 하시려는 날짜를 선택해주세요.");
            return;
        }
        if(formattedStartTime=='00:00' ||formattedEndTime=='00:00' || isNaN(parseInt(endHour))){
            alert("예약 설정을 하시려는 시간 범위를 선택해주세요.");
            return;
        }
        if(formattedStartTime > formattedEndTime){
            alert("시간 범위를 올바르게 선택해주세요.");
            return;
        }

        console.log("Start Time:", formattedStartTime);
        console.log("End Time:", formattedEndTime);
        setIsTableVisible(true);

    };

    const formatTime = (period, hour, minute) => {
        let formattedHour = hour;
        if (period === "PM") {
            formattedHour = (parseInt(hour, 10) + 12).toString();
        }
        formattedHour = formattedHour.toString().padStart(2, "0");
        return `${formattedHour}:${minute}`;
    };

    useEffect(() => {
        console.log(selectedDoctor);
    }, [selectedDoctor]);

    return (
        <div>
            <Dropdown onSelect={handleDoctorSelect} originData={originData}/>
            <div className="R">
                <div className="Create">
                    <div className="CD">
                        <Calendar clickedDate={clickedDate} setClickedDate={setClickedDate}/>
                    </div>
                    <div className="SE">
                        <div className="start">
                            <div className="S">시작</div>
                            <br/>
                            <select
                                value={startPeriod}
                                onChange={handleStartPeriodChange}
                                className="period"
                            >
                                <option value="AM">오전</option>
                                <option value="PM">오후</option>
                            </select>
                            <select
                                value={startHour}
                                onChange={handleStartHourChange}
                                className="hour"
                            >
                                <option value="">시간</option>
                                <option value="01">1</option>
                                <option value="02">2</option>
                                <option value="03">3</option>
                                <option value="04">4</option>
                                <option value="05">5</option>
                                <option value="06">6</option>
                                <option value="07">7</option>
                                <option value="08">8</option>
                                <option value="09">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            :
                            <select
                                value={startMinute}
                                onChange={handleStartMinuteChange}
                                className="minute"
                            >
                                <option value="00">00</option>
                                <option value="30">30</option>
                            </select>
                        </div>
                        <div className="end">
                            <div className="E">끝</div>
                            <br/>
                            <select
                                value={endPeriod}
                                onChange={handleEndPeriodChange}
                                className="period"
                            >
                                <option value="AM">오전</option>
                                <option value="PM">오후</option>
                            </select>
                            <select
                                value={endHour}
                                onChange={handleEndHourChange}
                                className="hour"
                            >
                                <option value="">시간</option>
                                <option value="01">1</option>
                                <option value="02">2</option>
                                <option value="03">3</option>
                                <option value="04">4</option>
                                <option value="05">5</option>
                                <option value="06">6</option>
                                <option value="07">7</option>
                                <option value="08">8</option>
                                <option value="09">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            :
                            <select
                                value={endMinute}
                                onChange={handleEndMinuteChange}
                                className="minute"
                            >
                                <option value="00">00</option>
                                <option value="30">30</option>
                            </select>
                        </div>
                        <div style={{float:"left", marginTop:"30px", marginLeft:"35px", textAlign:"center"}}>
                            기본 인원 수 설정 <br/>
                            <button onClick={handleDecrement} style={{cursor:"pointer"}} disabled={defaultCount === minValue}>
                                -
                            </button>
                            <span>{defaultCount}</span>
                            <button onClick={handleIncrement} style={{cursor:"pointer"}} disabled={defaultCount === maxValue}>
                                +
                            </button>
                        </div>
                        <button className="made" onClick={handleCreateClick}>
                            만들기
                        </button>
                    </div>
                </div>
                <div className="TC">
                    {isTableVisible && (
                        <TableComponent
                            doctor={selectedDoctor}
                            startTime={formatTime(startPeriod, startHour, startMinute)}
                            endTime={formatTime(endPeriod, endHour, endMinute)}
                            clickedDate={clickedDate.format("YYYY-MM-DD")}
                            setIsTableVisible={setIsTableVisible}
                            defaultCount={defaultCount}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}