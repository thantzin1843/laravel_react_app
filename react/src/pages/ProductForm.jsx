import React, { useRef } from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";
import axios from 'axios'
function ProductForm() {
  const nameRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();
  const  CreateProduct =(e)=>{
    e.preventDefault();
    const payload = {
      'name':nameRef.current.value,
      'image':imageRef.current.files[0],
      'description':descriptionRef.current.value,
    }
    // const formData= new FormData();
    // formData.append('name', nameRef.current.value);
    // formData.append('description',descriptionRef.current.value);
    // formData.append('image', imageRef.current.files[0]);

    axios.post('http://127.0.0.1:8000/api/products',payload,{
      headers:{'Content-Type':"multipart/form-data"},
  })
    .then((res)=>{
      console.log(res)
    })
    .catch((e)=>{
      console.log(e)
    })

  nameRef.current.value = "";
  descriptionRef.current.value = "";
  imageRef.current.value = '';
  }

  return (
    <div className='my-5 flex justify-center'>
      <form onSubmit={CreateProduct} encType='multipart/form-data' className='bg-gray-300 p-10 rounded-xl'>
        <input ref={nameRef} className='border rounded-md p-2 mt-5 bg-gray-50 w-full  border-blue-500' type="text" name="name" placeholder='Product Name' /><br />
        <input ref={imageRef} className='border rounded-md p-2 mt-5 bg-gray-50  w-full border-blue-500' type="file" name="image" placeholder='Product Image' /><br />
        <input ref={descriptionRef} className='border rounded-md p-2 mt-5 bg-gray-50 w-full  border-blue-500' type="text" name="description" placeholder='Product Description' /><br />
        <button type='submit' className='border rounded-md p-2 mt-5 bg-green-500 text-white w-full  border-blue-500 flex justify-center items-center'><AiOutlinePlusCircle style={{fontSize:'30px',marginRight:'10px'}}/> Create Product</button>
      </form>
    </div>
  )
}

export default ProductForm