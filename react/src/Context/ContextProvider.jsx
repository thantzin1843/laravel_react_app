import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const StateContext = createContext({
    user:null,
    token:null,
    setUser:()=>{},
    setToken:()=>{}
});

export const ContextProvider = ({children}) =>{
    const [user,setUser] = useState({});
    const [token,_setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
const setToken = (t) =>{
    _setToken(t);
    if(!token){
        localStorage.setItem('ACCESS_TOKEN',token);
    }else{
        localStorage.removeItem('ACCESS_TOKEN',token);
    }
}
    return (
        <StateContext.Provider value={{user,token,setUser,setToken}}>
            {children}
        </StateContext.Provider>
    )
}