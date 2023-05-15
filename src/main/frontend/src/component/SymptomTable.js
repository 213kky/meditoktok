import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Symptoms() {
  const [symptoms, setSymptoms] = useState([]);

  useEffect(() => {
    fetchSymptoms();
  }, []);

  const fetchSymptoms = async () => {
    try {
      const response = await axios.get('/api/symptoms');
      console.log(response.data); // 브라우저 콘솔에 데이터 출력
      setSymptoms(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Symptoms List</h1>
      <ul>
        {symptoms.map((symptom) => (
          <li key={symptom.id}>
            {symptom.name} - {symptom.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Symptoms;
