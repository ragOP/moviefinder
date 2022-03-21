import './App.css';
import NavBar from './Components/NavBar';
import Landingage from './Components/LandingPage';
import { Routes, Route } from "react-router-dom"
import AllUsers from './Components/AllUsers';
import AddUser from './Components/AddUser';
import React, { useState } from "react";
import EditUser from './Components/EditUser';
function App() {
 
  
  return (
    <>
      <NavBar/>
 <Routes>
  
        <Route exact path="/" element={ <Landingage/> } />
        <Route exact path="/all" element={ <AllUsers/> } />
        <Route exact path="/add" element={ <AddUser/> } />
        <Route exact path="/edit/:id" element={ <EditUser/> } />
      </Routes>
 

    
    </>

  );
}

export default App;
