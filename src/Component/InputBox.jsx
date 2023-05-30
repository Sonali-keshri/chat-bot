import React, { useState } from 'react'
import { UseAuth } from '../context/AuthContext'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase';
import { MdSend } from 'react-icons/md'

const InputBox = () => {

  const { currentUser } = UseAuth()

  const [value, setValue] = useState("")

  const handleSendMesaage = async (e) => {
    e.preventDefault()

    if (value.trim() === "") {
      alert("Type something")
      return
    }
    try {
      const { uid, displayName, photoURL } = currentUser;
      await addDoc(collection(db, "messages"), {
        text: value,
        userName: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid
      })

    } catch (error) {
      console.log(error)
    }
    setValue("")
  }


  return (
    <div className='inputBox-container'>
      <form onSubmit={handleSendMesaage}>
        <input value={value} onChange={(e) => setValue(e.target.value)} placeholder='Type your message here' type="text" className='input-field' />
        <button type="submit" className='send-btn'><MdSend /></button>
      </form>
    </div>
  )
}

export default InputBox