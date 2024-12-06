/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import poster_bg from "../assets/poster_bg.jpg";
import {
  InformationCircleIcon,
  PlayCircleIcon,
} from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import TitleCard from "./TitleCard";

const Poster = () => {
  const customIconStyle = "size-8 text-black";

  const customIconCircle =
    "w-12 h-12 rounded-full cursor-pointer bg-white flex justify-center items-center ";

  return (

    <div className="relative h-screen ">

      <img src={poster_bg} className="w-full h-full object-cover" />

      <div className=" absolute w-full h-full inset-0 bg-gradient-to-r from-[#000000b7] to-transparent ">

        <div className="h-full overflow-hidden relative ">

          <div
          className="absolute w-full px-10 space-y-5 bottom-2 "
          >

          <h1 className="text-[2.5rem]  font-bold text-white">
            {" "}
            Black Panther{" "}
          </h1>

          <p className=" text-[1.25rem] w-[50%] font-normal text-white ">
            A groundbreaking Marvel film that follows King T'Challa's journey to
            defend Wakanda, blending African culture with advanced technology
            and themes of legacy and identity.
          </p>

          <div className=" flex items-center gap-x-8  ">
            <motion.button
              whileHover={{
                scale: 1.15,
              }}
              className={customIconCircle}
            >
              <PlayCircleIcon className={customIconStyle} />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.15,
              }}
              className={customIconCircle}
            >
              <InformationCircleIcon className={customIconStyle} />
            </motion.button>
          </div>

        <TitleCard 
          title='Popular on MovieLuxe'
          textStyle='text-white'
          titleText='text-white'
          isWheel={true}
          />

          </div>

        </div>

      </div>
    </div>
  );
};

export default Poster;
