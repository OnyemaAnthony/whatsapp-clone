import React, {useEffect, useState} from 'react';
import '../css/Chat.css'
import {Avatar, IconButton} from "@material-ui/core";
import {AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined} from "@material-ui/icons";
import {useParams} from  'react-router-dom'
import db from "../firebase";
import {useStateValue} from "../StateProvider";

const Chat = () => {
    const [seed, setSeed] = useState(0);
    const [input,setInput] = useState('');
    const [roomName,setRoomName]= useState('');
    const [messages, setMessages] = useState([]);
   const {roomId} = useParams();
    const [{user}, dispatch] = useStateValue();
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId])

    useEffect(()=>{
      if(roomId){
          db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
              setRoomName(snapshot.data().name)
          ));
          db.collection('rooms').doc(roomId)
              .collection('messages')
              .orderBy('timestamp','asc')
              .onSnapshot(snapshot =>(
                  setMessages(snapshot.docs.map(doc=>doc.data()))
              ) );
      }
    },[roomId]);
    const  sendMessage = (event)=>{
        event.preventDefault();

        db.collection('rooms').doc(roomId)
            .collection('messages').add({
            messages:input,

        });

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
                {messages.map(message=>(
                    <p className={`chat_message chat_receiver `}>
                        <span className='chat_name'>{message.name}</span>{message}

                        <span className='chat_timestamp'>{new Date(message.timestamp.toDate()).toUTCString()}</span>

                    </p>
                ))}


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