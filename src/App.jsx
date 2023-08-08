// import { useState } from 'react'
// import './App.css'
// import { Routes, Route } from "react-router-dom";
import React from "react";
import NavBar from "./components/Navbar";
import MainContainer from "./components/MainContainer";


const App = () => {
  return (
    <>
      <div id="container">
        {/* <h1 id="header">Stranger's Things</h1> */}
        <NavBar />
        <MainContainer />
      </div>
    </>
  );
}

export default App;


