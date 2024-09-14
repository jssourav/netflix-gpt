import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, TMDB_BASE_URL } from "../utils/constants";
import { addUpcommingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUpcomingMovies = async () => {
      const data = await fetch(TMDB_BASE_URL + "upcoming?page=1", API_OPTIONS);
      const json = await data.json();
      dispatch(addUpcommingMovies(json.results));
    };
    getUpcomingMovies();
  }, [dispatch]);
};

export default useUpcomingMovies;
