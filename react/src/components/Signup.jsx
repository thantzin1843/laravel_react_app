import React, { useEffect } from 'react'
import { useContext,useState } from 'react';
import { StateContext } from '../Context/ContextProvider';
import { useRef } from 'react';
import {Navigate,Link} from 'react-router-dom'

import axios from "axios";
function Signup() {
  const {token,setToken} = useContext(StateContext);
 
  if(token){
    return <Navigate to='/auth/products'/>
  }
  const [errors,setErrors] = useState([]);
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
      cpass:cpassRef.current.value,
    }

    // make post request
    axios.post('http://localhost:8000/api/signup',payload)
    .then((response)=>{
      setToken(response.data.token);
    })
    .catch((e)=>{
      if(e.response.status==422){
        // console.log(e.response.data.errors['email'])
        setErrors(e.response.data.errors);
      }
    })
    
  
  }
  return (
    <div className='flex flex-col items-center justify-center w-100 ' style={{height:'100vh'}}>
        <form onSubmit={Submit} className='text-center  w-1/3 p-3 bg-gradient-to-b from-blue-200 to-white rounded-md'>
        <h2 className='text-3xl m-5 font-bold font-mono'>Laravel-React App</h2>
          <input type="text" ref={nameRef} name="name" class="mt-3 w-full border border-blue-500 py-3 px-3 rounded-sm focus:outline-blue-700" placeholder="First Name" id=""/><br/>
          {errors['name'] ? <div className='text-red-600'><svg class="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>{errors['name']}</div> : ""}

          <input type="email" ref={emailRef} name="email" class="mt-3 w-full border border-blue-500 py-3 px-3 rounded-sm focus:outline-blue-700" placeholder="Last Name" id=""/><br/>
          {errors['email'] ? <div className='text-red-600'><svg class="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>{errors['email']}</div> : ""}

          <input type="password" ref={passwordRef} name="password" class="mt-3 w-full border border-blue-500 py-3 px-3 rounded-sm focus:outline-blue-700" placeholder="Password" id=""/><br/>
          {errors['password'] ? <div className='text-red-600'><svg class="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>{errors['password']}</div> : ""}

          <input type="password" ref={cpassRef} name="cpassword" class="mt-3 w-full border border-blue-500 py-3 px-3 rounded-sm focus:outline-blue-700" placeholder="Confirm Password" id=""/><br/>
          {errors['cpass'] ? <div className='text-red-600'><svg class="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>{errors['cpass']}</div> : ""}

          <button type="submit" class=" mt-3 w-full px-1 py-3 border-blue-500y-3 bg-gradient-to-r from-blue-600 to-blue-900 text-white font-bold text-xl  ">Signup</button>
          <div className='mt-3'>Already have an account ? <Link className='text-blue-800' to='/login'>Login</Link></div>
          </form>
      </div>
  )
}

export default Signup