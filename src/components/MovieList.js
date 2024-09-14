import React from "react";
import MovieCard from "./MovieCard";
import Slider from "react-slick";

const MovieList = ({ title, movies }) => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8, // Show 5 movie cards at a time
    slidesToScroll: 3, // Scroll 3 movie cards at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-6 pt-6 text-white">
      <h1 className="text-3xl py-2">{title}</h1>
      <Slider {...settings}>
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </Slider>
    </div>
  );
};

export default MovieList;
