import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondarySontainer from "./SecondarySontainer";

const Browse = () => {
  useNowPlayingMovies();
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
