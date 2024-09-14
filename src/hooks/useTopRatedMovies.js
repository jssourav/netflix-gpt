import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, TMDB_BASE_URL } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTopRatedMovies = async () => {
      const data = await fetch(TMDB_BASE_URL + "top_rated?page=1", API_OPTIONS);
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    };
    getTopRatedMovies();
  }, [dispatch]);
};

export default useTopRatedMovies;
