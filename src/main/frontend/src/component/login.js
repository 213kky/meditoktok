import React, {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function Login() {
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            account: account,
            pw: password,
        };
        axios.post('/login', formData)
            .then(response => {
                // console.log(response);
                alert(response.data);
                navigate("/");
            })
            .catch(error => {
                console.error(error);
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
        </section>
    );
}