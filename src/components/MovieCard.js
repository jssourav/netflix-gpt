import React from "react";
import { POSTER_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="max-w-7xl md:w-48 pr-4">
      <img
        alt="Movie Card"
        src={POSTER_CDN_URL + posterPath}
        className="max-w-full h-auto"
      />
    </div>
  );
};

export default MovieCard;
