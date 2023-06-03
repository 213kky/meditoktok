import {Link} from "react-router-dom";

export default function DiseaseTr({disease}) {
    return (
        <tr>
            <td valign={"top"}>
                <div className="sub_table">
                    <Link to={`/disease_information?cntntsSn=${disease.id}&department=${disease.department}&code=${disease.code}`}>
                        <div style={{margin: "10px", fontSize:"19px", textAlign:"center"}}>{disease.name}</div>
                        <div style={{padding: "10px"}}>
                            <span>진료과 : </span>
                            <span>{disease.department}</span>
                        </div>
                        <div style={{padding: "10px"}}>
                            <span>증상 : </span>
                            <span>{disease.symptom}</span>
                        </div>
                    </Link>
                </div>
            </td>
        </tr>
    );
};