import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';


const useStyle=makeStyles({
    header:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        // height: 48,
        padding: '0 30px',
    },
    tabs:{
      color:'#ffffff',
      textDecoration:'none',
      marginRight:20
    }
})
const NavBar = () => {
    const classes=useStyle()
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      <NavLink className={classes.tabs} to="./" exact>Home Page</NavLink>
      <NavLink className={classes.tabs} to="all" exact>All  Page</NavLink>
      <NavLink  className={classes.tabs}to="add" exact>Add Page</NavLink>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default NavBar