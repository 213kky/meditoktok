import DiseaseTable from "./DiseaseTable";
import DiseaseResult from "./DiseaseResult";
import SymptomReset from './SymptomReset';
import { Link } from "react-router-dom";
import FoundDisease from "./FoundDisease";

export default function SymptomSearch() {
    return (
        <section className="contents">
            <DiseaseTable />
            <SymptomReset />
            <DiseaseResult />
            <div class="selectPage">
                <div class="page1"><Link to='/013' className='link'>1</Link></div>
                <div class="page2"><Link to='/014' className='link'>2</Link></div>
                <div class="page3"><Link to='/015' className='link'>3</Link></div>
            </div>
            {/*<FoundDisease />*/}
        </section>
    );
}