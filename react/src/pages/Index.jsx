import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom';
import axios from 'axios'
function Index() {
    // fetch data
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/products')
        .then((res)=>{
            setProducts(res.data.products);
        })
        .catch((e)=>{
            console.log(e);
        })
    },[])
    return (
    <div>
        <div className=''>
        <div className='leftSection mx-3 mt-5'>
        <Link to='/auth/create/product' className='bg-gray-800 text-white p-3 rounded-md hover:bg-gray-700'>Create Product</Link>
        <Link to='/auth/product/detail' className='bg-gray-800 text-white p-3 rounded-md hover:bg-gray-700'>Detail Product</Link>
        </div>
        </div>
            <div className='mx-3 my-7'>
            <table className='w-full'>
                <tr className='bg-blue-300'>
                <th className='p-3'>id</th>
                <th className='p-3'>Name</th>
                <th className='p-3'>Email</th>
                <th className='p-3'>Operations</th>
                </tr>

                {
                    products.map((p)=>{
                        return (
                <tr className='bg-blue-100 border-b-blue-300 border'>
                <td className='p-3 text-center'>{p.id}</td>
                <td className='p-3 text-center'>{p.name}</td>
                <td className='p-3 text-center'>{p.description}</td>
                <td className='p-3 text-center'>
                    <a href="" className='bg-red-600 my-3 p-2 rounded-md'>Delete</a>
                    <a href="" className='bg-black ms-3 p-2 rounded-md text-white'>Edit</a>
                </td>
                </tr>
                        )
                    })
                }  
            </table>
            </div>
    </div>
  )
}

export default Index