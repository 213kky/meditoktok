import {useCookies} from "react-cookie";
import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


export default function Change() {
const [cookies] = useCookies(['memberInfo']);
    const cookieValue = cookies['memberInfo'];
    const [password, setPassword] = useState('');
        const [passwordConfirm, setPasswordConfirm] = useState('');
        const [passwordMismatch, setPasswordMismatch] = useState(false);
const [phoneNumber, setPhoneNumber] = useState('');
const [email, setEmail] = useState('');
    const navigate = useNavigate();
    console.log('cookieValueChange', cookieValue);

useEffect(() => {
        if (passwordConfirm && password !== passwordConfirm) {
            setPasswordMismatch(true);
        } else {
            setPasswordMismatch(false);
        }
    }, [password, passwordConfirm]);

const handleSubmit = (event) => {
        event.preventDefault();

        if (password !== passwordConfirm) {
                setPasswordMismatch(true);
                alert("비밀번호를 일치시켜주세요");
                return; // 수정이 이루어지지 않도록 함수 종료
            }

        // 회원 가입 폼을 제출하는 코드 작성
        const formData = {
                id: cookieValue.id,
            };

            if (password !== '') {
                formData.pw = password;
            } else {
                formData.pw = cookieValue.pw;
            }

            if (email !== '') {
                formData.email = email;
            } else {
                formData.email = cookieValue.email;
            }

            if (phoneNumber !== '') {
                formData.tel = phoneNumber;
            } else {
                formData.tel = cookieValue.phoneNumber;
            }
        const isFormValid = true;
        if(isFormValid){
        axios.post('/change/userInfo', formData)
            .then(response => {
                 console.log(response);
                alert(response.data);
                if(response.data!="이미 사용중인 아이디입니다."){
//                navigate("/login");
                }
            })
            .catch(error => {
                console.error(error);
            });
        }else{
            alert("값을 모두 입력해주세요");
        }
    };

    const handleCancel = () => {
        navigate("/");
      };




    return (
        <section class="contents">

            <table class="center" width="400" height="700" >
                <tr>
                    <td class="edge" height="13%" align="center">{cookieValue.name}님</td>
                </tr>

                <tr>
                    <td height="10%">
                        <table>
                            <tr>
                                <td height="100%">아이디</td>
                            </tr>
                            <tr>
                                <td height="100%"> {cookieValue.account}</td>
                            </tr>
                        </table>
                    </td>
                </tr>


                <tr>
                    <td height="10%">
                        <table height="100%" width="100%">
                            <tr>
                                <td height="20%">비밀번호 변경</td>
                            </tr>
                            <tr>
                                <td height="80%">
                                    <input class="c" input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="변경할 비밀번호를 입력하세요." />
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>


                <tr>
                    <td height="10%">
                        <table height="100%" width="100%">
                            <tr>
                                <td height="20%">비밀번호 재확인</td>
                            </tr>
                            <tr>
                                <td height="80%">
                                    <input class="c" input type="password" value={passwordConfirm} onChange={(event) => setPasswordConfirm(event.target.value)} placeholder="변경할 비밀번호를 입력하세요." />
                                    {passwordMismatch && <p style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</p>}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td height="10%">
                        <table>
                            <tr>
                                <td>현재 이메일</td>
                            </tr>
                            <tr>
                                <td> {cookieValue.email}</td>
                            </tr>
                        </table>
                    </td>
                </tr>


                <tr>
                    <td height="10%">
                        <table height="100%">
                            <tr>
                                <td height="20%">이메일 주소 변경</td>
                            </tr>
                            <tr>
                                <td height="80%" width="79%">
                                    <input class="c" input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="이메일 주소를 입력하세요." />
                                </td>
                                <td width="1%"></td>
                                <td class="edge" align="center" width="20%">인증번호 받기</td>
                            </tr>
                        </table>
                    </td>
                </tr>


                <tr>
                    <td height="15%">
                        <table height="100%" width="100%">
                            <tr style={{ marginBottom: "100px" }}>
                                <td height="10%">인증번호가 전송되었습니다.</td>
                            </tr>
                            <tr>
                                <td height="80%">
                                    <table height="100%" width="100%">
                                        <tr>
                                            <td width="79%" height="100%">
                                                <input class="c" id="doc-name" name="doc-name" type="text" placeholder="인증번호를 입력하세요." />
                                            </td>
                                            <td width="1%"></td>
                                            <td class="edge" align="center" width="20%">확인</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td height="10%">인증 완료되었습니다.</td>
                            </tr>
                        </table>
                    </td>
                </tr>


                <tr>
                    <td height="11%">
                        <table height="100%" width="100%">
                            <tr>
                                <td height="20%">휴대전화</td>
                            </tr>
                            <tr>
                                <td height="80%">
                                    <div class="c">
                                        <input class="c" input type="tel" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} placeholder="전화번호를 입력하세요." />
                                    </div>

                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td>
                        <table height="100%" width="100%">
                            <tr>
                                <td class="edge" align="center" width="35%"><button onClick={handleCancel}>취소</button></td>
                                <td width="30%"></td>
                                <td class="edge" align="center" width="35%"><button onClick={handleSubmit}>수정하기</button></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>


        </section>

    )
}