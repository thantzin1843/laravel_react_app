import React, { useRef } from 'react'
import { useContext } from 'react'
import { StateContext } from '../Context/ContextProvider'
import { Navigate,Link } from 'react-router-dom';
import axios from 'axios'
function Login() {
  const {token,setToken} = useContext(StateContext);
  if(token){
    return <Navigate to='/auth/products'/>
  }
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
      setToken(res.data.token);
    })
    .catch((e)=>{
      console.log(e);
    })
  }
  return (
      <div className='flex flex-col items-center justify-center w-100 ' style={{height:'100vh'}}>
        <form className='text-center  w-1/3 p-3 bg-gradient-to-b from-blue-200 to-white rounded-md'>
          <h2 className='text-3xl m-5 font-bold font-mono'>Laravel-React App</h2>
          <input type="email" ref={emailRef} name="email" class="mt-3 w-full border border-blue-500 py-3 px-3 rounded-sm focus:outline-blue-700" placeholder="Email" /><br/>
              <input type="password" ref={passwordRef} name="password" class="mt-3 w-full border border-blue-500 py-3 px-3 rounded-sm focus:outline-blue-700" placeholder="Password" /><br/>
              
              <button onClick={Submit} type="submit" class=" mt-3 w-full px-1 py-3 border-blue-500y-3 bg-gradient-to-r from-blue-600 to-blue-900 text-white font-bold text-xl">Login</button>
              <div className='mt-3'>Create an account ? <Link to='/signup' className='text-blue-800'>Signup</Link></div>
            </form>
      </div>
  )
}

export default Login