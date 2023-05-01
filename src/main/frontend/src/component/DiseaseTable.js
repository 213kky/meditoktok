import { Link } from "react-router-dom";
import DTable from "./DTable";
import {useState} from "react";

export default function DiseaseTable() {
    const [test, setTest] = useState(0);

    const isTest = (t) => {

        return t===test;
    }
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
                    <th onClick={()=>setTest(0)} className={`${isTest(0) ?  'test': ''}`}>머리</th>
                    <th onClick={()=>setTest(1)} className={`${isTest(1) ?  'test': ''}`}>목</th>
                    <th onClick={()=>setTest(2)} className={`${isTest(2) ?  'test': ''}`}>가슴</th>
                    <th onClick={()=>setTest(3)} className={`${isTest(3) ?  'test': ''}`}>배</th>
                    <th><Link to='/005' className='link'>등</Link></th>
                    <th><Link to='/006' className='link'>엉덩이</Link></th>
                    <th><Link to='/007' className='link'>다리</Link></th>
                    <th><Link to='/008' className='link'>그외</Link></th>
                </tr>
                <tr style={{height:"200px",}} valign={"top"}>
                    <td colSpan='8' >
                        <div style={{width: '790px',height: "200px", overflowY:"scroll",}}>
                            <DTable test={test} />
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
}