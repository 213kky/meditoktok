export default function HistoryTr({hosp, doc, date}) {
    return (
        <tr>
            <td>
                <div>{hosp}</div>
                <div>{doc}</div>
                <div>{date}</div>
            </td>
        </tr>
    );
}