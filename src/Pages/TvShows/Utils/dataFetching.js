import axios from "axios";

import { addPopularTvShows } from "../../../Redux/Slices/Content/TvShows/popularSlice";
import { addTopRatedTvShows } from "../../../Redux/Slices/Content/TvShows/topRatedSlice";
import { addTvShowsOnAir } from "../../../Redux/Slices/Content/TvShows/onAirSlice";
import { tmdbKey } from "../../../Utils/utils";

export const fetchPopularTvShows = (
  dispatch,
  setError,
  setLoadingPopularTvShows,
  error,
) => {
  setLoadingPopularTvShows(true);
  axios
    .get(`https://api.themoviedb.org/3/tv/popular?api_key=${tmdbKey}&language=en-US`)
    .then((data) => {
      if (data.data.results === undefined) {
        dispatch(addPopularTvShows("none"));
        setLoadingPopularTvShows(false);
      } else {
        dispatch(addPopularTvShows(data.data.results));
        setLoadingPopularTvShows(false);
      }
    })
    .catch((e) => {
      console.log(e.message);
      setError({
        ...error,
        popularTvShowsError: "something went wrong, please try again later!",
      });
      setLoadingPopularTvShows(false);
    });
};

export const fetchOnAirTvShows = (
  dispatch,
  setError,
  setLoadingOnAirTvShows,
  error,
) => {
  setLoadingOnAirTvShows(true);
  axios
    .get(
      `
      https://api.themoviedb.org/3/tv/on_the_air?api_key=${tmdbKey}&language=en-US`
    )
    .then((data) => {
      if (data.data.results === undefined) {
        dispatch(addTvShowsOnAir("none"));
        setLoadingOnAirTvShows(false);
      } else {
        dispatch(addTvShowsOnAir(data.data.results));
        setLoadingOnAirTvShows(false);
      }
    })
    .catch((e) => {
      console.log(e.message);
      setError({
        ...error,
        OnAirTvShowsError: "something went wrong, please try again later!",
      });
      setLoadingOnAirTvShows(false);
    });
};

export const fetchTopRatedTvShows = (
  dispatch,
  setError,
  setLoadingTopRatedTvShows,
  error
) => {
  setLoadingTopRatedTvShows(true);
  axios 
    .get(
      `
 https://api.themoviedb.org/3/tv/top_rated?api_key=${tmdbKey}&language=en-US`
    )
    .then((data) => {
      if (data.data.results === undefined) {
        dispatch(addTopRatedTvShows("none"));
        setLoadingTopRatedTvShows(false);
      } else {
        dispatch(addTopRatedTvShows(data.data.results));
        setLoadingTopRatedTvShows(false);
      }
    })
    .catch((e) => {
      console.log(e.message);
      setError({
        ...error,
        topRatedTvShowsError: "something went wrong, please try again later!",
      });
      setLoadingTopRatedTvShows(false);
    });
};
