export default function NowTr({hosp, doc, date, onCancel}) {
    return (
        <tr>
            <td colSpan="3">
                <div>{hosp}</div>
                <div>{doc}</div>
                <div>{date}</div>
            </td>
            <td>
                <div style={{textAlign:"center", cursor:"pointer", float:"none"}} onClick={onCancel}>취소</div>
            </td>
        </tr>
    );
}