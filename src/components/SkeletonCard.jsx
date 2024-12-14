/* eslint-disable no-unused-vars */
import React from "react";

const SkeletonCard = () => {
  return (
    <div className="flex space-x-6">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex-shrink-0">
          <div className="w-80 space-y-2 flex flex-col justify-end bg-gray-300 p-4 rounded-md h-52 animate-pulse">
            <div className="w-full bg-gray-400 p-1.5 rounded"></div>
            <div className="w-[50%] bg-gray-400 p-1.5 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonCard;
