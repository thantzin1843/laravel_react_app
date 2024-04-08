import React from 'react'
import { useContext } from 'react';
import { StateContext } from '../Context/ContextProvider';
import { useRef } from 'react';
import {Navigate} from 'react-router-dom'

import axios from "axios";
function Signup() {
  const {token,setToken} = useContext(StateContext);
  if(token){
    return <Navigate to='/dashboard'/>
  }
  // get input values
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const cpassRef = useRef();
  const Submit = (e) =>{
    e.preventDefault();
    const payload = {
      name:nameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value,
    }
    // make post request
    axios.post('http://localhost:8000/api/signup',payload)
    .then((response)=>{
      setToken(response.data.token);
    })
    .catch((e)=>{
      console.log(e);
    })
    
  }
  return (
    <div className='flex flex-col items-center justify-center w-100 ' style={{height:'100vh'}}>
        <form onSubmit={Submit} className='text-center  w-1/3 p-3 bg-gradient-to-b from-blue-200 to-white rounded-md'>
        <h2 className='text-3xl m-5 font-bold font-mono'>Laravel-React App</h2>
          <input type="text" ref={nameRef} name="name" class="mt-3 w-full border border-blue-500 py-3 px-3 rounded-sm focus:outline-blue-700" placeholder="First Name" id=""/><br/>
          <input type="email" ref={emailRef} name="email" class="mt-3 w-full border border-blue-500 py-3 px-3 rounded-sm focus:outline-blue-700" placeholder="Last Name" id=""/><br/>
              <input type="password" ref={passwordRef} name="password" class="mt-3 w-full border border-blue-500 py-3 px-3 rounded-sm focus:outline-blue-700" placeholder="Password" id=""/><br/>
              <input type="password" ref={cpassRef} name="cpassword" class="mt-3 w-full border border-blue-500 py-3 px-3 rounded-sm focus:outline-blue-700" placeholder="Confirm Password" id=""/><br/>
              <button type="submit" class=" mt-3 w-full px-1 py-3 border-blue-500y-3 bg-gradient-to-r from-blue-600 to-blue-900 text-white font-bold text-xl  ">Signup</button>
            </form>
      </div>
  )
}

export default Signup