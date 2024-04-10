import React, { useRef, useState } from 'react'
import { useContext } from 'react'
import { StateContext } from '../Context/ContextProvider'
import { Navigate,Link } from 'react-router-dom';
import axios from 'axios'
function Login() {
  const {token,setToken} = useContext(StateContext);
  if(token){
    return <Navigate to='/auth/products'/>
  }
  // handle validtion errors
  const [errors , setErrors ] = useState([]);
  const [vmessage,setVMessage] = useState('');
  // get data 
  const emailRef = useRef();
  const passwordRef = useRef();
  const Submit = (e) =>{
    e.preventDefault();
    const payload = {
      'email':emailRef.current.value,
      'password':passwordRef.current.value
    }
    // console.log(payload);
    axios.post('http://localhost:8000/api/login',payload)
    .then((res)=>{
      if(res.data.message!='Login success'){
        setVMessage(res.data.message);
      }else{
        setToken(res.data.token);
      }

    })
    .catch((e)=>{
      setErrors(e.response.data.errors);
    })
  }
  return (
      <div className='flex flex-col items-center justify-center w-100 ' style={{height:'100vh'}}>
        {vmessage ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        <svg class="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg><span class="font-medium">{vmessage}</span> 
        </div> : ""}
        <form className='text-center  w-1/3 p-3 bg-gradient-to-b from-blue-200 to-white rounded-md'>
          <h2 className='text-3xl m-5 font-bold font-mono'>Laravel-React App</h2>
          <input type="email" ref={emailRef} name="email" class="mt-3 w-full border border-blue-500 py-3 px-3 rounded-sm focus:outline-blue-700" placeholder="Email" /><br/>
          {errors['email'] ? <div className='text-red-600'>{errors['email']}</div> : ""}


          <input type="password" ref={passwordRef} name="password" class="mt-3 w-full border border-blue-500 py-3 px-3 rounded-sm focus:outline-blue-700" placeholder="Password" /><br/>
          {errors['password'] ? <div className='text-red-600'>{errors['password']}</div> : ""}

              <button onClick={Submit} type="submit" class=" mt-3 w-full px-1 py-3 border-blue-500y-3 bg-gradient-to-r from-blue-600 to-blue-900 text-white font-bold text-xl">Login</button>
              <div className='mt-3'>Create an account ? <Link to='/signup' className='text-blue-800'>Signup</Link></div>
            </form>
      </div>
  )
}

export default Login