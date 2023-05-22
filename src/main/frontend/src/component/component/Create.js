import { useState } from "react";
import "./Create.css";
import Calendar from "../component/Calendar";
import TableComponent from "../component/TableComponent";

export default function Create() {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [isTableVisible, setIsTableVisible] = useState(false);

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const handleCreateClick = () => {
    setIsTableVisible(true);
  };

  return (
    <div className="R">
      <div className="Create">
        <div className="CD">
          <Calendar handleDateSelect={handleCreateClick} />
        </div>
        <div className="SE">
          <div className="start">
            <div className="S">시작</div>
            <br />
            <input
              type="time"
              value={startTime}
              onChange={handleStartTimeChange}
              className="startT"
            />
          </div>
          <div className="end">
            <div className="E">끝</div>
            <br/>
            <input
              type="time"
              value={endTime}
              onChange={handleEndTimeChange}
              className="endT"
            />
          </div>
          
          <button className="made" onClick={handleCreateClick}>
            만들기
          </button>
        </div>
      </div>
      <div className="TC">
        {isTableVisible && (
          <TableComponent startTime={startTime} endTime={endTime} />
        )}
      </div>
    </div>
  );
}
