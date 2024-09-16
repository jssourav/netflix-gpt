import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TMDB_BASE_URL } from "../utils/constants";
import { addUpcommingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  useEffect(() => {
    const getUpcomingMovies = async () => {
      const data = await fetch(TMDB_BASE_URL + "upcoming?page=1", API_OPTIONS);
      const json = await data.json();
      dispatch(addUpcommingMovies(json.results));
    };
    !upcomingMovies && getUpcomingMovies();
  }, [dispatch, upcomingMovies]);
};

export default useUpcomingMovies;
