import {Link} from "react-router-dom";

export default function two() {
    return (
        <section class="contents">


            <div class="selection">
                <div> <Link to="/hospital_reservation/2">좌표 지정</Link></div>
                <div><a href="#">지역 선택</a></div>
            </div>

            <br />
            <br />


            <table width="99%" height="100%">
                <tr>

                    <td width="45%">
                        <table class="b">
                            <tr>
                                <td>
                                    <div class="twobox2">
                                        <table class="edge sss tt" width="25%" height="90%">
                                            <tr>
                                                <td><a href="#">서울</a></td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">서울</a></td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">경기</a></td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">강원</a></td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">대전</a></td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">부산</a></td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">울산</a></td>
                                            </tr>

                                        </table>

                                        <table class="edge sss tt" width="65%" height="90%">
                                            <tr>
                                                <td>
                                                    <a href="#">asd</a>
                                                </td>
                                                <td>
                                                    <a href="#">asd</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#">asd</a>
                                                </td>
                                                <td>
                                                    <a href="#">asd</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#">asd</a>
                                                </td>
                                                <td>
                                                    <a href="#">asd</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#">asd</a>
                                                </td>
                                                <td>
                                                    <a href="#">asd</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#">asd</a>
                                                </td>
                                                <td>
                                                    <a href="#">asd</a>
                                                </td>
                                            </tr>

                                        </table>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>

                    <td width="10%" >

                    </td>



                    <td width="45%">
                        <table class="aaa">

                            <tr>
                                <td height="20%">
                                    <table>
                                        <div class="hospital-list">
                                            <div class="hs" style={{ marginLeft: "25px" }}>병원목록</div>
                                            <div style={{ marginLeft: "170px" }}><a href="#">가나다순/거리순</a></div>
                                        </div>
                                    </table>
                                </td>
                            </tr>

                            <tr>
                                <td height="80%">
                                    <table width="95%" height="100%" align="center">
                                        <tr>
                                            <td class="edge"><Link to="/hospital_information">OO병원<br/>주소</Link></td>
                                        </tr>
                                        <tr>
                                            <td class="edge">OO병원<br />주소</td>
                                        </tr>
                                        <tr>
                                            <td class="edge">OO병원<br />주소</td>
                                        </tr>
                                        <tr>
                                            <td class="edge">OO병원<br />주소</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>

                        </table>
                    </td>
                </tr>
            </table>


        </section>

    );
}

