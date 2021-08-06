import React, {useEffect, useState} from 'react';
import '../css/SidebarChat.css'
import {Avatar} from "@material-ui/core";
import {db} from "../firebase";


const SidebarChat = ({addNewChat}) => {
    const [seed, setSeed] = useState(0);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const createChat = () => {
        const roomName = prompt('Please enter a name for the chat');
        if (roomName) {
            db.collection('rooms').orderBy('timestamp','desc')
                .onSnapshot(snapshot => {

                });
            //create a room in a database
        }
    }

    return !addNewChat ? (
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat_info">
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className='sidebarChat'>
            <h2>Add new Chat</h2>
        </div>
    );
};

export default SidebarChat;