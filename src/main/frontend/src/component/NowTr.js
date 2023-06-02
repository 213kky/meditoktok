export default function NowTr({hosp, doc, date, onCancel}) {
    return (
        <tr>
            <td colSpan="3">
                <div>{hosp}</div>
                <div>{doc}</div>
                <div>{date}</div>
            </td>
            <td>
                <button onClick={onCancel}>취소</button>
            </td>
        </tr>
    );
}