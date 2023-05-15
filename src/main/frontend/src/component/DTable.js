import React, { useState, useEffect } from "react";

function DTable({ onSelectedSymptoms }) {
  const [symptoms, setSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  useEffect(() => {
    fetchSymptoms();
  }, []);

  const fetchSymptoms = async () => {
    try {
      const response = await fetch('/api/symptoms');
      const data = await response.json();
      setSymptoms(data);
    } catch (error) {
      console.error('Error fetching symptoms:', error);
    }
  };

  const handleCheckboxChange = (id) => {
    setSymptoms(symptoms.map(symptom => {
      if (symptom.id === id) {
        return {
          ...symptom,
          checked: !symptom.checked
        };
      }
      return symptom;
    }));
  };

  useEffect(() => {
    setSelectedSymptoms(symptoms.filter(symptom => symptom.checked));
  }, [symptoms]);

  useEffect(() => {
    if (typeof onSelectedSymptoms === 'function') {
      onSelectedSymptoms(selectedSymptoms);
    }
  }, [selectedSymptoms, onSelectedSymptoms]);

  const renderTableRows = () => {
    const rows = [];
    const numRows = Math.ceil(symptoms.length / 5);

    for (let i = 0; i < numRows; i++) {
      const rowStartIndex = i * 5;
      const rowEndIndex = Math.min(rowStartIndex + 5, symptoms.length);
      const row = symptoms.slice(rowStartIndex, rowEndIndex);

      rows.push(
        <tr key={i}>
          {row.map(symptom => (
            <React.Fragment key={symptom.id}>
              <td>
                <input
                  type="checkbox"
                  checked={symptom.checked || false}
                  onChange={() => handleCheckboxChange(symptom.id)}
                />
              </td>
              <td>{symptom.name}</td>
            </React.Fragment>
          ))}
          {row.length < 5 && <td colSpan={5 - row.length}></td>}
        </tr>
      );
    }

    return rows;
  };

  return (
    <div className="DTable1">
      <table>
        <tbody>
          {renderTableRows()}
        </tbody>
      </table>
      <div>
        <p>
          {selectedSymptoms.map((symptom, index, arr) => (
            <span key={symptom.id}>
              {symptom.name}
              {index !== arr.length - 1 ? " " : ""}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default DTable;











//                  <tr>
//                      <td><input type='checkbox'  onClick={()=>setB(!b)} checked={b}/>목의 통증</td>
//                      <td><input type='checkbox'/>목소리 변화</td>
//                      <td><input type='checkbox'/>경부 강직</td>
//                      <td><input type='checkbox'/>목 주변 부종</td>
//                  </tr>
//                  <tr>
//                      <td><input type='checkbox'/>이물감</td>
//                      <td><input type='checkbox'/>이중음성</td>
//                      <td><input type='checkbox'/>성대 이상</td>
//                      <td><input type='checkbox'/>후두염</td>
//                  </tr>
//                  <tr>
//                      <td><input type='checkbox'/>편도선 비대</td>
//                      <td><input type='checkbox'/>인후염</td>
//                      <td><input type='checkbox'/>후두부종</td>
//                      <td><input type='checkbox'/>성대부종</td>
//                  </tr>
//                  <tr>
//                      <td><input type='checkbox'/>잦은 상기도 감염</td>
//                      <td><input type='checkbox'/>코가 목뒤로 넘어감</td>
//                      <td><input type='checkbox'/>삼키기 곤란</td>
//                  </tr>