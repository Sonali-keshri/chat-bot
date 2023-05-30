import React, { useEffect, useState } from 'react'
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { db } from '../firebase';
import { UseAuth } from '../context/AuthContext';
import hello from "../assest/hello.png"

const ChatBox = () => {

  const [messages, setMessages] = useState([])

  const { currentUser } = UseAuth()

  
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50),
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages)
    });
    return () => unsubscribe;
  }, [])

  const getTimeAgo=(second)=> {
    const currentDate = new Date();
    const previousDate = new Date(second * 1000);
    
    const seconds = Math.floor((currentDate - previousDate) / 1000);
    
    if (seconds < 5) {
      return 'just now';
    } else if (seconds < 60) {
      return seconds + ' sec ago';
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      return minutes + ' min ago';
    } else if (seconds < 86400) {
      const hours = Math.floor(seconds / 3600);
      return hours + ' hour ago';
    } else {
      const days = Math.floor(seconds / 86400);
      return days + ' days ago';
    }
  }
 

  return (
    <div className='messageBox-conatiner' >
      {messages.length <= 0 ? (
        <div className='empty-chatBox'>
          <h1>Start your conversation</h1>
          <img src={hello} alt="hi-img" width="100%" height="100%" />
        </div>
      ) : (
        messages.map((message) => {
          const getTime = getTimeAgo(message.createdAt.seconds)
          return (
            <div className={`${message.uid === currentUser.uid ? "message-wrapper-end" : "message-wrapper"}`} key={message.id}>
              <div className={`${message.uid === currentUser.uid ? "single-message-div-reverse" : "single-message-div"}`} >
                <div className='avatar-container'>
                  <img src={message.avatar} alt="avatar" className='avatar' />
                </div>
                <div className='msg-container'>
                  <small className='small-text'>{message.userName}</small>
                  <p style={{ marginBottom: 0 }} className={`msgText ${message.uid === currentUser.uid ? "corner-left" : "corner-right"}`}>{message.text}</p>
                  <small className='small-text'> {getTime}</small>
                </div>
              </div>
            </div>
          )
        })

      )}
    </div>
  )
}

export default ChatBox