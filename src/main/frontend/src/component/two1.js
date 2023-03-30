import {Link} from "react-router-dom";

export default function Two1() {

    return (
        <section class="contents">


            <div class="selection">
                <div><a href="#">좌표 지정</a></div>
                <div>
                <Link to="/hospital_reservation/1">지역 선택</Link></div>
            </div>

            <br />
            <br />


            <table width="99%" height="100%">
                <tr>

                    <td width="45%">
                        <table class="b">

                        </table>
                    </td>

                    <td width="10%" >
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


                        <table height="20%" width="50%">
                            <tr>
                                <td class="edge" align="center">+</td>
                            </tr>
                            <tr>
                                <td class="edge" align="center">-</td>
                            </tr>
                        </table>
                        <br />
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

    )
}
