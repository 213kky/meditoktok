import './App.css';
import User from "./User";
import Manager from "./Manager";

function App() {
        const isAdmin = false;
        return (
            <div>
                    {isAdmin ? <Manager /> : <User />}
            </div>
        );

}

export default App;
