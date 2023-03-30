import { Link } from "react-router-dom";
import test from './test.jpg';

export default function DiseaseResult() {
    return (
        <div>
            <div className="selectDisease">선택한 증상
                <div className="disease1">두통</div>
                <div className="disease2">목의 통증</div>
            </div>
            <div className="diseaseResult">
                <table className='ResultTable'>
                    <tr>
                        <td rowSpan='4'>
                            <img src={test} style={{width: '190px', height: '140px'}}></img>
                        </td>
                        <th className='ResultTableHeader'>
                            <Link to='/disease_information' className="link">감기</Link></th>
                    </tr>
                    <tr>
                        <td>관련질환</td>
                        <td>A</td>
                        <td>B</td>
                        <td>C</td>
                        <td>D</td>
                        <td>E</td>
                    </tr>
                    <tr>
                        <td>관련용어</td>
                        <td>A1</td>
                        <td>B1</td>
                        <td>C1</td>
                        <td>D1</td>
                        <td>E1</td>
                    </tr>
                    <tr>
                        <td>동의어</td>
                        <td>A2</td>
                        <td>B2</td>
                        <td>C2</td>
                        <td>D2</td>
                        <td>E2</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}