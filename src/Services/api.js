import React from 'react'
import axios from 'axios'
const url="http://127.0.0.1:4000/users";
export const getUser=async (id)=>{
    id=id || ""
    return await axios.get(`${url}/${id}`)
 }

 export const postUser=async(user)=>{
     return await axios.post(url,user)
 }
const api = () => {
   

}

export default api