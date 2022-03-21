import React, { useEffect, useState } from 'react'
import { getUser } from '../Services/api'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
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
          <TableCell align="right">Id&nbsp;</TableCell>
          <TableCell align="right">Name&nbsp;</TableCell>
          <TableCell align="right">Phone</TableCell>
          <TableCell align="right">Edit&nbsp;</TableCell> <TableCell align="right">Delete</TableCell>
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
            <TableCell align="right"><Button  component={Link} to={`/edit/${item.id}`}>Edit</Button></TableCell>
            <TableCell align="right"><Button>Delete</Button></TableCell>

         </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default AllUsers