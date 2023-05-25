import React, { useState, useEffect } from "react";
import axios from "axios";

function DTable({ onSelectedSymptoms, test }) {
  const [symptoms, setSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  useEffect(() => {
    fetchSymptoms();
  }, [test]);

  const fetchSymptoms = async () => {
    try {
      const response = await axios.get(`/api/symptoms`,{params : { bodyPart : test,}});
      setSymptoms(response.data);
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
    const selected = symptoms.filter(symptom => symptom.checked);
    setSelectedSymptoms(selected);
    if (typeof onSelectedSymptoms === 'function') {
      onSelectedSymptoms(selected);
    }
  }, [symptoms, onSelectedSymptoms]);

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
    </div>
  );
}

export default DTable;


//                      <td><input type='checkbox'  onClick={()=>setB(!b)} checked={b}/>목의 통증</td>
