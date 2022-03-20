import { FormControl, FormGroup, InputLabel,Input, Button, Typography, } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'
const useStyle=makeStyles({
  container:{
      width:'50%',
      margin:'5% 0 0 25%'
  }
})

const initialValues={
name:"",
email:"",
username:"",
phone:""

}
const AddUser = () => {
  const classes=useStyle()
  return (
    <>
    
  <FormGroup className={classes.container}>
  <Typography variant="h4">Add User</Typography>
    <FormControl>
      <InputLabel>Name</InputLabel>
      <Input/>
    </FormControl>
    <FormControl>
      <InputLabel>User Name</InputLabel>
      <Input/>
    </FormControl>
    <FormControl>
      <InputLabel>Email</InputLabel>
      <Input/>
    </FormControl>
    <FormControl>
      <InputLabel>Phone</InputLabel>
      <Input/>
    </FormControl>
    <Button>Add User</Button>
  </FormGroup>
  </> 
  )
}

export default AddUser