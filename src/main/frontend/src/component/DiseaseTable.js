import { Link } from "react-router-dom";
import DTable from "./DTable";
import {useState} from "react";

export default function DiseaseTable() {
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [value, setValue] = useState('머리');

    const handleSelectedSymptoms = (symptoms) => {
      setSelectedSymptoms(symptoms);
    };

    const [test, setTest] = useState(0);

    const isTest = (t) => {

        return t===test;
    }

    const handlePartClick = (part) => {
      setValue(part);
    };

    const renderTableHeaders = () => {
      const parts = ['머리', '목', '가슴', '배', '등', '엉덩이', '다리', '그외'];

      return (
        <tr>
          {parts.map((part, index) => (
            <th
              key={index}
              onClick={() => handlePartClick(part)}
              className={`${isTest(index) ? 'test' : ''}`}
            >
              {part}
            </th>
          ))}
        </tr>
      );
    };


    const renderSelectedSymptoms = () => {
      return (
        <div className="selectDisease">선택한 증상
          <div className="selectDisease1">
            {selectedSymptoms.length > 0 && (
              <p>
                {selectedSymptoms.map((symptom, index) => (
                  <span key={symptom.id}>
                    {symptom.name}
                    {index !== selectedSymptoms.length - 1 ? " " : ""}
                  </span>
                ))}
              </p>
            )}
          </div>
        </div>
      );
    };

    return (
        <div className="DTable">
            <table>
                <tr>
                  {renderTableHeaders()}
                </tr>
                <tr style={{height:"200px"}} valign={"top"}>
                    <td colSpan='8' >
                        <div style={{width: '790px',height: "200px", overflowY:"scroll"}}>
                          <div className="selectedSymptomsContainer">
                            {value === '머리' && (
                              <DTable onSelectedSymptoms={handleSelectedSymptoms} test={value} />
                            )}
                            {value === '목' && (
                              <DTable onSelectedSymptoms={handleSelectedSymptoms} test={value} />
                            )}
                          </div>
                        </div>
                    </td>
                </tr>
            </table>
            <div className="diseaseSearchFrame">
                <div className="diseaseSearch">증상 검색
                    <input className="comment2" placeholder="증상을 입력해주세요." />
                    <div className="search">
                        <Link to='/009' className="link">검색</Link></div></div>
                <div className="reset"><Link to='/' className="link">선택 초기화</Link></div>
                <div className="complete"><Link to='/symptom_search' className="link">선택 완료</Link></div>
            </div>
            <div className="nothing">검색결과가 없습니다.</div>
            {renderSelectedSymptoms()}
          </div>
    );
}
