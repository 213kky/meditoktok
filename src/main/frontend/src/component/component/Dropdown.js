import React, { useState, useEffect } from 'react';
import dummydata from './dummydata.json';
import './Dropdown.css';
import axios from "axios";
import {useCookies} from "react-cookie"


function Dropdown({onSelect, originData}) {
  const [cookies, setCookie, removeCookie] = useCookies(['memberInfo']);
  const cookieValue = cookies['memberInfo'];
  const [selectedOption, setSelectedOption] = useState('');
   function handleChange(event) {
    setSelectedOption(event.target.value);
    onSelect(event.target.value);
  }
console.log(cookieValue);


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
