export default function Change() {
    return (
        <section class="contents">

            <table class="center" width="400" height="700" >
                <tr>
                    <td class="edge" height="13%" align="center">OOO님</td>
                </tr>

                <tr>
                    <td height="10%">
                        <table>
                            <tr>
                                <td height="100%">아이디</td>
                            </tr>
                            <tr>
                                <td height="100%"> abc123</td>
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
                                    <input class="c" id="doc-name" name="doc-name" type="text" placeholder="변경할 비밀번호를 입력하세요." />
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
                                    <input class="c" id="doc-name" name="doc-name" type="text" placeholder="변경할 비밀번호를 입력하세요." />
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
                                <td> abc123@naver.com</td>
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
                                    <input class="c" id="doc-name" name="doc-name" type="text" placeholder="이메일 주소를 입력하세요." />
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
                                        <input class="c" id="tel" name="tel" type="tel" placeholder="전화번호를 입력하세요." />
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
                                <td class="edge" align="center" width="35%">취소</td>
                                <td width="30%"></td>
                                <td class="edge" align="center" width="35%">수정하기</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>


        </section>

    )
}