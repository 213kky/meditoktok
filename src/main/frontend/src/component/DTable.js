import React, {useState, useEffect} from "react";
import axios from "axios";

function DTable({onSelectedSymptoms, part, symptoms, setSymptoms, all, setAll}) {
    const [partSymptoms, setPartSymptoms] = useState([]);

    useEffect(() => {
        if (part !== "검색 결과") {
            setPartSymptoms(symptoms.filter((item) => item.bodyPart.includes(part)));
        } else {
            setPartSymptoms(symptoms);
        }
    }, [part, symptoms]);

    const handleCheckboxChange = (id) => {
        setPartSymptoms(partSymptoms.map(symptom => {
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
        if(part!=="검색 결과"){
            setSymptoms(symptoms.map(a => {
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
        const numRows = Math.ceil(partSymptoms.length / 5);
        // if (symptoms.length >= 5) {
        for (let i = 0; i < numRows; i++) {
            const rowStartIndex = i * 5;
            const rowEndIndex = Math.min(rowStartIndex + 5, partSymptoms.length);
            const row = partSymptoms.slice(rowStartIndex, rowEndIndex);

            rows.push(
                <tr key={i}>
                    {row.map(symptom => (
                        <React.Fragment key={symptom.id}>
                            <td style={{width: "20px"}}>
                                <input
                                    type="checkbox"
                                    checked={symptom.checked || false}
                                    onChange={() => handleCheckboxChange(symptom.id)}
                                />
                            </td>
                            <td style={{width: "126px"}}>{symptom.name}</td>
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