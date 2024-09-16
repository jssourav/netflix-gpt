import React from "react";

export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[16%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4 hidden md:inline-block">{overview}</p>
      <div className="mt-2">
        <button className="bg-white text-black font-bold py-2 md:py-4 px-6 md:px-12 textt-lg rounded-lg hover:bg-opacity-80 ">
          <i className="fa-solid fa-play"></i> Play
        </button>
        <button className="mx-2 bg-gray-500 text-white  p-4 px-12 textt-lg bg-opacity-50 rounded-lg hidden md:inline-block">
          <i className="fa fa-circle-info"></i> More Info
        </button>
      </div>
    </div>
  );
};
