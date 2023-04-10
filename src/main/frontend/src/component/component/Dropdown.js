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
      <select className='Dropdown' value={selectedOption} onChange={handleChange}>
        <option value="">--Select--</option>
        {dummydata.map((name) => (
          <option key={name.id} value={name.id}>
            {name.name}
          </option>
        ))}
      </select>
      {/* {selectedOption && (
        <div>
          <h3>User Details</h3>
          <p>Name: {dummyData[selectedOption - 1].name}</p>
          <p>Age: {dummyData[selectedOption - 1].age}</p>
          <p>Gender: {dummyData[selectedOption - 1].gender}</p>
        </div>
      )} */}
    </div>
  );
}

export default Dropdown;
