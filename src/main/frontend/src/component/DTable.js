import React, {useState, useEffect} from "react";
import axios from "axios";

function DTable({onSelectedSymptoms, test, symptoms, setSymptoms, all, setAll}) {
    const handleCheckboxChange = (id) => {
        setSymptoms(symptoms.map(symptom => {
            if (symptom.id === id) {
                const updatedSymptom = {
                    ...symptom,
                    checked: !symptom.checked
                };
                if (updatedSymptom.checked) {
                    onSelectedSymptoms(prevSelectedSymptoms => [...prevSelectedSymptoms, updatedSymptom]);
                } else {
                    onSelectedSymptoms(prevSelectedSymptoms => prevSelectedSymptoms.filter(item => item.id !== id));
                }
                return updatedSymptom;
            }
            return symptom;
        }));
        if (typeof setAll === 'function') {
            setAll(all.map(a => {
                if (a.id === id) {
                    const updatedSymptom = {
                        ...a,
                        checked: !a.checked
                    };
                    return updatedSymptom;
                }
                return a;
            }));
        }

    };

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
                            <td style={{width: "300px"}}>{symptom.name}</td>
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