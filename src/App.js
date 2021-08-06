import './App.css';
import Sidebar from "./componets/Sidebar";
import Chat from "./componets/Chat";

function App() {
    return (
        <div className="app">

            <div className="app_body">

                <Sidebar/>

                <Chat/>
            </div>
        </div>
    );
}

export default App;
