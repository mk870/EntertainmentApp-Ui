/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

import CardGrid from "../../../components/CardGrid/CardGrid";
import HttpError from "../../../HttpServices/Error/HttpError";
import * as styled from "./TvShowTypeStyles";
import {
  fetchAiringTodayTvShows,
  fetchOnAirTvShows,
  fetchPopularTvShows,
  fetchSearchedTvShow,
  fetchTopRatedTvShows,
} from "./utils/utils";
import CardGridSkeleton from "../../../components/SkeletonLoaders/CardGrid/CardGridSkeleton";

const TvShowType = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const popularTvShows = useSelector((state) => state.popularTvShows.value);
  const topRatedTvShows = useSelector((state) => state.topRatedTvShows.value);
  const tvShowsOnAir = useSelector((state) => state.tvShowsOnAir.value);
  const tvShowsAiringToday = useSelector(
    (state) => state.tvShowsAiringToday.value
  );
  const { type } = useParams();
  const getGenreList = () => {
    if (type === "search") {
      if (location.state.genreList.length > 0) {
        return location.state.genreList;
      } else {
        return "";
      }
    }
  };
  useEffect(() => {
    if (type === "popular") {
      if (!popularTvShows) {
        fetchPopularTvShows(dispatch, setError, setIsLoading);
      }
    }
    if (type === "on-air") {
      if (!tvShowsOnAir) {
        fetchOnAirTvShows(dispatch, setError, setIsLoading);
      }
    }
    if (type === "top-rated") {
      if (!topRatedTvShows) {
        fetchTopRatedTvShows(dispatch, setError, setIsLoading);
      }
    }
    if (type === "airing-today") {
      if (!tvShowsAiringToday) {
        fetchAiringTodayTvShows(dispatch, setError, setIsLoading);
      }
    }
    if (type === "search") {
      fetchSearchedTvShow(
        setError,
        setIsLoading,
        setSearchResults,
        getGenreList(),
        location.state.queryString
      );
    }
  }, [type]);
  const getContentList = () => {
    if (type === "popular") return popularTvShows;
    if (type === "on-air") return tvShowsOnAir;
    if (type === "top-rated") return topRatedTvShows;
    if (type === "airing-today") return tvShowsAiringToday;
    if (type === "search") return searchResults;
  };
  const contentList = getContentList();
  const header = () => {
    if (type === "popular") return "Popular";
    if (type === "on-air") return "On Air";
    if (type === "top-rated") return "Top Rated";
    if (type === "airing-today") return "Airing Today";
    if (type === "search") return "TV Show Search";
  };

  return (
    <styled.ContentTypeWrapper>
      {isLoading && (
        <CardGridSkeleton
          numberOfItemsShown={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        />
      )}
      {error && <HttpError message={error} size="large" />}
      {!error && !isLoading && contentList && (
        <CardGrid
          contentList={contentList}
          header={header()}
          type={"tv-show"}
        />
      )}
    </styled.ContentTypeWrapper>
  );
};

export default TvShowType;
