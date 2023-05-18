import axios from "axios";

import { addPopularMovies } from "../../../Redux/Slices/Content/Movies/PopularSlice";
import { addTopRatedMovies } from "../../../Redux/Slices/Content/Movies/TopRatedSlice";
import { addMoviesPlayingNow } from "../../../Redux/Slices/Content/Movies/NowPlayingSlice";
import { tmdbKey } from "../../../Utils/utils";

export const fetchPopularMovies = (
  dispatch,
  setError,
  setLoadingPopularMovies,
  error
) => {
  setLoadingPopularMovies(true);
  axios
    .get(
      `
   https://api.themoviedb.org/3/movie/popular?api_key=${tmdbKey}&language=en-US`
    )
    .then((data) => {
      if (data.data.results === undefined) {
        dispatch(addPopularMovies("none"));
        setLoadingPopularMovies(false);
      } else {
        dispatch(addPopularMovies(data.data.results));
        setLoadingPopularMovies(false);
      }
    })
    .catch((e) => {
      console.log(e.message);
      setError({
        ...error,
        popularMoviesError: "something went wrong, please try again later!",
      });
      setLoadingPopularMovies(false);
    });
};

export const fetchMoviesPlayingNow = (
  dispatch,
  setError,
  setLoadingMoviesPlayingNow,
  error
) => {
  setLoadingMoviesPlayingNow(true);
  axios
    .get(
      `
      https://api.themoviedb.org/3/movie/now_playing?api_key=${tmdbKey}&language=en-US`
    )
    .then((data) => {
      if (data.data.results === undefined) {
        dispatch(addMoviesPlayingNow("none"));
        setLoadingMoviesPlayingNow(false);
      } else {
        dispatch(addMoviesPlayingNow(data.data.results));
        setLoadingMoviesPlayingNow(false);
      }
    })
    .catch((e) => {
      console.log(e.message);
      setError({
        ...error,
        MoviesPlayingNowError: "something went wrong, please try again later!",
      });
      setLoadingMoviesPlayingNow(false);
    });
};

export const fetchTopRatedMovies = (
  dispatch,
  setError,
  setLoadingTopRatedMovies,
  error
) => {
  setLoadingTopRatedMovies(true);
  axios
    .get(
      `
https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdbKey}&language=en-US`
    )
    .then((data) => {
      if (data.data.results === undefined) {
        dispatch(addTopRatedMovies("none"));
        setLoadingTopRatedMovies(false);
      } else {
        dispatch(addTopRatedMovies(data.data.results));
        setLoadingTopRatedMovies(false);
      }
    })
    .catch((e) => {
      console.log(e.message);
      setError({
        ...error,
        topRatedMoviesError: "something went wrong, please try again later!",
      });
      setLoadingTopRatedMovies(false);
    });
};
