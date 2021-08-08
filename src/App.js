import './App.css';
import Sidebar from "./componets/Sidebar";
import Chat from "./componets/Chat";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {useState} from "react";
import Login from "./componets/Login";


function App() {
    const [user,setUser]= useState(null);
    return (
        <div className="app">
            {!user ?(
             <Login/>
            ):(
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
            )}

        </div>
    );
}

export default App;
