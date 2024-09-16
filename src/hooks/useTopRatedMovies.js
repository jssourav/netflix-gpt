import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TMDB_BASE_URL } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  useEffect(() => {
    const getTopRatedMovies = async () => {
      const data = await fetch(TMDB_BASE_URL + "top_rated?page=1", API_OPTIONS);
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    };
    !topRatedMovies && getTopRatedMovies();
  }, [dispatch, topRatedMovies]);
};

export default useTopRatedMovies;
