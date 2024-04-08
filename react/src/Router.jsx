import { createBrowserRouter } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import NotFound from "./components/NotFound"
import Index from "./pages/Index"
const router = createBrowserRouter([
    {
        path:'/dashboard',
        element:<Index/>
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