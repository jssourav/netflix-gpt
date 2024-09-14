import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondarySontainer from "./SecondarySontainer";
import usePopulerMovies from "../hooks/usePopulerMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopulerMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondarySontainer />
      {/**
       *  MainContainer
       *    - VideoBackground
       *    - VideoTitle
       *  SecondaryContainer
       *    MovieLists * n
       *       cards * n
       */}
    </div>
  );
};

export default Browse;
