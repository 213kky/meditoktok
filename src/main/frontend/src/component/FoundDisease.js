export default function FoundDisease() {
    return (
        <h3 className="foundDisease">자주 찾는 증상
        <div className='diseaseList'>
            <div className='disease'>
                <table className="FDTable">
                    <tr>
                        <th rowSpan='4' style={{width: '150px', textAlign: 'left', fontSize: '20px'}}>머리</th>
                        <td>두통</td>
                    </tr>
                    <tr>어지러움</tr>
                    <tr>건망증</tr>
                    <tr>편두통</tr>
                </table>
            </div>
            <div className='disease'>
                <table className="FDTable">
                    <tr>
                        <th rowSpan='4' style={{width: '150px', textAlign: 'left', fontSize: '20px'}}>가슴</th>
                        <td>기침</td>
                    </tr>
                    <tr>가래</tr>
                    <tr>가슴 통증</tr>
                    <tr>천식</tr>
                </table>
            </div>
            <div className='disease'>
                <table className="FDTable">
                    <tr>
                        <th rowSpan='4' style={{width: '150px', textAlign: 'left', fontSize: '20px'}}>배</th>
                        <td>구토</td>
                    </tr>
                    <tr>복부 통증</tr>
                    <tr>소화불량</tr>
                    <tr>복부팽만감</tr>
                </table>
            </div>
            <div className='disease'>
                <table className="FDTable">
                    <tr>
                        <th rowSpan='4' style={{width: '150px', textAlign: 'left', fontSize: '20px'}}>팔</th>
                        <td>어깨 통증</td>
                    </tr>
                    <tr>팔 통증</tr>
                    <tr>어깨 잡음</tr>
                    <tr>어깨 움직임 제한</tr>
                </table>
            </div>
        </div>
        </h3>
    );
}