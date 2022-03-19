import './App.css';
import NavBar from './Components/NavBar';
import Landingage from './Components/LandingPage';
import { Routes, Route } from "react-router-dom"
import AllUsers from './Components/AllUsers';
import AddUser from './Components/AddUser';
import React, { useState } from "react";
function App() {
 
  
  return (
    <>
      <NavBar/>
 <Routes>
  
        <Route path="/" element={ <Landingage/> } />
        <Route path="all" element={ <AllUsers/> } />
        <Route path="add" element={ <AddUser/> } />
      </Routes>
 

    
    </>

  );
}

export default App;
