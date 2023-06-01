import {Link} from "react-router-dom";
import DTable from "./DTable";
import {useEffect, useState} from "react";
import axios from "axios";
import DiseaseTr from "./DiseaseTr";
import FoundDisease from "./FoundDisease";

export default function DiseaseTable() {
    const [symptoms, setSymptoms] = useState([]);
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [value, setValue] = useState('머리');
    const [inputValue, setInputValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [disease, setDisease] = useState([]);
    const [flag, setFlag] = useState(0);
    const [filteredDisease, setFilteredDisease] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/diseaseList');
                setDisease(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        const fetchSymptoms = async () => {
            try {
                const response = await axios.get(`/api/symptoms`);
                setSymptoms(response.data);

                console.log(response.data);
            } catch (error) {
                console.error('Error fetching symptoms:', error);
            }
        };
        fetchSymptoms();
    }, []);

    const handlePartMouseEnter = () => {
        const otherBox = document.getElementById("searchContOther");
        otherBox.style.display = "block";
    };

    const handlePartMouseLeave = () => {
        const otherBox = document.getElementById("searchContOther");
        otherBox.style.display = "none";
    };

    const handlePartClick = (part) => {
        if (part === "그 외") {
            const otherBox = document.getElementById("searchContOther");
            otherBox.style.display = "block";
        }else{
            setInputValue('');
            setSearchResults([]);
            setValue(part);
            const otherPart = document.getElementById("otherPart");
            otherPart.className = '';
        }
        // setPartSymptoms(symptoms.filter((item) => item.bodyPart.includes(part)));
    };

    const renderTableHeaders = () => {
        const parts = ['머리', '목', '가슴', '배', '등', '엉덩이', '다리', '그 외'];
        const otherParts = ['눈', '귀', '코', '입', '전신', '피부', '유방', '생식기', '골반', '손', '발', '기타'];
        return (
            <>
                <tr>
                    {parts.map((part, index) => (
                        <th
                            key={index}
                            onClick={() => handlePartClick(part)}
                            onMouseEnter={part === '그 외' ? handlePartMouseEnter : undefined}
                            onMouseLeave={part === '그 외' ? handlePartMouseLeave : undefined}
                            id={`${part === '그 외' ? 'otherPart' : ''}`}
                            className={`${part === value ? 'test' : ''}`}
                        >
                            {part}
                        </th>
                    ))}

                </tr>
                <div className="searchContOther" id="searchContOther" style={{display: "none"}}
                     onMouseEnter={handlePartMouseEnter}
                     onMouseLeave={handlePartMouseLeave}>
                    <ul>
                        {otherParts.map((part, index)=>(
                            <li
                                key={index}
                                onClick={()=>{
                                    handlePartClick(part);
                                    const otherPart = document.getElementById("otherPart");
                                    otherPart.className = 'test';
                                }}

                            >{part}</li>
                        ))}
                    </ul>
                </div>
            </>
        );
    };

    const renderSelectedSymptoms = () => {
        return selectedSymptoms.map((symptom, index) => (
            <span>
                    {symptom.name}
                {index !== selectedSymptoms.length - 1 ? ", " : ""}
            </span>
        ));
    };
    const handleSelectedSymptoms = (selected) => {
        setSelectedSymptoms(selected);
    };
    const handleReset = () => {
        setSelectedSymptoms([]);
        setSymptoms(symptoms.map((symptom) => ({...symptom, checked: false})));
    };

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    const handleComplete = () => {
        if (selectedSymptoms === []) {
            alert("증상을 선택해주세요");
        } else {
            setFlag(1);
            console.log("선택한 증상 : ", selectedSymptoms);
            const arr = selectedSymptoms;
            let temp = disease;
            for (let i = 0; i < arr.length; i++) {
                temp = temp.filter((item, index) => item.symptom.includes(arr[i].name));
            }
            if (temp.length > 0) {
                setFilteredDisease(temp)
                console.log("탐색완료 : ", temp);
            } else {
                setFilteredDisease([]);
            }
        }
    }
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredDisease.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    function handlePageChange(pageNumber) {
        setCurrentPage(pageNumber);
    }

    const renderDiseaseList = () => {
        if (filteredDisease.length === 0) {
            return <tr>
                <td colSpan="2"><h3>검색 결과가 없습니다.</h3></td>
            </tr>;
        }
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = filteredDisease.slice(indexOfFirstItem, indexOfLastItem);

        return currentItems.map((item, index) => {
            console.log(item);
            return (
                <DiseaseTr disease={item} key={index}></DiseaseTr>
            );
        })
    }
    const searchSymptom = () => {
        setValue('');

        if (inputValue !== '') {
            const filteredSymptoms = symptoms.filter((symptom) =>
                symptom.name.includes(inputValue)
            );

            if (filteredSymptoms.length === 0) {
                const nothingText = document.getElementById("nothing");
                nothingText.style.display = "block";
            } else {
                const nothingText = document.getElementById("nothing");
                nothingText.style.display = "none";
            }

            setSearchResults(filteredSymptoms);
        } else {
            alert("검색어를 입력해주세요");
            setValue('머리');
        }
    };

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            searchSymptom();
        }
    }

    return (
        <>
            <div className="DTable">
                <table>
                    <tr style={{cursor:"pointer"}}>
                        {renderTableHeaders()}
                    </tr>
                    <tr style={{height: "200px"}} valign={"top"}>
                        <td colSpan='8'>
                            <div style={{width: '790px', height: "200px", overflowY: "scroll"}}>
                                <div className="selectedSymptomsContainer">
                                    {searchResults.length > 0 ? (
                                        // 검색 시 로직 변경 필요 ( 검색 필터링을 DTable에서 진행하면 더 깔끔해질듯 )
                                        <DTable
                                            onSelectedSymptoms={handleSelectedSymptoms}
                                            part="검색 결과"
                                            symptoms={searchResults}
                                            setSymptoms={setSearchResults}
                                            all={symptoms}
                                            setAll={setSymptoms}
                                        />
                                    ) : (
                                        <DTable onSelectedSymptoms={handleSelectedSymptoms} part={value}
                                                symptoms={symptoms} setSymptoms={setSymptoms}/>
                                    ) }
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
                <div className="diseaseSearchFrame">
                    <div className="diseaseSearch">증상 검색
                        <input onChange={handleInputChange} value={inputValue} className="comment2"
                               placeholder="증상을 입력해주세요." onKeyPress={handleKeyPress}/>
                        <div className="search" onClick={searchSymptom}>검색</div>
                    </div>
                    <div className="reset" onClick={handleReset}>선택 초기화</div>
                    <div className="complete" onClick={handleComplete}>선택 완료</div>
                </div>
                <div className="nothing" id="nothing" style={{display: "none"}}>검색결과가 없습니다.</div>
                <div className="selectDisease">선택한 증상
                    <div className="selectDisease1">
                        <p>
                            {selectedSymptoms.length > 0 && (
                                renderSelectedSymptoms()
                            )}
                        </p>
                    </div>
                </div>
            </div>
            {flag === 1 ?
                <div className="tableDiv">
                    <table className="super_table">
                        <tr>
                            <td><h2 style={{textAlign: "center"}}>질병 결과</h2></td>
                        </tr>
                        {renderDiseaseList()}

                    </table>
                    <div className="pagination">
                        {pageNumbers.map((number) => (
                            <div key={number} className={`page ${currentPage === number ? 'active' : ''}`}
                                 onClick={() => handlePageChange(number)}>
                                {number}
                            </div>
                        ))}
                    </div>
                </div> : <FoundDisease/>}
        </>
    );
}
