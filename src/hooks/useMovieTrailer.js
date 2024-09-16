import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TMDB_BASE_URL } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

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
    !trailerVideo && getMovieVideos();
  }, [dispatch, trailerVideo, movieId]);
};

export default useMovieTrailer;
