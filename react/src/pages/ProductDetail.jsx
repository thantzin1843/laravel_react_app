import React, { useRef } from 'react'
import { useParams } from "react-router-dom";
import img from "../assets/Paracetamol500mg.jpg"
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';
function ProductDetail() {
  const {id} = useParams()
  const [product,setProduct] = useState({});
  const [message,setMessage] = useState('');
  const nameRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();

  // const [name,setName] = useState(product.name)
  // fetching data 
  const fetchProducts = ()=>{
    axios.get('http://127.0.0.1:8000/api/product/'+id)
    .then((res)=>{
      setProduct(res.data.product[0])
    })
    .catch((e)=>{
      console.log(e)
    })
  }
  useEffect(()=>{
    fetchProducts();
  },[])

  const Submit = (e) =>{
    e.preventDefault()
    const payload = {
      'name':nameRef.current.value,
      'image':imageRef.current.files[0],
      'description':descriptionRef.current.value,
    }
    console.log(payload);
    axios.post('http://127.0.0.1:8000/api/productupdate/'+id,payload,{
      headers:{"Content-Type":"multipart/form-data"}
    })
    .then((res)=>{
      setMessage(res.data.message);
      fetchProducts();
    })
    .catch((e)=>{
      console.log(e)
    })
  }
  return (
    <div className='flex flex-col items-center'>

{
  message ? 

  <div id="toast-success" class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
        <span class="sr-only">Check icon</span>
    </div>
    <div class="ms-3 text-sm font-normal">Updated Successfully!</div>
    <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
    </button>
</div>
  
  : ""
}

        <div className='w-1/2'>
          
        <form onSubmit={Submit} encType='multipart/form-data'>

        <div className='w-1/2 m-auto text-center'>
        <img src={`http://127.0.0.1:8000/storage/${product.image}`} style={{height:250,width:250}} alt="" className='mb-5'/>
        <input ref={imageRef} type="file" name="" id="" />
        </div>

        <div className='w-full'>
            <div className='font-bold mt-5' style={{fontSize:'20px'}}>Product Name</div>
            <input ref={nameRef} type="text" value={product.name} id="" className='w-2/3 p-3 bg-gray-100 border-2' onChange={(e)=>setProduct({...product,name:e.target.value})}/>
            <div className='font-bold mt-5' style={{fontSize:'20px'}}>Product Description</div>
            <textarea ref={descriptionRef} name="" className='bg-gray-100 p-3' cols="40" rows="10" value={product.description} onChange={(e)=>setProduct({...product,description:e.target.value})}>
            
            </textarea>
            
        </div>
<button className='p-3 bg-blue-500 rounded-md text-white font-bold my-3'>Update Product</button>
        </form>
        </div>
    </div>
  )
}

export default ProductDetail