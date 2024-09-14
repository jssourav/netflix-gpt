import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, TMDB_BASE_URL } from "../utils/constants";
import { addPopulerMovies } from "../utils/moviesSlice";

const usePopulerMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPopulerMovies = async () => {
      const data = await fetch(TMDB_BASE_URL + "popular?page=1", API_OPTIONS);
      const json = await data.json();
      dispatch(addPopulerMovies(json.results));
    };
    getPopulerMovies();
  }, [dispatch]);
};

export default usePopulerMovies;
