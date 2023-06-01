import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./component/component/Header";
import Page1 from "./component/manager/Page1";
import Page2 from "./component/manager/Page2";
import React, {useState, useEffect} from "react";
import Page3 from "./component/manager/Page3";
import {useCookies} from "react-cookie"
import axios from "axios";

export default function Manager(props) {
    const [hospName, setHospName] = useState('');
    const [originData, setOriginData] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['memberInfo']);
    const cookieValue = cookies['memberInfo'];



      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('/find/doctor', {
              params: {
                hosp: cookieValue.hospiId,
              },
            });
            setOriginData(response.data);
    
            console.log(response);
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchData();
      }, [cookieValue.hospiId]);
    
      

    return (
        <BrowserRouter>
            <Header  hospName={hospName} isLogin={props.isLogin}/>
            <Routes>
                <Route path="/" element={<Page1 setHospName={setHospName}/>} />
                <Route path="/manager1" element={<Page1 setHospName={setHospName}/>} />
                <Route path="/manager2" element={<Page2  originData={originData}/>} />
                 <Route path="/manager3" element={<Page3  originData={originData}/>} />
            </Routes>
        </BrowserRouter>
    );
}