import React from 'react'
import img from "../assets/Paracetamol500mg.jpg"
function ProductDetail() {
  return (
    <div className='flex flex-col items-center'>
        <div className='w-1/2'>
        <div className='w-1/2 m-auto text-center'>
        <img src={img} alt="" className='w-full'/>
        </div>

        <div >
            <div className='font-bold mt-5' style={{fontSize:'20px'}}>Product Name</div>
            <div>Samsumg A12</div>
            <div className='font-bold mt-5' style={{fontSize:'20px'}}>Product Description</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsam quod hic fugiat? Laborum, praesentium eos porro libero excepturi iure modi. Aut animi eligendi optio distinctio reprehenderit, maxime cum sit.</div>
        </div>
        </div>
    </div>
  )
}

export default ProductDetail