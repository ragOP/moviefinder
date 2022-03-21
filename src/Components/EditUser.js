import { FormControl, FormGroup, InputLabel,Input, Button, Typography, } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React,{useEffect, useState} from 'react'
import { getUser, postUser } from '../Services/api';
import { useNavigate,useParams } from 'react-router-dom';
const useStyle=makeStyles({
  container:{
      width:'50%',
      margin:'5% 0 0 25%',
      '& > *': {
        marginTop: 20
    }
  }
})

const initialValues={
name:"",
sername:"",
email:"",
phone:""

}

const EditUser = () => {
  const [user,setUsers]=useState(initialValues);
  const {name,username,email,phone}=user
  const {id}=useParams()
  const classes=useStyle()


  useEffect(()=>{
      loadUserData()
  },[])
  const loadUserData=async()=>{
     const response=await getUser(id)
     setUsers(response.data)
     console.log(response.data)
  }
  let navigate = useNavigate();
  const onValueChange=(e)=>{
    setUsers({...user,[e.target.name]:e.target.value})
    console.log({...user,[e.target.name]:e.target.value})
  }
  const editUserDetails=async()=>{
    await postUser(user)
    navigate('/all')
}
  return (
    <>
    
  <FormGroup className={classes.container}>
  <Typography variant="h4">Edit User</Typography>
    <FormControl>
      <InputLabel>Name</InputLabel>
      <Input onChange={(e)=>onValueChange(e) } name="name" value={name}/>
    </FormControl>
    <FormControl>
      <InputLabel>User Name</InputLabel>
      <Input onChange={(e)=>onValueChange(e)} name="username"value={username}/>
    </FormControl>
    <FormControl>
      <InputLabel>Email</InputLabel>
      <Input onChange={(e)=>onValueChange(e)} name="email" value={email}/>
    </FormControl>
    <FormControl>
      <InputLabel>Phone</InputLabel>
      <Input onChange={(e)=>onValueChange(e)}  name="phone" value={phone}/>
    </FormControl>
    <Button onClick={()=>editUserDetails()}>Edit User</Button>
  </FormGroup>
  </> 
  )
}

export default EditUser