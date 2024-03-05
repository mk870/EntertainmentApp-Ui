import axios from "axios";
import { addActorsNews } from "Redux/Slices/Content/News/ActorsSlice";
import { addAlbumsNews } from "Redux/Slices/Content/News/AlbumsSlice";
import { addArtistsNews } from "Redux/Slices/Content/News/ArtistsSlice";
import { addEntertainmentNews } from "Redux/Slices/Content/News/EntertainmentSlice";
import { addMoviesNews } from "Redux/Slices/Content/News/MoviesSlice";
import { addSongsNews } from "Redux/Slices/Content/News/SongsSlice";
import { addTvShowsNews } from "Redux/Slices/Content/News/TvShowsSlice";
import {
  actorsNewsCategory,
  albumsNewsCategory,
  entertainmentNewsCategory,
  moviesNewsCategory,
  songsNewsCategory,
  tvShowsNewsCategory,
} from "Utils/Constants";
import { newsApiKey } from "Utils/utils";

const newsUrl = (category, key) => {
  return `https://newsapi.org/v2/everything?q=${category}&apiKey=${key}`;
};

const dispatchData = (data, dispatch, category) => {
  if (category === actorsNewsCategory) {
    dispatch(addActorsNews(data));
  } else if (category === albumsNewsCategory) {
    dispatch(addAlbumsNews(data));
  } else if (category === moviesNewsCategory) {
    dispatch(addMoviesNews(data));
  } else if (category === tvShowsNewsCategory) {
    dispatch(addTvShowsNews(data));
  } else if (category === songsNewsCategory) {
    dispatch(addSongsNews(data));
  } else if (category === entertainmentNewsCategory) {
    dispatch(addEntertainmentNews(data));
  } else {
    dispatch(addArtistsNews(data));
  }
};
export const getNewsRequest = (
  newsDataInStorage,
  category,
  setError,
  setIsLoading,
  setData,
  dispatch
) => {
  setIsLoading(true);
  setError(null);
  if (!newsDataInStorage) {
    axios
      .get(newsUrl(category, newsApiKey))
      .then((res) => {
        console.log(res.data.articles);
        dispatchData(res.data.articles, dispatch, category);
        setData(res.data.articles);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        console.log(e.message);
        setIsLoading(false);
      });
  } else {
    setData(newsDataInStorage);
    setIsLoading(false);
  }
};
