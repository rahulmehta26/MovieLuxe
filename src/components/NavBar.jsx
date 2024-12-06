/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import menuData from "../constant/NavItemData";
import {
  BellIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const iconCustomStyle = "size-7 text-white";

  return (
    <div
    className=" w-full relative "
    >
      <nav className="bg-gray-800 w-full text-white">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <h1 className="text-[1.25rem] cursor-pointer font-semibold">
            {" "}
            <span className={" font-extrabold text-[2rem] text-indigo-400 "}>
              M
            </span>
            ovieLuxe
          </h1>

          <div className="flex cursor-pointer items-center ">
            {menuData?.map((item) => {
              return (
                <motion.div
                  whileHover={{
                    transition: {
                      duration: 0.2,
                    },
                    borderRadius: "50px",
                    backgroundColor: "rgba(75, 85, 99, 1)",
                    scale: 0.95,
                  }}
                  key={item.id}
                  className="px-3 py-2 "
                >
                  <h3 className=" font-medium text-[1rem] ">{item.name}</h3>
                </motion.div>
              );
            })}
          </div>

          <div className="flex cursor-pointer items-center gap-x-2 ">
            <motion.div
              whileHover={{
                transition: {
                  duration: 0.4,
                },
                borderRadius: "50%",
                backgroundColor: "rgba(75, 85, 99, 1)",
                scale: 0.95,
              }}
              className="flex justify-center items-center p-2"
            >
              <MagnifyingGlassIcon className={iconCustomStyle} />
            </motion.div>

            <motion.div
              whileHover={{
                transition: {
                  duration: 0.4,
                },
                borderRadius: "50%",
                backgroundColor: "rgba(75, 85, 99, 1)",
                scale: 0.95,
              }}
              className="flex justify-center items-center p-2"
            >
              <BellIcon className={iconCustomStyle} />
            </motion.div>

            <motion.div
              whileHover={{
                transition: {
                  duration: 0.4,
                },
                borderRadius: "50%",
                backgroundColor: "rgba(75, 85, 99, 1)",
                scale: 0.9,
              }}
              className="flex justify-center items-center p-2"
            >
              <UserCircleIcon className={iconCustomStyle} />
            </motion.div>
          </div>
        </div>
      </nav>

      {/* <div
      className=" w-fit p-2 bg-slate-200 absolute right-0 "
      >
        <h3
        className=" text-[1rem] font-medium "
        >Log out of MovieLuxe </h3>
      </div> */}
    </div>
  );
};

export default NavBar;
