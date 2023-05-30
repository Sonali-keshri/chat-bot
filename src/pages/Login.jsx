import "../App.css"
import React, { useEffect } from 'react'
import { UseAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

const Login = () => {

  const navigate = useNavigate()
  const {currentUser,signInWithGoogle} = UseAuth();
  console.log(currentUser)

  // Handle Login functionality
  const handleLogin =async ()=>{
    try {
      await signInWithGoogle() 
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    if(currentUser){
      navigate("/chat")
    }
  },[currentUser])


  return (
    <div className='login-container'>
        <div className='login-container-div'>
            <h1>Hello There👋</h1>
            <p>Join the conversation, meet new people, and make connections in one share room</p>
            <button onClick={handleLogin} className="btn">LOGIN WITH GOOGLE</button>
        </div>
    </div>
  )
}

export default Login