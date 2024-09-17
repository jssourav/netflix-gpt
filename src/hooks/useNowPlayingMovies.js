import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TMDB_BASE_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/store/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        TMDB_BASE_URL + "now_playing?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    };

    !nowPlayingMovies && getNowPlayingMovies();
  }, [dispatch, nowPlayingMovies]);
};

export default useNowPlayingMovies;
