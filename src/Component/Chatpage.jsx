import React, { useEffect } from 'react'
import ChatBox from './ChatBox'
import InputBox from './InputBox'
import {GrFormClose} from "react-icons/gr"
import {HiUserCircle} from "react-icons/hi"

const Chatpage = ({toggle, setToggle}) => {

   const hideChat=()=>{
    setToggle(false)
   }

    return (
        <div className='chat-container'>
            <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center", padding: ".4rem 1rem ", backgroundColor:"white"}}>
                <HiUserCircle size={25}/>
                <GrFormClose className="close-btn" size={30} onClick={hideChat}/>
            </div>
            <ChatBox />
            <InputBox />
        </div>
    )
}

export default Chatpage