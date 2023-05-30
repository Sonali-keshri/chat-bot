import React from 'react'
import { Navigate } from 'react-router-dom'
import { UseAuth } from "../context/AuthContext"

const PrivateRoute = ({children}) => {
  const {currentUser} = UseAuth();

    if(!currentUser){
       return  <Navigate to="/" replace={true}/>
    } 
  return children
}

export default PrivateRoute