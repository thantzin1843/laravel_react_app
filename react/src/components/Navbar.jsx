import React from 'react'
import { Link,useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation();
    const {pathname}= location;
  return (
    <div className="text-white left bg-gray-500 w-1/5 " style={{height:'100vh'}}>
            <div className='text-3xl text-center py-10 '>Logo</div>
            <div className='text-center '>
                <div className={pathname=='/auth/products'?'mt-3 p-3  text-md active':''} ><Link to='/auth/products'>Products</Link></div>
                <div className='mt-3 p-3 text-md'><button onClick={()=>{
                  localStorage.removeItem('ACCESS_TOKEN')
                  window.location.reload();
                }} className='bg-white text-black px-5 py-1 rounded-md'>Logout</button></div>
            </div>
    </div>
  )
}

export default Navbar