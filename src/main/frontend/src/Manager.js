import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./component/component/Header";
import Page1 from "./component/manager/Page1";
import Page2 from "./component/manager/Page2";
import React from "react";
import Page3 from "./component/manager/Page3";

export default function Manager(props) {
    return (
        <BrowserRouter>
            <Header  isLogin={props.isLogin} setIsLogin={props.setIsLogin} onToggleAdmin={props.onToggleAdmin}/>
            <Routes>
                <Route path="/" element={<Page1/>} />
                <Route path="/manager1" element={<Page1/>} />
                <Route path="/manager2" element={<Page2/>} />
                 <Route path="/manager3" element={<Page3 />} />
            </Routes>
        </BrowserRouter>
    );
}