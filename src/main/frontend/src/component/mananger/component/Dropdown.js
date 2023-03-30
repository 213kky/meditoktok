import './Dropdown.css'

export default function Dropdown() { 

  return (
  <div className="Dropdown">
  <select name="doctor">
    <option value="">의사명</option>
    <option value="A">의사A</option>
    <option value="B">의사B</option>
    <option value="C">의사C</option>
  </select>
  </div>

  );
}
