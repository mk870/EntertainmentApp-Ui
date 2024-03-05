import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "./Utils/FetchNews";

const useFetchNews = (category) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const moviesNewsData = useSelector((state) => state.moviesNews.value);
  const tvShowsNewsData = useSelector((state) => state.tvShowsNews.value);
  const songsNewsData = useSelector((state) => state.songsNews.value);
  const artistsNewsData = useSelector((state) => state.artistsNews.value);
  const albumsNewsData = useSelector((state) => state.albumsNews.value);
  const actorsNewsData = useSelector((state) => state.actorsNews.value);
  const entertainmentNewsData = useSelector(
    (state) => state.entertainmentNews.value
  );
  useEffect(() => {
    fetchNews(
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
    );
  }, [
    actorsNewsData,
    songsNewsData,
    albumsNewsData,
    artistsNewsData,
    tvShowsNewsData,
    entertainmentNewsData,
    moviesNewsData,
    category,
  ]);
  return { data, isLoading, error };
};

export default useFetchNews;
