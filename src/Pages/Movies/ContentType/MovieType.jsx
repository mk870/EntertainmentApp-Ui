/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

import CardGrid from "../../../components/CardGrid/CardGrid";
import HttpError from "../../../HttpServices/Error/HttpError";
import * as styled from "./MovieTypeStyles";
import {
  fetchMoviesPlayingNow,
  fetchPopularMovies,
  fetchSearchedMovie,
  fetchTopRatedMovies,
  fetchUpComingMovies,
} from "./Utils/utils";
import CardGridSkeleton from "../../../components/SkeletonLoaders/CardGrid/CardGridSkeleton";
import PageHOC from "components/HOCs/Page/PageHOC";

const MovieType = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const popularMovies = useSelector((state) => state.popularMovies.value);
  const topRatedMovies = useSelector((state) => state.topRatedMovies.value);
  const upComingMovies = useSelector((state) => state.upComingMovies.value);
  const moviesPlayingNow = useSelector((state) => state.moviesPlayingNow.value);
  const { type } = useParams();
  const getGenreList = () => {
    if (type === "search") {
      console.log(location.state.queryString)
      if (location.state.genreList.length > 0) {
        return location.state.genreList;
      } else {
        return "";
      }
    }
  };
  useEffect(() => {
    if (type === "popular") {
      if (!popularMovies) {
        fetchPopularMovies(dispatch, setError, setIsLoading);
      }
    }
    if (type === "playing-now") {
      if (!moviesPlayingNow) {
        fetchMoviesPlayingNow(dispatch, setError, setIsLoading);
      }
    }
    if (type === "top-rated") {
      if (!topRatedMovies) {
        fetchTopRatedMovies(dispatch, setError, setIsLoading);
      }
    }
    if (type === "up-coming") {
      if (!upComingMovies) {
        fetchUpComingMovies(dispatch, setError, setIsLoading);
      }
    }
    if (type === "search") {
      fetchSearchedMovie(
        setError,
        setIsLoading,
        setSearchResults,
        getGenreList(),
        location.state.queryString
      );
    }
  }, [type]);
  const getContentList = () => {
    if (type === "popular") return popularMovies;
    if (type === "up-coming") return upComingMovies;
    if (type === "top-rated") return topRatedMovies;
    if (type === "playing-now") return moviesPlayingNow;
    if (type === "search") return searchResults;
  };
  const contentList = getContentList();
  const header = () => {
    if (type === "popular") return "Popular";
    if (type === "up-coming") return "Up Coming";
    if (type === "top-rated") return "Top Rated";
    if (type === "playing-now") return "Playing Now";
    if (type === "search") return "";
  };
  return (
    <styled.ContentTypeWrapper>
      {isLoading && (
        <CardGridSkeleton/>
      )}
      {error && <HttpError message={error} size="large" />}
      {!error && !isLoading && contentList && (
        <CardGrid contentList={contentList} header={header()} type={"movie"} />
      )}
    </styled.ContentTypeWrapper>
  );
};

export default PageHOC(MovieType);
