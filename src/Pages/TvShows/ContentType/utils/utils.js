import axios from "axios";

import { addTvShowsAiringToday } from "../../../../Redux/Slices/Content/TvShows/airingTodaySlice";
import { addTvShowsOnAir } from "../../../../Redux/Slices/Content/TvShows/onAirSlice";
import { addPopularTvShows } from "../../../../Redux/Slices/Content/TvShows/popularSlice";
import { addTopRatedTvShows } from "../../../../Redux/Slices/Content/TvShows/topRatedSlice";
import { tmdbKey } from "../../../../Utils/utils";

export const fetchPopularTvShows = (dispatch, setError, setIsLoading) => {
  setIsLoading(true);
  axios
    .get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${tmdbKey}&language=en-US`
    )
    .then((data) => {
      if (data.data.results === undefined) {
        dispatch(addPopularTvShows("none"));
        setIsLoading(false);
      } else {
        dispatch(addPopularTvShows(data.data.results));
        setIsLoading(false);
      }
    })
    .catch((e) => {
      console.log(e.message);
      setError("something went wrong, please try again later!");
      setIsLoading(false);
    });
};

export const fetchSearchedTvShow = (
  setError,
  setIsLoading,
  setSearchResults,
  genreList,
  queryString
) => {
  setIsLoading(true);
  axios
    .get(
      `https://api.themoviedb.org/3/search/tv?api_key=${tmdbKey}&query=${queryString}&with_genres=${genreList}&language=en-US`
    )
    .then((data) => {
      if (data.data.results === undefined) {
        setIsLoading(false);
        setSearchResults("none");
      } else {
        setIsLoading(false);
        setSearchResults(data.data.results);
      }
    })
    .catch((e) => {
      console.log(e.message);
      setError("something went wrong, please try again later!");
      setIsLoading(false);
    });
};

export const fetchTopRatedTvShows = (dispatch, setError, setIsLoading) => {
  setIsLoading(true);
  axios
    .get(
      `
https://api.themoviedb.org/3/tv/top_rated?api_key=${tmdbKey}&language=en-US`
    )
    .then((data) => {
      if (data.data.results === undefined) {
        dispatch(addTopRatedTvShows("none"));
        setIsLoading(false);
      } else {
        dispatch(addTopRatedTvShows(data.data.results));
        setIsLoading(false);
      }
    })
    .catch((e) => {
      console.log(e.message);
      setError("something went wrong, please try again later!");
      setIsLoading(false);
    });
};

export const fetchOnAirTvShows = (dispatch, setError, setIsLoading) => {
  setIsLoading(true);
  axios
    .get(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${tmdbKey}&language=en-US`
    )
    .then((data) => {
      if (data.data.results === undefined) {
        dispatch(addTvShowsOnAir("none"));
        setIsLoading(false);
      } else {
        dispatch(addTvShowsOnAir(data.data.results));
        setIsLoading(false);
      }
    })
    .catch((e) => {
      console.log(e.message);
      setError("something went wrong, please try again later!");
      setIsLoading(false);
    });
};

export const fetchAiringTodayTvShows = (dispatch, setError, setIsLoading) => {
  setIsLoading(true);
  axios
    .get(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=${tmdbKey}&language=en-US`
    )
    .then((data) => {
      if (data.data.results === undefined) {
        dispatch(addTvShowsAiringToday("none"));
        setIsLoading(false);
      } else {
        dispatch(addTvShowsAiringToday(data.data.results));
        setIsLoading(false);
      }
    })
    .catch((e) => {
      console.log(e.message);
      setError("something went wrong, please try again later!");
      setIsLoading(false);
    });
};
