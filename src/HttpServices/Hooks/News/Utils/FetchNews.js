import {
  actorsNewsCategory,
  albumsNewsCategory,
  entertainmentNewsCategory,
  moviesNewsCategory,
  songsNewsCategory,
  tvShowsNewsCategory,
} from "Utils/Constants";
import { getNewsRequest } from "./GetNewsRequest";

export const fetchNews = (
  setData,
  dispatch,
  setIsLoading,
  setError,
  category,
  actorsNewsData,
  albumsNewsData,
  moviesNewsData,
  tvShowsNewsData,
  songsNewsData,
  artistsNewsData,
  entertainmentNewsData
) => {
  setError(null);
  if (category === actorsNewsCategory) {
    getNewsRequest(
      actorsNewsData,
      category,
      setError,
      setIsLoading,
      setData,
      dispatch
    );
  } else if (category === albumsNewsCategory) {
    getNewsRequest(
      albumsNewsData,
      category,
      setError,
      setIsLoading,
      setData,
      dispatch
    );
  } else if (category === moviesNewsCategory) {
    getNewsRequest(
      moviesNewsData,
      category,
      setError,
      setIsLoading,
      setData,
      dispatch
    );
  } else if (category === tvShowsNewsCategory) {
    getNewsRequest(
      tvShowsNewsData,
      category,
      setError,
      setIsLoading,
      setData,
      dispatch
    );
  } else if (category === songsNewsCategory) {
    getNewsRequest(
      songsNewsData,
      category,
      setError,
      setIsLoading,
      setData,
      dispatch
    );
  } else if (category === entertainmentNewsCategory) {
    getNewsRequest(
      entertainmentNewsData,
      category,
      setError,
      setIsLoading,
      setData,
      dispatch
    );
  } else {
    getNewsRequest(
      artistsNewsData,
      category,
      setError,
      setIsLoading,
      setData,
      dispatch
    );
  }
};
