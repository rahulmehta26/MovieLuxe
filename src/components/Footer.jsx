/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import github from "../assets/github.png";
import linkedIn from "../assets/linkedin.png";
import cinema from "../assets/cinema.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const customIconStyle = "size-8 text-black";

  const customIconCircle =
    " w-fit p-2 rounded-lg cursor-pointer bg-white flex justify-center items-center ";

  return (
    <div className=" w-full backdrop-blur-lg bg-[#1A1D23] px-10 py-2 ">
      <div className=" flex justify-between ">
        <div className=" space-y-1 ">
          <Link to={"/"} className=" flex items-center gap-x-2 ">
            <img
              src={cinema}
              className=" size-8 mb-2 object-cover "
              style={{ filter: "invert(1)" }}
            />
            <h1 className="text-[1.50rem] cursor-pointer text-white font-semibold">
              <span
                className={" font-extrabold text-[2.5rem] text-indigo-400 "}
              >
                M
              </span>
              ovieLuxe
            </h1>
          </Link>

          <h3 className="text-[1rem] text-white font-medium">
            Made by Rahul Mehta
          </h3>
        </div>

        <div className=" flex items-center gap-x-6 ">
          <div className={customIconCircle + "cursor-pointer"}>
            <motion.img
              src={github}
              className={customIconStyle}
              whileHover={{
                scale: 0.8,
                transition: {
                  duration: 0.25,
                },
              }}
            />
          </div>

          <div className={customIconCircle + "cursor-pointer"}>
            <motion.img
              src={linkedIn}
              className={customIconStyle}
              whileHover={{
                scale: 0.8,
                transition: {
                  duration: 0.25,
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
