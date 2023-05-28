import React, { useState, useEffect } from 'react';
import './Dropdown.css';



function Dropdown({onSelect, originData}) {
  const [selectedOption, setSelectedOption] = useState('');
   function handleChange(event) {
    setSelectedOption(event.target.value);
  }
  useEffect(() => {
    onSelect(selectedOption);
  }, [selectedOption, onSelect]);


  return (
    <div>
      <select className='Dropdown' value={selectedOption} onChange={handleChange} style={{ textAlign: 'center' }}>
        <option value="">--Select doctor--</option>
        {originData?originData.map((item) => (
          <option key={item.id} value={item.id}>
            {item.doctorName}
          </option>
        )):null}
      </select>
    </div>
  );
}

export default Dropdown;