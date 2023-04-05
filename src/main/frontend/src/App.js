import './App.css';
import User from "./User";
import Manager from "./Manager";

function App() {
        const isAdmin = true;
        return (
            <div>
                    {isAdmin ? <Manager /> : <User />}
            </div>
        );

}

export default App;
