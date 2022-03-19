import React from 'react'
import axios from 'axios'
const url="http://127.0.0.1:4000/users";
export const getUser=async ()=>{
    return await axios.get(url)
 }
const api = () => {
   
    
}

export default api