import React from 'react'
import Navbar from '../components/Navbar'
import {Outlet,Navigate} from 'react-router-dom'
import { useContext } from 'react';
import { StateContext } from '../Context/ContextProvider';

function DefaultLayout() {
  const {token} = useContext(StateContext);
  if(!token){
      return <Navigate to='/login'/>
  }
  return (
    <div className='flex '>
        <Navbar/>
        <div className="right w-4/5">
            <div className='bg-gradient-to-b from-gray-500 font-bold text-xl to-gray-400 m-3 p-5 text-white rounded-md'>
                <div>Admin's Dashboard</div>
            </div>

        <Outlet/>
        </div>
    </div>
  )
}

export default DefaultLayout