import './App.css';
import Header from "./component/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SymptomSearch from "./component/SymptomSearch";
import DiseaseSearch from "./component/DiseaseSearch";
import HospitalReservation from "./component/HospitalReservation";
import MyPage from "./component/MyPage";
import QuickMenu from "./component/QuickMenu"
import DiseaseInformation from "./component/DiseaseInformation";
import HospitalInformation from "./component/HospitalInformation";
import Two from "./component/two";
import Two1 from "./component/two1";
import Change from "./component/change";
import EmptyPage from "./component/EmptyPage";
import Sign from "./component/Sign";
import Manager from "./Manager";

function App() {

        return (
            <BrowserRouter>

                    <Header/>
                    <Routes>
                        <Route path="/" element={<SymptomSearch/>}/>
                        <Route path="/symptom_search" element={<SymptomSearch/>}/>
                        <Route path="/disease_search" element={<DiseaseSearch/>}/>
                        <Route path="/hospital_reservation" element={<HospitalReservation/>}/>
                        <Route path="/my_page" element={<MyPage/>}/>
                        <Route path="/disease_information" element={<DiseaseInformation/>}/>
                        <Route path="/hospital_information" element={<HospitalInformation/>}/>
                        <Route path="/hospital_reservation/1" element={<Two/>}/>
                        <Route path="/hospital_reservation/2" element={<Two1/>}/>
                        <Route path="/my_page/change" element={<Change/>}/>
                        <Route path="/sign" element={<Sign/>}/>
                        <Route path="/manager" element={<Manager/>}/>
                        <Route path="*" element={<EmptyPage/>}/>
                    </Routes>
                    <QuickMenu/>


            </BrowserRouter>
        );

}

export default App;
