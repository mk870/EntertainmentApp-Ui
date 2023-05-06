import axios from "axios";

import { addMoviesPlayingNow } from "../../../../Redux/Slices/Content/Movies/NowPlayingSlice";
import { addPopularMovies } from "../../../../Redux/Slices/Content/Movies/PopularSlice";
import { addTopRatedMovies } from "../../../../Redux/Slices/Content/Movies/TopRatedSlice";
import { addUpComingMovies } from "../../../../Redux/Slices/Content/Movies/UpComingSlice";
import { tmdbKey } from "../../../../Utils/utils";

export const fetchPopularMovies = (dispatch, setError, setIsLoading) => {
  setIsLoading(true);
  axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${tmdbKey}&language=en-US`
    )
    .then((data) => {
      if (data.data.results === undefined) {
        dispatch(addPopularMovies("none"));
        setIsLoading(false);
      } else {
        dispatch(addPopularMovies(data.data.results));
        setIsLoading(false);
      }
    })
    .catch((e) => {
      console.log(e.message);
      setError("something went wrong, please try again later!");
      setIsLoading(false);
    });
};

export const fetchSearchedMovie = (
  setError,
  setIsLoading,
  setSearchResults,
  genreList,
  queryString
) => {
  setIsLoading(true);
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${tmdbKey}&query=${queryString}&with_genres=${genreList}&language=en-US`
    )
    .then((data) => {
      if (data.data.results.length < 1) {
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

export const fetchTopRatedMovies = (dispatch, setError, setIsLoading) => {
  setIsLoading(true);
  axios
    .get(
      `
https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdbKey}&language=en-US`
    )
    .then((data) => {
      if (data.data.results === undefined) {
        dispatch(addTopRatedMovies("none"));
        setIsLoading(false);
      } else {
        dispatch(addTopRatedMovies(data.data.results));
        setIsLoading(false);
      }
    })
    .catch((e) => {
      console.log(e.message);
      setError("something went wrong, please try again later!");
      setIsLoading(false);
    });
};

export const fetchUpComingMovies = (dispatch, setError, setIsLoading) => {
  setIsLoading(true);
  axios
    .get(
      `
     https://api.themoviedb.org/3/movie/upcoming?api_key=${tmdbKey}&language=en-US
     `
    )
    .then((data) => {
      if (data.data.results === undefined) {
        dispatch(addUpComingMovies("none"));
        setIsLoading(false);
      } else {
        dispatch(addUpComingMovies(data.data.results));
        setIsLoading(false);
      }
    })
    .catch((e) => {
      console.log(e.message);
      setError("something went wrong, please try again later!");
      setIsLoading(false);
    });
};

export const fetchMoviesPlayingNow = (dispatch, setError, setIsLoading) => {
  setIsLoading(true);
  axios
    .get(
      `
     https://api.themoviedb.org/3/movie/now_playing?api_key=${tmdbKey}&language=en-US
     `
    )
    .then((data) => {
      if (data.data.results === undefined) {
        dispatch(addMoviesPlayingNow("none"));
        setIsLoading(false);
      } else {
        dispatch(addMoviesPlayingNow(data.data.results));
        setIsLoading(false);
      }
    })
    .catch((e) => {
      console.log(e.message);
      setError("something went wrong, please try again later!");
      setIsLoading(false);
    });
};
