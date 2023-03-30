import { Link } from "react-router-dom";
import DTable from "./DTable";

export default function DiseaseTable() {

    return (
        <div className="DTable">
            <table>
                <colgroup>
                    <col width="8%" />
                    <col width="8%" />
                    <col width="8%" />
                    <col width="8%" />
                    <col width="8%" />
                    <col width="8%" />
                    <col width="8%" />
                    <col width="8%" />
                </colgroup>
                <tr>
                    <th><Link to='/001' className='link'>머리</Link></th>
                    <th><Link to='/002' className='link'>목</Link></th>
                    <th><Link to='/003' className='link'>가슴</Link></th>
                    <th><Link to='/004' className='link'>배</Link></th>
                    <th><Link to='/005' className='link'>등</Link></th>
                    <th><Link to='/006' className='link'>엉덩이</Link></th>
                    <th><Link to='/007' className='link'>다리</Link></th>
                    <th><Link to='/008' className='link'>그외</Link></th>
                </tr>
                <tr style={{height:"200px",}} valign={"top"}>
                    <td colSpan='8' >
                        <div style={{width: '790px',height: "200px", overflowY:"scroll",}}>
                            <DTable />
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
}