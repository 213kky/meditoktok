import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function UserSignUp() {
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
    const [gender, setGender] = useState(0);
    const navigate = useNavigate();

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
            isAdmin: isAdmin,
            mailAgree: mailAgree,
            gender: gender,
        };
        const isFormValid = account.length > 0 && password.length > 0 && email.length > 0 && phoneNumber.length > 0 && name.length >0 && birth.length>0 && gender > 0;
        if(isFormValid){
        axios.post('/signup/user', formData)
            .then(response => {
                // console.log(response);
                alert(response.data);
                if(response.data!="이미 사용중인 아이디입니다."){
                navigate("/login");
                }
            })
            .catch(error => {
                console.error(error);
            });
        }else{
            alert("값을 모두 입력해주세요")
        }
    };

    useEffect(() => {
        if (passwordConfirm && password !== passwordConfirm) {
            setPasswordMismatch(true);
        } else {
            setPasswordMismatch(false);
        }
    }, [password, passwordConfirm]);

    return (
        <section className="contents">
            <h1>일반 사용자 회원가입</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>아이디</div>
                    <input type="text" value={account} onChange={(event) => setAccount(event.target.value)} />
                </div>
                <div>
                    <div>비밀번호</div>
                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <div>
                    <div>비밀번호 확인</div>
                    <input type="password" value={passwordConfirm} onChange={(event) => setPasswordConfirm(event.target.value)} />
                    {passwordMismatch && <p style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</p>}
                </div>
                <div>
                    <div>이름</div>
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
                </div>
                <div>
                    <div>생년월일</div>
                    <input type="date" value={birth} onChange={(event) => setBirth(event.target.value)}/>
                </div>
                <div>
                    <div>성별</div>
                    <select  onChange={(event) => setGender(event.target.value == "none" ? 0 :(event.target.value == 'male' ? 1 : 2))}>
                        <option value="none">선택하세요</option>
                        <option value="male">남성</option>
                        <option value="female">여성</option>
                    </select>
                </div>
                <div>
                    <div>휴대전화</div>
                    <input type="tel" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)}/>
                </div>
                <div>
                    <div>이메일</div>
                    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div>이메일 수신 동의
                    <input type="checkbox" checked={mailAgree} onChange={(event) => setMailAgree(event.target.checked)}/>
                </div>
                <input type="submit" value="가입" disabled={passwordMismatch}/>
            </form>
        </section>
    );
}