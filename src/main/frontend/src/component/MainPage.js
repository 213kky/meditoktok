import DiseaseResultMain from "./DiseaseResultMain";
import DiseaseTable from "./DiseaseTable";
import FoundDisease from "./FoundDisease";
import SymptomReset from "./SymptomReset";

export default function SymptomSearch() {
    return (
        <section className="contents">
            <DiseaseTable />
            <SymptomReset />
            <DiseaseResultMain />
            <FoundDisease />
        </section>
    );
}