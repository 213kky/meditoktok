import { Link } from "react-router-dom";

export default function DiseaseSearch() {
    return (
        <div>
            <div className="diseaseSearchFrame">
                <div className="diseaseSearch">증상 검색
                    <input className="comment2" placeholder="증상을 입력해주세요." />
                    <div className="search">
                        <Link to='/009' className="link">검색</Link></div></div>
                <div className="reset"><Link to='/' className="link">선택 초기화</Link></div>
                <div className="complete"><Link to='/' className="link">선택 완료</Link></div>
            </div>
            <div className='nothing'>검색결과가 없습니다.</div>
        </div>
    );
}