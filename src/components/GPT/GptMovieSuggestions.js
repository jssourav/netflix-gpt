import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../SecondarySontainer/MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;
  if (!movieResults) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <MovieList title={movieNames.join(", ")} movies={movieResults} />
    </div>
  );
};

export default GptMovieSuggestions;
