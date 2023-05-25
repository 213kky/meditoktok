import { useState, useEffect } from "react";
import "./Create.css";
import Calendar from "../component/Calendar";
import TableComponent from "../component/TableComponent";
import Dropdown from "../component/Dropdown";


export default function Create({originData}) {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [isTableVisible, setIsTableVisible] = useState(false);

  const handleDoctorSelect = (doctorName) => {
    setSelectedDoctor(doctorName);
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const handleCreateClick = () => {
    setIsTableVisible(true);
  };

  /*useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/find/doctor', {
          params: {
            hosp: cookieValue.hospiId,
          },
        });
        setOriginData(response.data);

        console.log(response);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [cookieValue.hospiId]);*/

  useEffect(() => {
    console.log(selectedDoctor);
  }, [selectedDoctor]);

  return (
    <div>
    <Dropdown onSelect={handleDoctorSelect} originData={originData}/>
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
          <TableComponent doctor={selectedDoctor} startTime={startTime} endTime={endTime} />
        )}
      </div>
    </div>
    </div>
  );
}
