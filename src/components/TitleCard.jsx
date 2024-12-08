/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import movieList from "../constant/movieDetails";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import getPopularMovies from "../utils/movieAPI";
import cinema from "../assets/cinema.png";
import { Link } from "react-router-dom";

const TitleCard = ({
  textStyle,
  title,
  titleText,
  isButton,
  isWheel = false,
  category,
}) => {
  const [swiper, setSwiper] = useState(null);
  const [data, setData] = useState([]);

  const handlePrev = () => {
    if (swiper) swiper.slidePrev();
  };

  const handleNext = () => {
    if (swiper) swiper.slideNext();
  };

  const customIconCircle =
    "w-9 h-9 rounded-full cursor-pointer bg-white flex justify-center items-center ";

  useEffect(() => {
    const fetchData = async () => {
      const res = await getPopularMovies(category);
      setData(res, "rtfyghu1212");
    };
    fetchData();
  }, [category]);

  return (
    <div>
      <div className="flex items-center mb-2 justify-between">
        <h1 className={"text-[1.5rem] font-semibold text-white " + textStyle}>
          {title}
        </h1>

        {isButton && (
          <div className="flex gap-x-4">
            <button onClick={handlePrev} className={customIconCircle}>
              <ChevronLeftIcon
                strokeWidth={3}
                className="size-6 mr-1 text-black"
              />
            </button>

            <button onClick={handleNext} className={customIconCircle}>
              <ChevronRightIcon
                strokeWidth={3}
                className="size-6 ml-1 text-black"
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
          swiper.el.addEventListener("mouseenter", () =>
            swiper.autoplay.stop()
          );
          swiper.el.addEventListener("mouseleave", () =>
            swiper.autoplay.start()
          );
          setSwiper(swiper);
        }}
        mousewheel={isWheel}
        className="mySwiper"
        modules={[Autoplay, Mousewheel]}
      >
        {data?.map((info) => {
          return (
            <SwiperSlide key={info.id}>
              <Link to={`/video-player/${info?.id}`}>
                <div className="w-80 relative cursor-pointer flex-shrink-0 h-52">
                  <img
                    src={
                      info?.backdrop_path
                        ? import.meta.env.VITE_IMG_URI + info?.backdrop_path
                        : cinema
                    }
                    alt={info?.original_title}
                    className=" w-full h-full text-center text-white rounded-md object-cover "
                  />

                  <div className=" w-full h-full rounded-md flex flex-col justify-end absolute top-0 left-0 bg-gradient-to-t from-black/90 to-transparent p-4 ">
                    <h3
                      className={` text-[1rem] line-clamp-2 font-medium text-white ${titleText} `}
                    >
                      {info?.original_title}{" "}
                      {info?.original_language !== "en" && ` (${info?.title})`}
                    </h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TitleCard;
