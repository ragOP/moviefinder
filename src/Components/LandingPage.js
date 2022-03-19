import { makeStyles } from '@mui/styles'
import React from 'react'
import AddUser from './AddUser'
import AllUsers from './AllUsers'
import NavBar from './NavBar'
import Land from '../land.jpg'
import { Box } from '@mui/system'

const useStyle=makeStyles({
image:{
  width: '100%',
  height: '100%',
 
  backgroundSize: 'cover' 
 

}
})
const LandingPage = () => {
  const classes=useStyle()
  return (
  
  <>
   <Box className={classes.image} style ={{display:"flex"}}>
     <img src={Land} className={classes.image}/>
   </Box>
  </>
  )
}

export default LandingPage