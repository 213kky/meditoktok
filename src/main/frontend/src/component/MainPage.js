import DiseaseTable from "./DiseaseTable";
import FoundDisease from "./FoundDisease";

export default function SymptomSearch() {
    return (
        <section className="contents">
            <DiseaseTable />
            <FoundDisease />
        </section>
    );
}