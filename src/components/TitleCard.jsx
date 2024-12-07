/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import movieList from "../constant/movieDetails";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const TitleCard = ({ textStyle, title, titleText, isButton, isWheel = false }) => {

  const [swiper, setSwiper] = useState(null);  
  
  const handlePrev = () => {  
   if (swiper) swiper.slidePrev();  
  };  
  
  const handleNext = () => {  
   if (swiper) swiper.slideNext();  
  };

  const customIconCircle =
    "w-9 h-9 rounded-full cursor-pointer bg-black flex justify-center items-center ";

  return (
    <div>
      <div className="flex items-center mb-4 justify-between">
        <h1 className={"text-[1.5rem] font-semibold " + textStyle}>{title}</h1>

        {isButton && (
          <div className="flex gap-x-4">
            <button 
            onClick={handlePrev}
            className={customIconCircle}>
              <ChevronLeftIcon
                strokeWidth={3}
                className= "size-6 text-white"
              />
            </button>

            <button 
            onClick={handleNext}
            className={customIconCircle}>
              <ChevronRightIcon
                strokeWidth={3}
                className= "size-6 text-white"
              />
            </button>
          </div>
        )}
      </div>

      <Swiper
        slidesPerView={4.2}
        spaceBetween={12}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiper.el.addEventListener("mouseenter", () => swiper.autoplay.stop());
          swiper.el.addEventListener("mouseleave", () => swiper.autoplay.start());
          setSwiper(swiper);
        }}
        mousewheel={isWheel}
        className="mySwiper"
        modules={[Autoplay, Mousewheel]}
      >
        {movieList?.map((info) => {
          return (
            <SwiperSlide key={info.id}>
              <div className="w-80 cursor-pointer flex-shrink-0 h-52">
                <img
                  src={info?.imageKey}
                  className=" w-full h-full rounded-md object-cover "
                />
              </div>

              <h3
                className={` text-[1rem] mt-2 font-medium text-black ${titleText} `}
              >
                {info?.title}
              </h3>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TitleCard;
