/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {motion} from 'framer-motion'

const CustomButton = ({title}) => {
  return (
    <motion.button
    whileHover={{
      scale:1.05,
      transition:{
        duration:0.25
      }
    }}
    whileTap={{
      scale:0.95,
      transition:{
        duration:0.25
      }
    }}
    className=' w-full p-3 flex justify-center items-center bg-[#818CF8] rounded-md '
    >
      <h2
      className=' text-[1rem] text-[#fff] font-semibold '
      >{title}</h2>
    </motion.button>
  );
};

export default CustomButton;