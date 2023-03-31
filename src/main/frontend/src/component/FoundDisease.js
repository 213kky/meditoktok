import head from './head.png';
import chest from './chest.png';
import stomach from './stomach.png';
import arm from './arm.png';

export default function FoundDisease() {
    return (
        <h2 style={{marginLeft: '140px', marginTop: '50px'}}>자주 찾는 증상
        <div className='diseaseList'>
            <div className='disease0'>
                <table className="FDTable">
                    <tr>
                        <td rowSpan='4'>
                            <img src={head} style={{width: '60px', height: '60px'}}></img>
                            <th>머리</th>
                        </td>
                        <td>두통</td>
                    </tr>
                    <tr>어지러움</tr>
                    <tr>건망증</tr>
                    <tr>만성 부비동염</tr>
                </table>
            </div>
            <div className='disease0'>
                <table className="FDTable">
                    <tr>
                        <td rowSpan='4'>
                            <img src={chest} style={{width: '60px', height: '60px'}}></img>
                            <th>가슴</th>
                        </td>
                        <td>기침</td>
                    </tr>
                    <tr>가래</tr>
                    <tr>천식</tr>
                    <tr>수면 무호흡</tr>
                </table>
            </div>
            <div className='disease0'>
                <table className="FDTable">
                    <tr>
                        <td rowSpan='4'>
                            <img src={stomach} style={{width: '60px', height: '60px'}}></img>
                            <th>배</th>
                        </td>
                        <td>구토</td>
                    </tr>
                    <tr>복부 통증</tr>
                    <tr>소화불량</tr>
                    <tr>복부팽만감</tr>
                </table>
            </div>
            <div className='disease0'>
                <table className="FDTable">
                    <tr>
                        <td rowSpan='4'>
                            <img src={arm} style={{width: '60px', height: '60px'}}></img>
                            <th>팔</th>
                        </td>
                        <td>어깨 통증</td>
                    </tr>
                    <tr>팔 통증</tr>
                    <tr>어깨 잡음</tr>
                    <tr>어깨 움직임 제한</tr>
                </table>
            </div>
        </div>
        </h2>
    );
}