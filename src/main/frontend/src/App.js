import './App.css';
import User from "./User";
import Manager from "./Manager";
import {useState} from "react";
import { NavermapsProvider } from 'react-naver-maps';

function App() {
//     const isAdmin = true;
    const [isAdmin, setIsAdmin] = useState(false);

    const handleToggleAdmin = () => {
        setIsAdmin(!isAdmin);
        console.log(isAdmin);
    };

    return (
        <NavermapsProvider
            ncpClientId='jfncs1dl99'
        >
            {isAdmin ? <Manager onToggleAdmin={handleToggleAdmin}/> : <User onToggleAdmin={handleToggleAdmin}/>}
        </NavermapsProvider>
    );

}

export default App;
