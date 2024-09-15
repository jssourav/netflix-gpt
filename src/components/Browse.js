import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondarySontainer from "./SecondarySontainer";
import usePopulerMovies from "../hooks/usePopulerMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopulerMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />

      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondarySontainer />
        </>
      )}

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
