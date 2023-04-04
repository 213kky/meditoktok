// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
 
// function Login() {
//     const [inputId, setInputId] = useState('')
//     const [inputPw, setInputPw] = useState('')
 
// 	// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
//     const handleInputId = (e) => {
//         setInputId(e.target.value)
//     }
 
//     const handleInputPw = (e) => {
//         setInputPw(e.target.value)
//     }
 
// 	// login 버튼 클릭 이벤트
//     const onClickLogin = () => {
//         console.log('click login')
//     }
 
// 	// 페이지 렌더링 후 가장 처음 호출되는 함수
//     useEffect(() => {
//         axios.get('/user_inform/login')
//         .then(res => console.log(res))
//         .catch()
//     },
//     // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
//     [])
 
//     return(
//         <div className='Log'>
//             <h2>kakao</h2>
//             <div className='ID'>
//                 {/* <label htmlFor='input_id'>ID : </label> */}
//                 <input type='text' name='input_id' value={inputId} placeholder='카카오 메일 아이디, 이메일, 전화번호호' onChange={handleInputId} />
//             </div>
//             <div className='PW'>
//                 {/* <label htmlFor='input_pw'>PW : </label> */}
//                 <input type='password' name='input_pw' value={inputPw} placeholder='비밀번호' onChange={handleInputPw} />
//             </div>
//             <div className='Log_btn'>
//                 <button type='button' onClick={onClickLogin}>로그인</button>
//             </div>
//         </div>
//     )
// }
 
// export default Login;