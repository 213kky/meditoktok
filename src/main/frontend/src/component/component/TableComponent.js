import { useState } from "react";
import "./TableComponent.css";

export default function TableComponent() {
  const [reservationCount, setReservationCount] = useState(0);

  const handleChange = (e) => {
    setReservationCount(e.target.value);
  };

  const handleClick = () => {
    console.log("Reservation Count:", reservationCount);
  };

  return (
    <div className="Save">
      <div className="TT">
        <table className="time">
          <thead>
            <tr>
              <th colspan="4">오전</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="number" min="0" max="5" />
                <br />
                09:00
              </td>
              <td>
                <input type="number" min="0" max="5" />
                <br />
                10:00
              </td>
              <td>
                <input type="number" min="0" max="5" />
                <br />
                11:00
              </td>
              <td>
                <input type="number" min="0" max="5" />
                <br />
                12:00
              </td>
            </tr>
          </tbody>
        </table>
        <table className="time">
          <thead>
            <tr>
              <th colspan="4">오후</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="number" min="0" max="5" />
                <br />
                14:00
              </td>
              <td>
                <input type="number" min="0" max="5" />
                <br />
                15:00
              </td>
              <td>
                <input type="number" min="0" max="5" />
                <br />
                16:00
              </td>
              <td>
                <input type="number" min="0" max="5" />
                <br />
                17:00
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="save" onClick={handleClick}>
        저장
      </button>
    </div>
  );
}

