import React, {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import LoginKakao from "./LoginKakao";
import { useCookies } from 'react-cookie';

export default function Login(props) {
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['memberInfo']);
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            account: account,
            pw: password,
        };
        axios.post('/login', formData)
          .then(response => {
            // 로그인 성공
            props.setIsLogin(true);
            if (response.data.isAdmin) {
              props.onToggleAdmin(true);
            }
            setCookie('memberInfo', response.data, { path: '/' });
            alert(`${response.data.name}님 환영합니다.`);
            navigate("/");
          })
          .catch(error => {
            // 로그인 실패 또는 오류 발생
            if (error.response && error.response.data) {
              // 오류 응답 처리
              const errorMessage = error.response.data.errorMessage;
              alert(errorMessage);
            } else {
              // 일반 오류 처리
              alert('로그인에 실패했습니다.');
              console.error(error);
            }
          });
    }

    return (
        <section className="contents">

            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>아이디:</label>
                    <input type="text" value={account} onChange={(e) => setAccount(e.target.value)}/>
                </div>
                <div>
                    <label>비밀번호:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit">로그인</button>
            </form>
            <Link to="/findAccount" >아이디 찾기</Link>
            <span> | </span>
            <Link to="/" >비밀번호 찾기</Link>
            <LoginKakao/>

        </section>
    );
}