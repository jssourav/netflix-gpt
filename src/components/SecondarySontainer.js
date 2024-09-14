/* eslint-disable no-lone-blocks */
import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

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
  console.log(movies, "werwer");

  if (!movies) return;

  return (
    movies && (
      <div className="bg-black">
        <div className="relative -mt-64 z-10 pl-12">
          <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
          <MovieList title="Populer" movies={movies?.populerMovies} />
          <MovieList title="Top Rated" movies={movies?.topRatedMovies} />
          {/* 
        <MovieList title="Upcoming Movies" movies={movies} />
        <MovieList title="Horror" movies={movies} /> */}
        </div>
      </div>
    )
  );
};

export default SecondarySontainer;
