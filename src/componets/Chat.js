import React, {useEffect, useState} from 'react';
import '../css/Chat.css'
import {Avatar, IconButton} from "@material-ui/core";
import {AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined} from "@material-ui/icons";
import {useParams} from  'react-router-dom'
import db from "../firebase";

const Chat = () => {
    const [seed, setSeed] = useState(0);
    const [input,setInput] = useState('');
    const [roomName,setRoomName]= useState('');
   const {roomId} = useParams();
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId])

    useEffect(()=>{
        console.log(`the room id is ${roomId}`);
      if(roomId){
          db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
              setRoomName(snapshot.data().name)
          ))
      }
    },[roomId]);
    const  sendMessage = (event)=>{
        event.preventDefault();

     setInput('');
    }
    return (
        <div className='chat'>


            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat_headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen at ..</p>
                </div>

                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>

            </div>

            <div className="chat_body">
                <p className={`chat_message chat_receiver `}>
                    <span className='chat_name'> Anthony</span>
                    Hey gus

                    <span className='chat_timestamp'>3:53pm</span>

                </p>

            </div>
            <div className="chat_footer">
                <InsertEmoticon/>
                <form >
                    <input onChange={event => setInput(event.target.value)} placeholder='Type a message' type="text"/>
                    <button onClick={sendMessage} type={"submit"}>Send message</button>
                </form>
                <Mic/>
            </div>
        </div>

    );
};

export default Chat;