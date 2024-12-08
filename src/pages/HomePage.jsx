/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "../components/NavBar";
import Poster from "../components/Poster";
import TitleCard from "../components/TitleCard";
import Footer from "../components/Footer";

const HomePage = () => {

  return (
    
    <div className="relative h-screen bg-gray-800 ">

      <div
      className=" fixed top-0 left-0 z-10 w-full "
      >

      <NavBar />

      </div>

      <Poster />

      <div className="space-y-6 py-6 backdrop-blur-lg px-10 bg-gradient-to-r from-[#1A1D23] via-[#03045ba5] to-[#1A1D23] overflow-hidden ">

        <TitleCard title="Upcoming" isButton={true} isWheel={false} category={'upcoming'} />

        <TitleCard title="Top Rated Movie" isButton={true} isWheel={false} category={'top_rated'} />

        <TitleCard title="Now Playing" isButton={true} isWheel={false} category={'now_playing'} />
      

      </div>

      <Footer />

    </div>
  );
};

export default HomePage;
