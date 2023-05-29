import React, { useState, useEffect } from 'react';
import './Dropdown.css';
import axios from 'axios';


function Dropdown({onSelect, originData}) {
  const [selectedOption, setSelectedOption] = useState('');
  
  const handleChange = async (event) => {
    const selectedDoctor = event.target.value;
    setSelectedOption(selectedDoctor);

    // try {
    //   const response = await axios.post('/api/doctor', {
    //     doctorName: selectedDoctor,
    //   });
    //   console.log(response.data);
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };

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