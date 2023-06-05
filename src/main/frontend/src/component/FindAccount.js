import React, {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function FindAccount() {
    const [name, setName] = useState('');
    const [birth, setBirth] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            name: name,
            birth: birth,
            email: email
        };
        axios.post('/findAccount', formData)
            .then(response => {
                // console.log(response);
                alert(response.data);
                if(response.data!="정보에 해당하는 아이디가 없습니다."){
                    navigate("/login");
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <section className="contents">

            <h2>아이디 찾기</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>이름:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label>생년월일:</label>
                    <input type="date" value={birth} onChange={(e) => setBirth(e.target.value)}/>
                </div>
                <div>
                    <label>이메일:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <button type="submit">아이디 찾기</button>
            </form>

        </section>
    );
}