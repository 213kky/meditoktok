import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./component/component/Header";
import Page1 from "./component/manager/Page1";
import Page2 from "./component/manager/Page2";
import React, {useState} from "react";
import Page3 from "./component/manager/Page3";

export default function Manager(props) {
    const [hospName, setHospName] = useState('');

    return (
        <BrowserRouter>
            <Header  hospName={hospName} isLogin={props.isLogin} setIsLogin={props.setIsLogin} setIsAdmin={props.setIsAdmin} onToggleAdmin={props.onToggleAdmin}/>
            <Routes>
                <Route path="/" element={<Page1 setHospName={setHospName}/>} />
                <Route path="/manager1" element={<Page1 setHospName={setHospName}/>} />
                <Route path="/manager2" element={<Page2/>} />
                 <Route path="/manager3" element={<Page3 />} />
            </Routes>
        </BrowserRouter>
    );
}