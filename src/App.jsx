/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PlayerPage from "./pages/PlayerPage";

function App() {
  return (

    <Routes>

      <Route path = '/' element = {<HomePage />} /> 

      <Route path = '/login' element = {<LoginPage />} /> 

      <Route path = '/video-player/:id' element = {<PlayerPage />} /> 

    </Routes>


  );
}

export default App;
