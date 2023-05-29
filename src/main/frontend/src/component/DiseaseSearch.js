import DiseaseTr from "./DiseaseTr";
import axios from "axios";
import {useEffect, useState} from "react";

export default function DiseaseSearch() {
    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [filterType, setFilterType] = useState('all');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/diseaseList');
                setData(response.data);
                setFilteredData(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        if (data !== null) {
            let filtered = data;
            if (filterType === 'startsWithG') {
                filtered = filtered.filter(item => item.name.charAt(0).match(/[가-낗]/));
            } else if (filterType === 'startsWithN') {
                filtered = filtered.filter(item => item.name.charAt(0).match(/[나-닣]/));
            } else if (filterType === 'startsWithD') {
                filtered = filtered.filter(item => item.name.charAt(0).match(/[다-띻]/));
            } else if (filterType === 'startsWithR') {
                filtered = filtered.filter(item => item.name.charAt(0).match(/[라-맇]/));
            } else if (filterType === 'startsWithM') {
                filtered = filtered.filter(item => item.name.charAt(0).match(/[마-밓]/));
            } else if (filterType === 'startsWithB') {
                filtered = filtered.filter(item => item.name.charAt(0).match(/[바-삫]/));
            } else if (filterType === 'startsWithS') {
                filtered = filtered.filter(item => item.name.charAt(0).match(/[사-앃]/));
            } else if (filterType === 'startsWithA') {
                filtered = filtered.filter(item => item.name.charAt(0).match(/[아-잏]/));
            } else if (filterType === 'startsWithJ') {
                filtered = filtered.filter(item => item.name.charAt(0).match(/[자-찧]/));
            } else if (filterType === 'startsWithC') {
                filtered = filtered.filter(item => item.name.charAt(0).match(/[차-칳]/));
            } else if (filterType === 'startsWithK') {
                filtered = filtered.filter(item => item.name.charAt(0).match(/[카-킿]/));
            } else if (filterType === 'startsWithT') {
                filtered = filtered.filter(item => item.name.charAt(0).match(/[타-팋]/));
            } else if (filterType === 'startsWithP') {
                filtered = filtered.filter(item => item.name.charAt(0).match(/[파-핗]/));
            } else if (filterType === 'startsWithH') {
                filtered = filtered.filter(item => item.name.charAt(0).match(/[하-힣]/));
            } else if (filterType === 'others') {
                filtered = filtered.filter(item => item.name.charAt(0).match(/[^ㄱ-ㅎ가-힣]/));
            }
            setInputValue('');
            filtered = filtered.filter(item => {
                return item.name.includes(inputValue);
            });
            setFilteredData(filtered);
        }
    }, [filterType, data]);


    const renderDiseaseList = () => {
        if (filteredData === null) {
            return
        }
        if (filteredData.length === 0) {
            return <tr>
                <td colSpan="2">검색 결과가 없습니다.</td>
            </tr>;
        }
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

        return currentItems.map((item, index) => {
            console.log(item);
            return (
                <DiseaseTr disease={item} key={index}></DiseaseTr>
            );
        })
    }

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleSearch() {
        const filtered = data.filter(item => {
            return item.name.includes(inputValue);
        });
        setFilterType('');
        setFilteredData(filtered);
        setCurrentPage(1);
    }

    function handleFilterButtonClick(filter) {
        setFilterType(filter);
        setCurrentPage(1); // 필터링 버튼 클릭 시 페이지를 1로 초기화
    }

    function handlePageChange(pageNumber) {
        setCurrentPage(pageNumber);
    }
    function handleKeyPress(event) {
        if (event.key === "Enter") {
            handleSearch();
        }
    }
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <section className="contents">
            <div className="filterButtons">
                <button className={`${filterType === 'all' ? 'active' : ''}`}
                        onClick={() => handleFilterButtonClick('all')}>전체
                </button>
                <button className={`${filterType === 'startsWithG' ? 'active' : ''}`}
                        onClick={() => handleFilterButtonClick('startsWithG')}>ㄱ
                </button>
                <button className={`${filterType === 'startsWithN' ? 'active' : ''}`}
                        onClick={() => handleFilterButtonClick('startsWithN')}>ㄴ
                </button>
                <button className={`${filterType === 'startsWithD' ? 'active' : ''}`}
                        onClick={() => handleFilterButtonClick('startsWithD')}>ㄷ
                </button>
                <button className={`${filterType === 'startsWithR' ? 'active' : ''}`}
                        onClick={() => handleFilterButtonClick('startsWithR')}>ㄹ
                </button>
                <button className={`${filterType === 'startsWithM' ? 'active' : ''}`}
                        onClick={() => handleFilterButtonClick('startsWithM')}>ㅁ
                </button>
                <button className={`${filterType === 'startsWithB' ? 'active' : ''}`}
                        onClick={() => handleFilterButtonClick('startsWithB')}>ㅂ
                </button>
                <button className={`${filterType === 'startsWithS' ? 'active' : ''}`}
                        onClick={() => handleFilterButtonClick('startsWithS')}>ㅅ
                </button>
                <button className={`${filterType === 'startsWithA' ? 'active' : ''}`}
                        onClick={() => handleFilterButtonClick('startsWithA')}>ㅇ
                </button>
                <button className={`${filterType === 'startsWithJ' ? 'active' : ''}`}
                        onClick={() => handleFilterButtonClick('startsWithJ')}>ㅈ
                </button>
                <button className={`${filterType === 'startsWithC' ? 'active' : ''}`}
                        onClick={() => handleFilterButtonClick('startsWithC')}>ㅊ
                </button>
                <button className={`${filterType === 'startsWithK' ? 'active' : ''}`}
                        onClick={() => handleFilterButtonClick('startsWithK')}>ㅋ
                </button>
                <button className={`${filterType === 'startsWithT' ? 'active' : ''}`}
                        onClick={() => handleFilterButtonClick('startsWithT')}>ㅌ
                </button>
                <button className={`${filterType === 'startsWithP' ? 'active' : ''}`}
                        onClick={() => handleFilterButtonClick('startsWithP')}>ㅍ
                </button>
                <button className={`${filterType === 'startsWithH' ? 'active' : ''}`}
                        onClick={() => handleFilterButtonClick('startsWithH')}>ㅎ
                </button>
                <button className={`${filterType === 'others' ? 'active' : ''}`}
                        onClick={() => handleFilterButtonClick('others')}>기타
                </button>

            </div>
            <div className="tableDiv">
                <table className="super_table">
                    {renderDiseaseList()}
                </table>
                <div className="searchDiv">
                    <input type="text" className="searchDis" placeholder="질병 검색" value={inputValue} onKeyPress={handleKeyPress}
                           onChange={handleInputChange}/>
                    <div className="searchIcon" onClick={handleSearch}>검색</div>
                </div>
                <div className="pagination">
                    {pageNumbers.map((number) => (
                        <div key={number} className={`page ${currentPage === number ? 'active' : ''}`}
                             onClick={() => handlePageChange(number)}>
                            {number}
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}