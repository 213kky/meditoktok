import React, { useState, useEffect } from 'react';
import dummydata from './dummydata.json';
import './Dropdown.css';
import axios from "axios";
import {useCookies} from "react-cookie"


function Dropdown() {
  const [cookies, setCookie, removeCookie] = useCookies(['memberInfo']);
  const cookieValue = cookies['memberInfo'];
  const [selectedOption, setSelectedOption] = useState('');
 const [originData, setOriginData] = useState('');
  function handleChange(event) {
    setSelectedOption(event.target.value);
  }
console.log(cookieValue);


   useEffect(() => {
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
   }, []);

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
