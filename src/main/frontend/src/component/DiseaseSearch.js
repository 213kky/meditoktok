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
                    <DiseaseTr test={5441} test2={"염좌"}></DiseaseTr>
                    <DiseaseTr test={5466} test2={"천식"}></DiseaseTr>
                    <DiseaseTr test={5371} test2={"통풍"}></DiseaseTr>
                    <DiseaseTr test={5485} test2={"구내염"}></DiseaseTr>
                </table>
            </div>

        </section>
    );
}