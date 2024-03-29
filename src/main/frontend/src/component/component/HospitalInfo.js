import React, {useState, useEffect} from 'react';
import './HospitalInfo.css';
import axios from "axios";
import {useCookies} from "react-cookie";

export default function HospitalInfo(props) {
    const [editMode, setEditMode] = useState(false);
    const [department, setDepartment] = useState('');
    const [doctors, setDoctors] = useState('');
    const [openingHours, setOpeningHours] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [hospitalURL, setHospitalURL] = useState('');
    const [Notice, setNotice] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['memberInfo']);
    const cookieValue = cookies['memberInfo'];
    const [originData, setOriginData] = useState(null);
    console.log(cookieValue.hospiId);
    const handleEditSave = () => {
        if (editMode) {
            setEditMode(false);
        } else {
            setEditMode(true);
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/manager1', {
                    params: {
                        hospiId: cookieValue.hospiId,
                    },
                });
                setOriginData(response.data);
                props.setHospName(response.data.hospName);
                setDepartment(response.data.department);
                setDoctors(response.data.medicalStaffName);
                setOpeningHours(response.data.operatingHours);
                setAddress(response.data.address);
                setPhoneNumber(response.data.tell);
                setHospitalURL(response.data.url);
                setNotice(response.data.notes);
                console.log(originData);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    const save = () => {
        setEditMode(false);
        const editData = {
            hospName: originData.hospName,
            id: cookieValue.hospiId,
            department: department,
            medicalStaffName: doctors,
            operatingHours: openingHours,
            address: address,
            tell: phoneNumber,
            url: hospitalURL,
            notes: Notice,
        };
        axios.post('/manager12', editData)
            .then(response => {
                alert('병원 정보가 수정되었습니다.');
            })
            .catch(error => {
                console.error(error);
            });

    }


    return (
        <section className="Mcontents">
            <div className="Mhospital">{originData ? originData.hospName : null}</div>
            <div className='Mc'>
      <span className="ButtonContainer">
        {editMode ? (
            <button className="SaveButton" style={{width: '100px', height: '40px'}} onClick={save}>
                저장
            </button>
        ) : (
            <button className="EditButton" style={{width: '100px', height: '40px'}} onClick={handleEditSave}>
                수정
            </button>
        )}
      </span>

                <div className="MhospitalInfoBox">
                    <span>진료과목</span>
                    <input
                        type="text"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        disabled={!editMode}
                    />

                    <span>의료진</span>
                    <input
                        type="text"
                        value={doctors}
                        onChange={(e) => setDoctors(e.target.value)}
                        disabled={!editMode}
                    />

                    <span>운영시간</span>
                    <input
                        type="text"
                        value={openingHours}
                        onChange={(e) => setOpeningHours(e.target.value)}
                        disabled={!editMode}
                    />

                    <span>주소</span>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        disabled={!editMode}
                    />

                    <span>전화번호</span>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        disabled={!editMode}
                    />

                    <span>병원URL</span>
                    <input
                        type="text"
                        value={hospitalURL}
                        onChange={(e) => setHospitalURL(e.target.value)}
                        disabled={!editMode}
                    />
                </div>

                <div className='Notice'>
                    <span>공지사항</span><br/><br/>
                    <input className='NotT'
                           type="text"
                           value={Notice}
                           onChange={(e) => setNotice(e.target.value)}
                           disabled={!editMode}
                    /></div>
            </div>
        </section>
    );
}
