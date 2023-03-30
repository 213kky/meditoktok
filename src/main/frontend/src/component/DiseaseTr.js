import {Link} from "react-router-dom";

export default function DiseaseTr() {
    return (
        <tr>
            <td valign={"top"}>
                <Link to="/disease_information">
                    <table className="sub_table">
                        <colgroup>
                            <col width="20%"/>
                            <col width="5%"/>
                            <col width="20%"/>
                            <col width="55%"/>
                        </colgroup>
                        <tr>
                            <td rowSpan="4">
                                <div className="disease_image">질병 사진</div>
                            </td>
                            <td colSpan="2">간염</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>관련질환</td>
                            <td>A B C D E</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>관련용어</td>
                            <td>A1 B1 C1 D1 E1</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>동의어</td>
                            <td>A2 B2 C2 D2 E2</td>
                        </tr>
                    </table>
                </Link>
            </td>
        </tr>
    );
};