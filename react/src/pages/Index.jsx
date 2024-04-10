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
    // delete product
    const Delete = (id) =>{
        const remainingProducts = products.filter((p)=>{
            return p.id != id;
        });
        setProducts(remainingProducts);
        axios.get('http://127.0.0.1:8000/api/product/delete/'+id)
        .then((res)=>{
            console.log(res);
        })
        .catch((e)=>{
            console.log(e);
        })
    }
    return (
    <div>
        <div className=''>
        <div className='leftSection mx-3 mt-5'>
        <Link to='/auth/create/product' className='bg-gray-800 text-white p-3 rounded-md hover:bg-gray-700'>Create Product</Link>
        
        </div>
        </div>
            <div className='mx-3 my-7'>
            <table className='w-full'>
                <tr className='bg-blue-300'>
                <th className='p-3'>id</th>
                <th className='p-3'>Image</th>
                <th className='p-3'>Name</th>
                <th className='p-3'>Description</th>
                <th className='p-3'>Operations</th>
                </tr>

                {
                    products.map((p)=>{
                        return (
                <tr key={p.id} className='bg-blue-100 border-b-blue-300 border'>
                <td className='p-3 text-center'>{p.id}</td>
                <td className='p-3 text-center'>
                    <img src={`http://127.0.0.1:8000/storage/${p.image}`} style={{width:100,height:100,margin:'auto'}} />
                </td>
                <td className='p-3 text-center'>{p.name}</td>
                <td className='p-3 text-center'>{p.description}</td>
                <td className='p-3 text-center'>
                    <button onClick={()=>Delete(p.id)} className='bg-red-600 my-3 mx-2 p-2 rounded-md'>Delete</button>
                    <Link to={`/auth/product/detail/`+p.id} className='bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700'>Edit</Link>
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