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
import Two from "./component/Two";
import Change from "./component/change";
import EmptyPage from "./component/EmptyPage";
import Login from "./component/login";
import Signup from "./component/SignUp";
import MainPage from "./component/MainPage";
import UserSignUp from "./component/UserSignUp";
import ManagerSignUp from "./component/ManagerSignUp";
import FindAccount from "./component/FindAccount";
import Test from "./component/Test";
import React, {Suspense} from "react";
import LoginKakao from './component/LoginKakao';
import DiseaseTable from "./component/DiseaseTable";
import SymptomReset from "./component/SymptomReset";
import DiseaseResultMain from "./component/DiseaseResultMain";
import FoundDisease from "./component/FoundDisease";

function User() {

    return (
        <BrowserRouter>

            <Header/>
            <Suspense fallback={<section className="contents">
                <h2>Loading...</h2>
            </section>}>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/symptom_search" element={<SymptomSearch/>}/>
                    <Route path="/disease_search" element={<DiseaseSearch/>}/>
                    <Route path="/hospital_reservation/0" element={<HospitalReservation/>}/>
                    <Route path="/my_page" element={<MyPage/>}/>
                    <Route path="/disease_information" element={<DiseaseInformation/>}/>
                    <Route path="/hospital_information" element={<HospitalInformation/>}/>
                    <Route path="/hospital_reservation/1" element={<Two/>}/>
                    <Route path="/my_page/change" element={<Change/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/signup/user" element={<UserSignUp/>}/>
                    <Route path="/signup/manager" element={<ManagerSignUp/>}/>
                    <Route path="/findAccount" element={<FindAccount/>}/>
                    <Route path="/test11" element={<Test/>}/>
                    <Route path="/callback" element={<LoginKakao/>}/>

                    {/*<Route path="*" element={<EmptyPage/>}/>*/}
                </Routes>
            </Suspense>
            <QuickMenu/>


        </BrowserRouter>
    );

}

export default User;
