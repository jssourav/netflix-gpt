import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TMDB_BASE_URL } from "../utils/constants";
import { addPopulerMovies } from "../utils/moviesSlice";

const usePopulerMovies = () => {
  const dispatch = useDispatch();
  const populerMovies = useSelector((store) => store.movies.populerMovies);

  useEffect(() => {
    const getPopulerMovies = async () => {
      const data = await fetch(TMDB_BASE_URL + "popular?page=1", API_OPTIONS);
      const json = await data.json();
      dispatch(addPopulerMovies(json.results));
    };
    !populerMovies && getPopulerMovies();
  }, [dispatch, populerMovies]);
};

export default usePopulerMovies;
