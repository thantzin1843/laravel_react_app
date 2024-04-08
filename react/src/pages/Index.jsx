import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { StateContext } from '../Context/ContextProvider'
import { Navigate } from 'react-router-dom';
import axios from 'axios'
function Index() {
    const {token} = useContext(StateContext);
    if(!token){
        return <Navigate to='/login'/>
    }

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
    <div className='flex '>
        <div className="text-white left bg-gray-500 w-1/5 " style={{height:'100vh'}}>
            <div className='text-3xl text-center py-10 '>Logo</div>
            <div className='text-center '>
                <div className='mt-3 p-3  text-md'><a href="">Home</a></div>
                <div className='mt-3 p-3 text-md active'><a href="">About</a></div>
                <div className='mt-3 p-3 text-md'><a href="">Users</a></div>
                <div className='mt-3 p-3 text-md'><a href="" className='bg-white text-black px-5 py-1 rounded-md'>Logout</a></div>
            </div>
        </div>
        <div className="right w-4/5">
            <div className='bg-gradient-to-b from-gray-500 font-bold text-xl to-gray-400 m-3 p-5 text-white rounded-md'>
                <div>Admin's Dashboard</div>
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
    </div>
  )
}

export default Index