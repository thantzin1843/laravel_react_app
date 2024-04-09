import React from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";

function ProductForm() {
  return (
    <div className='my-5 flex justify-center'>
      <form action="" className='bg-gray-300 p-10 rounded-xl'>
        <input className='border rounded-md p-2 mt-5 bg-gray-50 w-full  border-blue-500' type="text" name="name" placeholder='Product Name' /><br />
        <input className='border rounded-md p-2 mt-5 bg-gray-50  w-full border-blue-500' type="file" name="image" placeholder='Product Image' /><br />
        <input className='border rounded-md p-2 mt-5 bg-gray-50 w-full  border-blue-500' type="text" name="description" placeholder='Product Description' /><br />
        <button className='border rounded-md p-2 mt-5 bg-green-500 text-white w-full  border-blue-500 flex justify-center items-center'><AiOutlinePlusCircle style={{fontSize:'30px',marginRight:'10px'}}/> Create Product</button>
      </form>
    </div>
  )
}

export default ProductForm