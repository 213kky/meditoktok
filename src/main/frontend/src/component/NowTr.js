export default function NowTr({hosp, doc, date}) {
    return (
        <tr>
            <td colSpan="3">
                <div>{hosp}</div>
                <div>{doc}</div>
                <div>{date}</div>
            </td>
            <td>
                취소
            </td>
        </tr>
    );
}