import './App.css';
import Sidebar from "./componets/Sidebar";
import Chat from "./componets/Chat";
import {BrowserRouter, Switch, Route} from "react-router-dom";


function App() {
    return (
        <div className="app">

            <div className="app_body">
                <BrowserRouter>
                    <Sidebar/>
                    <Switch>
                        <Route path='/rooms/:roomId'>
                            <Chat/>
                        </Route>
                        <Route path='/'>
                            <Chat/>
                        </Route>
                    </Switch>
                </BrowserRouter>

            </div>
        </div>
    );
}

export default App;
