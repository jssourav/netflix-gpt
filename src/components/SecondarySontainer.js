/* eslint-disable no-lone-blocks */
import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

{
  /**
   * MovieList - Populer
   *    MovieCards * n
   * MovieList - NowPlaying
   * MovieList - Trending
   * MovieList - Horror
   */
}

const SecondarySontainer = () => {
  const movies = useSelector((store) => store.movies);
  const langkey = useSelector((store) => store.config.lang);

  if (!movies) return;

  return (
    movies && (
      <div className="bg-black">
        <div className="relative -mt-64 z-10 pl-12">
          <MovieList
            title={lang[langkey].nowPlaying}
            movies={movies?.nowPlayingMovies}
          />
          <MovieList
            title={lang[langkey].popular}
            movies={movies?.populerMovies}
          />
          <MovieList
            title={lang[langkey].topRated}
            movies={movies?.topRatedMovies}
          />
          {/* 
        <MovieList title="Upcoming Movies" movies={movies} />
        <MovieList title="Horror" movies={movies} /> */}
        </div>
      </div>
    )
  );
};

export default SecondarySontainer;
