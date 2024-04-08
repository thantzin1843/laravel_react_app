import React from 'react'

function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center  text-gray-500 text-2xl ' style={{height:'100vh'}}>
      404 - Page Not Found
      <button className='text-sm rounded-md mt-5 px-3 py-1 text-white bg-gray-500'>Go back</button>
    </div>
  )
}

export default NotFound