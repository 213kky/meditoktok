import {Link} from "react-router-dom";

export default function HospitalReservation() {
    return(
        <section className="contents">
            <table width="99%" height="100%">
                <tr>
                    <td>
                        <div className="selection2">
                            <div><a href="#">좌표 지정</a></div>
                            <div><a href="#">지역 선택</a></div>
                        </div>
                        <br/><br/>
                    </td>

                    <td></td>

                    <td rowSpan="2" width="45%" height="100%">

                        <table className="b">

                            <tr>
                                <td height="14%">
                                    <table>
                                        <div className="hospital-list">
                                            <div className="hs" style={{marginLeft: "25px"}}>병원목록</div>
                                            <div style={{marginLeft: "170px"}}><a href="#">가나다순/거리순</a></div>
                                        </div>
                                    </table>
                                </td>
                            </tr>

                            <tr>
                                <td height="74%">
                                    <table width="95%" height="100%" align="center">
                                        <tr>
                                            <td className="edge">
                                                <Link to="/hospital_information">OO병원<br/>주소</Link>
                                                </td>
                                        </tr>
                                        <tr>
                                            <td className="edge">OO병원<br/>주소</td>
                                        </tr>
                                        <tr>
                                            <td className="edge">OO병원<br/>주소</td>
                                        </tr>
                                        <tr>
                                            <td className="edge">OO병원<br/>주소</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>

                            <tr>
                                <td height="12%">
                                    <div className="hospital-list2">
                                        <input className="c" id="doc-name" name="doc-name" type="text"
                                               placeholder="병원검색"/>
                                    </div>
                                </td>
                            </tr>

                        </table>

                    </td>
                </tr>

                <tr>

                    <td width="45%">
                        <table className="b">

                        </table>
                    </td>

                    <td width="10%">
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


                        <table height="80" width="50%">
                            <tr>
                                <td className="edge" align="center">+</td>
                            </tr>
                            <tr>
                                <td className="edge" align="center">-</td>
                            </tr>
                        </table>
                        <br/>
                    </td>


                </tr>
            </table>
        </section>
    );
}