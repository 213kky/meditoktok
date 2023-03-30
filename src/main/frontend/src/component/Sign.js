import {Link} from "react-router-dom";

export default function Sign() {
    return(
        <section className="contents">
            <div>
            <Link to="/"><h1>사용자</h1></Link></div>
            <div>
            <Link to="/manager" ><h1>관리자</h1></Link></div>
        </section>
    );
}