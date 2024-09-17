import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopulerMovies from "../hooks/usePopulerMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer/MainContainer";
import SecondarySontainer from "./SecondarySontainer/SecondarySontainer";
import GptSearch from "./GPT/GptSearch";

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
