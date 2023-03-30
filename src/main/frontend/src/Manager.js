import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./component/mananger/component/Header";
import Page1 from "./component/mananger/Page1";
import Page2 from "./component/mananger/Page2";

export default function Manager() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/manager1" element={<Page1 />} />
                <Route path="/manager2" element={<Page2/>} />
                {/* <Route path="/b" element={<Page3 />} /> */}
            </Routes>
        </BrowserRouter>
    );
}