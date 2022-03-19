import React, { useEffect } from 'react'
import { getUser } from '../Services/api'

const AllUsers = () => {

    const getAllUsers=async()=>{
      const response= await  getUser()
      console.log(response.data)
    }
    useEffect(()=>{
        getAllUsers()
    },[])
  return (
    <div>Sayem</div>
  )
}

export default AllUsers