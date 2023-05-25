// import React, {useState} from "react";
// import axios from "axios";
// import {Link, useNavigate} from "react-router-dom";
//
// export default function Test() {
//     const [id, setId] = useState(0);
//     const navigate = useNavigate();
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const formData = {
//             id: id
//         };
//         axios.post('/test11', formData)
//             .then(response => {
//                 // console.log(response);
//                 alert(response.data);
//                 // navigate("/");
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     }
//
//     return (
//         <section className="contents">
//
//             <h2>로그인</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
//                 </div>
//                 <button type="submit">로그인</button>
//             </form>
//
//         </section>
//     );
// }
// import React, {useEffect, useState} from "react";
// import axios from "axios";
// import {Link, useNavigate} from "react-router-dom";
//
// export default function Test() {
//     const [id, setId] = useState(0);
//     useEffect(()=>{
//         axios.get('/test/fe')
//         .then(response => {
//             // console.log(response);
//             setId(response.data);
//             // alert(response.data);
//             // navigate("/");
//         })
//         .catch(error => {
//             console.error(error);
//         })
//     },[])
//
//     return (
//         <>{id}</>
//     );
// }
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function Test() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if(loading){
            axios.get(`https://apis.data.go.kr/B551182/hospInfoServicev2/getHospBasisList?serviceKey=G3OZp5dYqrTm0I9gNRRu%2BXouEslD9Gs7F%2BYz9LUKT8%2F%2BJjRHdzSmmSwbLnJ7vR6znJD4hftgOK5ZZ%2FCE9iG3XA%3D%3D&pageNo=1&numOfRows=3&emdongNm=서울`)
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.error(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }


    },[])
    const render = () => {
        if (data === null) {
            return "로딩 중";
        }
        const items = data.response.body.items.item
        // return JSON.stringify(items);
        return items.map((item, index) => (
            <div key={index} style={{margin:'10px'}}>
                <Link
                    to={`/hospital_information/?yadmNm=${item.yadmNm}&addr=${item.addr}`}>
                    {item.yadmNm}<br/>{item.addr}<br/>{item.hospUrl}<br/>{item.telno}<br/>{item.XPos}<br/>{item.YPos}

                </Link>
             </div>

        ));
    }

    return (
        <section className="contents">{render()}</section>
    );
}