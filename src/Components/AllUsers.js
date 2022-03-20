import React, { useEffect, useState } from 'react'
import { getUser } from '../Services/api'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const AllUsers = () => {
  const [user,setUsers]=useState([])


    const getAllUsers=async()=>{
      const response= await  getUser()
      console.log(response.data)
      setUsers(response.data)
    }
    useEffect(()=>{
        getAllUsers()
    },[])//component did mount
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>User Name</TableCell>
          <TableCell align="right">Email</TableCell>
          <TableCell align="right">Id&nbsp;(g)</TableCell>
          <TableCell align="right">Name&nbsp;(g)</TableCell>
          <TableCell align="right">Phone&nbsp;(g)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      
        {user.map((item) => (
            console.log(user,"user"),
          <TableRow
            key={item.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {item.username}
            </TableCell>
            <TableCell align="right">{item.email}</TableCell>
            <TableCell align="right">{item.id}</TableCell>
            <TableCell align="right">{item.name}</TableCell>
            <TableCell align="right">{item.phone}</TableCell>

         </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default AllUsers