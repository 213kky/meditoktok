import DiseaseTr from "./DiseaseTr";

export default function DiseaseSearch() {
    return(
        <section className="contents">
            <div className="searchDiv">
                <input type="text" className="searchDis" placeholder="질병 검색"/>
                    <div className="searchIcon">검색</div>
            </div>
            <div className="tableDiv">
                <table className="super_table">
                    <DiseaseTr></DiseaseTr>
                    <DiseaseTr></DiseaseTr>
                    <DiseaseTr></DiseaseTr>
                    <DiseaseTr></DiseaseTr>
                </table>
            </div>

        </section>
    );
}