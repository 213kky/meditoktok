import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ManagerSignUp() {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [mailAgree, setMailAgree] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
const [selectedHospital, setSelectedHospital] = useState(null);
const [data1, setData1] = useState(null);
const [data2, setData2] = useState(null);
 const [showForm, setShowForm] = useState(false);
const [doctorName, setDoctorName] = useState("");
const [department1, setDepartment1] = useState("");
const [doctors, setDoctors] = useState([{ name: "", department: "" }]);
console.log('doctors', doctors);
const handleAddDoctor = () => {
    setDoctors([...doctors, { name: "", department: "" }]);
  };
  const handleRemoveDoctor = (index) => {
      const updatedDoctors = [...doctors];
      updatedDoctors.splice(index, 1);
      setDoctors(updatedDoctors);
    };

    const handleDoctorNameChange = (index, value) => {
        const updatedDoctors = [...doctors];
        updatedDoctors[index].name = value;
        setDoctors(updatedDoctors);
      };

      const handleDoctorDepartmentChange = (index, value) => {
        const updatedDoctors = [...doctors];
        updatedDoctors[index].department = value;
        setDoctors(updatedDoctors);
      };

//const handleSubmit = (event) => {
//        event.preventDefault();
//        // 회원 가입 폼을 제출하는 코드 작성
//        const formData = {
//            account: account,
//            pw: password,
//            email: email,
//            phoneNumber: phoneNumber,
//            name: name,
//            birth: birth,
//            isAdmin: 1,
//            mailAgree: mailAgree,
//            hospId: gender,
//        };
//        const isFormValid = account.length > 0 && password.length > 0 && email.length > 0 && phoneNumber.length > 0 && name.length >0 && birth.length>0 && gender !=='none';
//        if(isFormValid){
//        axios.post('/signup/user', formData)
//            .then(response => {
//                 console.log(response);
//                alert(response.data);
//                if(response.data!="이미 사용중인 아이디입니다."){
//                navigate("/login");
//                }
//            })
//            .catch(error => {
//                console.error(error);
//            });
//        }else{
//            alert("값을 모두 입력해주세요")
//        }
//    };


  const handleSearch = () => {
    axios
      .get(`https://apis.data.go.kr/B551182/hospInfoServicev2/getHospBasisList?ServiceKey=%2Fzt1jmOZn0y5Q8ql8mxBIKRoXvyqetyRjCvZUNCV6OCXxnnYWFFZUnNcW5E2yCax4iZMPg%2FAbMM%2FpAw7%2BeYhtQ%3D%3D&pageNo=1&numOfRows=1500&yadmNm=${inputValue}`)
      .then(response => {console.log(response.data)
        setSearchResults(response.data?.response.body.items.item || []);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (selectedHospital) {
      axios
        .get(`https://apis.data.go.kr/B551182/MadmDtlInfoService2/getDtlInfo2?serviceKey=%2Fzt1jmOZn0y5Q8ql8mxBIKRoXvyqetyRjCvZUNCV6OCXxnnYWFFZUnNcW5E2yCax4iZMPg%2FAbMM%2FpAw7%2BeYhtQ%3D%3D&ykiho=${selectedHospital.ykiho}`)
        .then(response => {
          console.log("병원1",response.data);
          setData1(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [selectedHospital]);


  useEffect(() => {
      if (selectedHospital) {
        axios
          .get(`https://apis.data.go.kr/B551182/MadmDtlInfoService2/getDgsbjtInfo2?serviceKey=%2Fzt1jmOZn0y5Q8ql8mxBIKRoXvyqetyRjCvZUNCV6OCXxnnYWFFZUnNcW5E2yCax4iZMPg%2FAbMM%2FpAw7%2BeYhtQ%3D%3D&ykiho=${selectedHospital.ykiho}`)
          .then(response => {
            console.log("병원2",response.data);
            setData2(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }
    }, [selectedHospital]);



const handleSaveDoctorData = () => {
  if (!selectedHospital) {
    console.error("병원을 선택하세요.");
    return;
  }

  const formData = {
    hospName: selectedHospital.yadmNm,
    doctors: doctors,
  };
console.log('의사정보 반환', formData);
  axios
    .post('/api/saveDoctorData', formData)
    .then(response => {
      console.log(formData);
      // 저장 성공 후의 동작을 정의
    })
    .catch(error => {
      console.error(error);
      // 저장 실패 후의 동작을 정의
    });
};



 const handleHospitalSelect = (hospital) => {
   setSelectedHospital(hospital); // 선택한 병원을 상태 변수에 저장

 };

// useEffect(() => {
//   if (selectedHospital) {
//     handleSaveData(); // 선택한 병원이 변경될 때마다 handleSaveData 함수 호출
//   }
// }, [selectedHospital]);


  const handleSaveData = () => {
    if (!data2 || !data2.response || !data2.response.body || !data2.response.body.items || !data2.response.body.items.item) {
        console.error("Invalid data2");
        return; // 데이터가 유효하지 않을 경우 함수 실행 중단
      }
    let ls = "";

    for(let i = 0; i < data2.response.body.items.item.length; i++){
        ls = ls + data2.response.body.items.item[i].dgsbjtCdNm + ":" + data2.response.body.items.item[i].dgsbjtPrSdrCnt+"명"
    }
    if (selectedHospital) {
      const formData = {
        hospName: selectedHospital.yadmNm,
        department: ls,
        operatingHour: data1.rcvWeek,
        address: selectedHospital.addr,
        tell: selectedHospital.telno,
        url: selectedHospital.hospUrl,
        ykiho: selectedHospital.ykiho,
        // 필요한 추가 필드들도 저장
      };

      // 여기에 formData를 활용하여 데이터 저장 로직을 추가하세요
axios.post('/api/saveData', formData)
      .then(response => {
        console.log(formData);
        // 저장 성공 후의 동작을 정의
      })
      .catch(error => {
        console.error(error);
        // 저장 실패 후의 동작을 정의
      });
    }

    setDoctorName("");
        setDepartment1("");
        setShowForm(true);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    // 회원 가입 폼을 제출하는 코드 작성
    const formData = {
      account: account,
      pw: password,
      email: email,
      phoneNumber: phoneNumber,
      name: name,
      birth: birth,
      isAdmin: 1,
      mailAgree: mailAgree,
    };
    const isFormValid = account.length > 0 && password.length > 0 && email.length > 0 && phoneNumber.length > 0 && name.length > 0 && birth.length > 0;
    if (isFormValid) {
      axios.post('/signup/admain', formData)
        .then(response => {
          console.log(response);
          alert(response.data);
          if (response.data !== "이미 사용중인 아이디입니다.") {
            navigate("/login");
          }
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      alert("값을 모두 입력해주세요");
    }
  };

  useEffect(() => {
    if (passwordConfirm && password !== passwordConfirm) {
      setPasswordMismatch(true);
    } else {
      setPasswordMismatch(false);
    }
  }, [password, passwordConfirm]);
console.log('selectedHospital', selectedHospital);
  return (
    <section className="contents">
      <h1 style={{ textAlign: "center" }}>관리자 회원가입</h1>
      <form onSubmit={handleSubmit} style={{ marginLeft: "425px" }}>
        <div>
          <div>아이디</div>
          <input type="text" value={account} onChange={(event) => setAccount(event.target.value)} />
        </div>
        <div>
          <div>비밀번호</div>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <div>
          <div>비밀번호 확인</div>
          <input type="password" value={passwordConfirm} onChange={(event) => setPasswordConfirm(event.target.value)} />
          {passwordMismatch && <p style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</p>}
        </div>
        <div>
          <div>이름</div>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <div>생년월일</div>
          <input type="date" value={birth} onChange={(event) => setBirth(event.target.value)} />
        </div>

        <div>
          <div>휴대전화</div>
          <input type="tel" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
        </div>
        <div>
          <div>이메일</div>
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div>이메일 수신 동의
          <input type="checkbox" checked={mailAgree} onChange={(event) => setMailAgree(event.target.checked)} />
        </div>
        <input type="submit" value="가입" disabled={passwordMismatch} />

        <div>
          <h1>병원 검색</h1>
          <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
          <button type="button" onClick={handleSearch}>검색</button>
          {searchResults.length > 0 && (
            <ul>
                        {searchResults.map(result => (
                          <li key={result.ykiho} onClick={() => handleHospitalSelect(result)}>
                            <div>{result.yadmNm}</div>
                            <div>{result.addr}</div>
                            {/* 필요한 데이터들 추가 */}
                          </li>
                        ))}
                      </ul>
          )}
        </div>
        {selectedHospital && (
                <div>
                  <h2>선택한 병원</h2>
                  <div>병원명: {selectedHospital.yadmNm}</div>
                  <div>주소: {selectedHospital.addr}</div>
                  {/* 추가 정보 출력 */}
                </div>
              )}
        <button type="button" onClick={handleSaveData}>데이터 저장</button>
{doctors.map((doctor, index) => (
          <div key={index}>
            <h2>의사 정보 {index + 1}</h2>
            <div>
              <div>이름</div>
              <input
                type="text"
                value={doctor.name}
                onChange={(event) =>
                  handleDoctorNameChange(index, event.target.value)
                }
              />
            </div>
            <div>
              <div>진료과</div>
              <input
                type="text"
                value={doctor.department}
                onChange={(event) =>
                  handleDoctorDepartmentChange(index, event.target.value)
                }
              />
            </div>
            {index > 0 && (
              <button type="button" onClick={() => handleRemoveDoctor(index)}>
                의사 정보 삭제
              </button>
            )}
          </div>
        ))}

        <button type="button" onClick={handleAddDoctor}>
          의사 정보 추가
        </button>
        <button type="button" onClick={handleSaveDoctorData}>
          의사 정보 저장
        </button>
      </form>
    </section>
  );
}
