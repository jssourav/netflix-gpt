import { useDispatch } from "react-redux";
import { API_OPTIONS, TMDB_BASE_URL } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieVideos = async () => {
      const data = await fetch(
        `${TMDB_BASE_URL + movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();

      const filterData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
    };
    getMovieVideos();
  }, [dispatch, movieId]);
};

export default useMovieTrailer;
