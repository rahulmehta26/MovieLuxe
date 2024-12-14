/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PlayerPage from "./pages/PlayerPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";

function App() {

  const navigate = useNavigate()

  useEffect(() => {
     onAuthStateChanged(auth, async(user) => {
              if(user){
                navigate('/')
              }else{
                navigate('/login')
              }
     } )
  }, [] )

  return (

<>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/video-player/:id" element={<PlayerPage />} />
      </Routes>

      <ToastContainer 
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>


  );
}

export default App;
