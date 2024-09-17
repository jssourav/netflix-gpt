import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import openai from "../../utils/openai";
import { API_OPTIONS } from "../../utils/constants";
import { addGptMovieResult } from "../../utils/store/gptSlice";
import lang from "../../utils/languageConstants";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery = `Act as a movie recommendation system and suggest some movies for the query: "${searchText.current.value}". 
Only give me the names of 7 movies, comma-separated like the example result given format only. 
Example Result: Gadar, Shole, Don, Golmaal, Koi Mil Gaya, Jab We Met, Veer-Zaara`;
    // Make an API call to GPT API and get movie results
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
    } //TODO: Error Handling}

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    const flattenedResults = tmdbResults.flat();
    const filteredMovies = flattenedResults.filter((movie) =>
      gptMovies.includes(movie.title)
    );

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: filteredMovies })
    );
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="bg-black w-full md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9"
          placeholder={lang[langkey].getSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
