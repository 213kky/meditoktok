import React, { useState } from 'react';
import dummydata from './dummydata.json';
import './Dropdown.css';

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState('');

  function handleChange(event) {
    setSelectedOption(event.target.value);
  }

  return (
    <div>
      <select className='Dropdown' value={selectedOption} onChange={handleChange} style={{ textAlign: 'center' }}>
        <option value="">--Select doctor--</option>
        {dummydata.map((name) => (
          <option key={name.id} value={name.id}>
            {name.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
