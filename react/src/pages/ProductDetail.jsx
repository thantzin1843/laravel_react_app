import React from 'react'
import { useParams } from "react-router-dom";
import img from "../assets/Paracetamol500mg.jpg"
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';
function ProductDetail() {
  const {id} = useParams()
  const [product,setProduct] = useState({});
  // const [name,setName] = useState(product.name)
  // fetching data 
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/product/'+id)
    .then((res)=>{
      setProduct(res.data.product[0])
    })
    .catch((e)=>{
      console.log(e)
    })
  },[])

  return (
    <div className='flex flex-col items-center'>
        <div className='w-1/2'>
        <form action="">

        <div className='w-1/2 m-auto text-center'>
        <img src={`http://127.0.0.1:8000/storage/${product.image}`} style={{height:250,width:250}} alt="" className='mb-5'/>
        <input type="file" name="" id="" />
        </div>

        <div className='w-full'>
            <div className='font-bold mt-5' style={{fontSize:'20px'}}>Product Name</div>
            <input type="text" value={product.name} id="" className='w-2/3 p-3 bg-gray-100 border-2' onChange={(e)=>setProduct({...product,name:event.target.value})}/>
            <div className='font-bold mt-5' style={{fontSize:'20px'}}>Product Description</div>
            <textarea name="" className='bg-gray-100 p-3' cols="40" rows="10" value={product.description} onChange={(e)=>setProduct({...product,description:event.target.value})}>
            
            </textarea>
            
        </div>
<button className='p-3 bg-blue-500 rounded-md text-white font-bold my-3'>Update Product</button>
        </form>
        </div>
    </div>
  )
}

export default ProductDetail