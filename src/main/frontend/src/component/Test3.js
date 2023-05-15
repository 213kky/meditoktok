import {useState} from 'react';
import axios from 'axios';

const key = "%2Fzt1jmOZn0y5Q8ql8mxBIKRoXvyqetyRjCvZUNCV6OCXxnnYWFFZUnNcW5E2yCax4iZMPg%2FAbMM%2FpAw7%2BeYhtQ%3D%3D";
const basicUrl = 'https://apis.data.go.kr/B551182/MadmDtlInfoService2';
const Test3 = ()=>{
    const [data, setData] = useState(null);
    const onClick = () => {
    axios.get(`${basicUrl}/getEqpInfo2?serviceKey=${key}&pageNo=1&numOfRows=10&sidoCd=110000&sgguCd=110019&emdongNm=%EC%8B%A0%EB%82%B4%EB%8F%99&yadmNm=%EC%84%9C%EC%9A%B8%EC%9D%98%EB%A3%8C%EC%9B%90&zipCd=2010&clCd=11&dgsbjtCd=01&xPos=127.09854004628151&yPos=37.6132113197367&radius=3000`).then(response => {
        setData(response.data);
    });
    };
    return (<div>
    <div>
    <button onClick={onClick}>불러오기</button>
    </div>
    {data && <textarea rows={7} value = {JSON.stringify(data, null, 2)} readOnly ={true}/>}
    </div>
    );
};


//const Test3 = ()=>{
//
//    return (
//    );
//};




export default Test3;