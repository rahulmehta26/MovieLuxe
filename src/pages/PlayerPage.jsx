/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import fetchMovieApi from "../utils/videoAPI";
import NavBar from "../components/NavBar";

const PlayerPage = () => {
  const [videoAPI, setVideoAPI] = useState([]);

  const { id } = useParams();

  const navigate = useNavigate();

  const customIconStyle = "size-8 text-black";

  const customIconCircle =
    " w-12 h-12 rounded-full absolute top-10 left-8 cursor-pointer bg-white flex justify-center items-center ";

  useEffect(() => {
    const fetchData = async (id) => {
      const res = await fetchMovieApi(id);

      setVideoAPI(res);
    };

    fetchData(id);
  }, [id]);

  const handleGoBack = () => {
    navigate(-2);
  };

  return (
    <>

    <NavBar />
      <div className=" w-full h-screen relative flex flex-col items-center py-12 backdrop-blur-lg px-10 bg-gradient-to-r from-[#1A1D23] via-[#03045ba5] to-[#1A1D23] ">
        <motion.button
          whileTap={{
            scale: 0.9,
            transition: {
              duration: 0.25,
            },
          }}
          whileHover={{
            scale: 1.15,
            transition: {
              duration: 0.25,
            },
          }}
          className={customIconCircle}
          onClick={handleGoBack}
        >
          <ArrowLeftIcon className={customIconStyle} strokeWidth={3} />
        </motion.button>

        <iframe
          width={"90%"}
          height={"90%"}
          src={`https://www.youtube.com/embed/${videoAPI?.key}`}
          title="trailer"
          allowFullScreen
        ></iframe>

        <div>
          <h3>Publish</h3>
          <h3>Name</h3>
          <h3>type</h3>
        </div>
      </div>
    </>
  );
};

export default PlayerPage;
