/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "../components/NavBar";
import Poster from "../components/Poster";
import TitleCard from "../components/TitleCard";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="relative h-screen bg-gray-800 ">
      <NavBar />

      <Poster />

      <div className="space-y-6 mt-4 px-10 overflow-hidden ">

        <TitleCard title="Top Rated Movie" isButton={true} isWheel={false} />

        <TitleCard title="Popular on Demand haiii" isButton={true} isWheel={false} />

      </div>

      <Footer />

    </div>
  );
};

export default HomePage;
