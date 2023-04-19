import './App.css';
import User from "./User";
import Manager from "./Manager";
import {useState} from "react";

function App() {
    // const isAdmin = false;
    const [isAdmin, setIsAdmin] = useState(false);

    const handleToggleAdmin = () => {
        setIsAdmin(!isAdmin);
        console.log(isAdmin);
    };

    return (
        <div>
            {isAdmin ? <Manager onToggleAdmin={handleToggleAdmin}/> : <User onToggleAdmin={handleToggleAdmin}/>}
        </div>
    );

}

export default App;
