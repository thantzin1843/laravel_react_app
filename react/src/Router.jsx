import { createBrowserRouter } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import NotFound from "./components/NotFound"
import Index from "./pages/Index"
import ProductForm from "./pages/ProductForm"
import DefaultLayout from "./pages/DefaultLayout"
import ProductDetail from "./pages/ProductDetail"
const router = createBrowserRouter([
    {
        path:'/auth',
        element:<DefaultLayout/>,
        children:[
            {
                path:'products',
                element:<Index/>
            },
            {
                path:'create/product',
                element:<ProductForm/>
            },
            {
                path:'product/detail',
                element:<ProductDetail/>
            }
        ]
    },
    
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/signup',
        element:<Signup/>
    },
    {
        path:'*',
        element:<NotFound/>
    },
    
])

export default router;