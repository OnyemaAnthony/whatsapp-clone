import React, {useEffect, useState} from 'react';
import '../css/SidebarChat.css'
import {Avatar} from "@material-ui/core";
import db from "../firebase";
import firebase from "firebase";
import {Link} from "react-router-dom";

const SidebarChat = ({addNewChat, id , name}) => {
    const [seed, setSeed] = useState(0);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const createChat = () => {
        const roomName = prompt('Please enter a name for the chat');
        if (roomName) {
            db.collection('rooms').add({
                name:roomName,
                timestamp:firebase.firestore.FieldValue.serverTimestamp()
            });

        }
    }

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className='sidebarChat'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="sidebarChat_info">
                    <h2>{name}</h2>
                    <p>Last message...</p>
                </div>
            </div>
        </Link>

    ) : (
        <div onClick={createChat} className='sidebarChat'>
            <h2>Add new Chat</h2>
        </div>
    );
};

export default SidebarChat;