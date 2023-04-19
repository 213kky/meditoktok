import {useState} from "react";

export default function DTable(props) {

    const [a,setA] = useState(false);
    const [b,setB] = useState(false);
    return (
        <div className="DTable1">
            {props.test == 0 ?

                <table>
                    <tr>
                        <td><input type='checkbox' onClick={()=>setA(true)} checked={a}/>두통</td>
                        <td><input type='checkbox'/>강박증</td>
                        <td><input type='checkbox'/>건망증</td>
                        <td><input type='checkbox'/>고산병</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox'/>뇌출혈</td>
                        <td><input type='checkbox'/>어지러움</td>
                        <td><input type='checkbox'/>기억장애</td>
                        <td><input type='checkbox'/>무의식</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox'/>치매</td>
                        <td><input type='checkbox'/>코 옆과 입꼬리 주름</td>
                        <td><input type='checkbox'/>안면마비</td>
                        <td><input type='checkbox'/>코 옆과 입꼬리 주름ㄴ</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox'/>졸림</td>
                        <td><input type='checkbox'/>두피건조</td>
                        <td><input type='checkbox'/>안면통증</td>
                    </tr>
                </table> : <table>
                    <tr>
                        <td><input type='checkbox'  onClick={()=>setB(true)} checked={b}/>목의 통증</td>
                        <td><input type='checkbox'/>목소리 변화</td>
                        <td><input type='checkbox'/>경부 강직</td>
                        <td><input type='checkbox'/>목 주변 부종</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox'/>이물감</td>
                        <td><input type='checkbox'/>이중음성</td>
                        <td><input type='checkbox'/>성대 이상</td>
                        <td><input type='checkbox'/>후두염</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox'/>편도선 비대</td>
                        <td><input type='checkbox'/>인후염</td>
                        <td><input type='checkbox'/>후두부종</td>
                        <td><input type='checkbox'/>성대부종</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox'/>잦은 상기도 감염</td>
                        <td><input type='checkbox'/>코가 목뒤로 넘어감</td>
                        <td><input type='checkbox'/>삼키기 곤란</td>
                    </tr>
                </table>}
        </div>
    );
}