import React from 'react'
import { useContext } from 'react'
import { StateContext } from '../Context/ContextProvider'
import { Navigate } from 'react-router-dom';

function Login() {
  const {token} = useContext(StateContext);
  if(token){
    return <Navigate to='/dashboard'/>
  }
  return (
      <div className='flex flex-col items-center justify-center w-100 ' style={{height:'100vh'}}>
        <form className='text-center  w-1/3 p-3 bg-gradient-to-b from-blue-200 to-white rounded-md'>
          <h2 className='text-3xl m-5 font-bold font-mono'>Laravel-React App</h2>
          <input type="email" name="lname" class="mt-3 w-full border border-blue-500 py-3 px-3 rounded-sm focus:outline-blue-700" placeholder="Email" id=""/><br/>
              <input type="password" name="password" class="mt-3 w-full border border-blue-500 py-3 px-3 rounded-sm focus:outline-blue-700" placeholder="Password" id=""/><br/>
              
              <button type="submit" class=" mt-3 w-full px-1 py-3 border-blue-500y-3 bg-gradient-to-r from-blue-600 to-blue-900 text-white font-bold text-xl">Login</button>
            </form>
      </div>
  )
}

export default Login