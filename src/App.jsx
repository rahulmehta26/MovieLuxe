/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  return (

    <Routes>

      <Route path = '/' element = {<HomePage />} /> 

      <Route path = '/login' element = {<LoginPage />} /> 

    </Routes>


  );
}

export default App;
