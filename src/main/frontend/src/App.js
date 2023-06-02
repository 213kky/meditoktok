import './App.css';
import User from "./User";
import Manager from "./Manager";
import {useEffect, useState} from "react";
import { NavermapsProvider } from 'react-naver-maps';
import {useCookies} from "react-cookie";

function App() {
    const [cookies, setCookie] = useCookies(['loginState']);
    // const handleToggleAdmin = () => {
    //     setIsAdmin(!isAdmin);
    //     console.log(isAdmin);
    // };
    useEffect(()=>{
        setCookie('loginState', { isLogin: false, isAdmin: false }, { path: '/' });
    },[]);

    useEffect(() => {
        if (!cookies.loginState) {
            setCookie('loginState', { isLogin: false, isAdmin: false }, { path: '/' });
        }
    }, [cookies.loginState, setCookie]);
    return (
        <NavermapsProvider
            ncpClientId='jfncs1dl99'
        >
            {cookies.loginState?.isAdmin ? <Manager isLogin={cookies.loginState?.isLogin}/> : <User isLogin={cookies.loginState?.isLogin}/>}
        </NavermapsProvider>
    );

}

export default App;
