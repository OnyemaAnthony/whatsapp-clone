import React, {useEffect, useState} from 'react';
import '../css/Sidebar.css'
import {Avatar, IconButton} from "@material-ui/core";
import {Chat, DonutLarge, MoreVert, SearchOutlined} from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import db from "../firebase";
import {useStateValue} from "../StateProvider";

const Sidebar = () => {
    const [{user}, dispatch] = useStateValue();
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        db.collection('rooms').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    }, []);
    return (
        <div className='sidebar'>
            <div className="sidebar_header">
                <Avatar src={user?.photoURL}/>
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLarge/>
                    </IconButton>
                    <IconButton>
                        <Chat/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>


                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined/>
                    <input placeholder='Search or start ne chat'/>
                </div>

            </div>
            <div className="sidebar_chats">
                <SidebarChat addNewChat='yes'/>
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;