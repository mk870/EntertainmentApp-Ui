/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Carousel from "../../components/Carousel/Carousel";
import { itemsShownPerScreenSize } from "../../components/Carousel/Utils/utils";
import HttpError from "../../HttpServices/Error/HttpError";
import * as styled from "./MoviesStyles";
import {
  fetchMoviesPlayingNow,
  fetchPopularMovies,
  fetchTopRatedMovies,
} from "./Utils/utils";
import CarouselSkeleton from "../../components/SkeletonLoaders/Carousel/CarouselSkeleton";

const Movies = () => {
  const [error, setError] = useState({
    popularMoviesError: null,
    moviesPlayingNowError: null,
    topRatedMoviesError: null,
  });
  const [loadingMoviesPlayingNow, setLoadingMoviesPlayingNow] = useState(false);
  const [loadingPopularMovies, setLoadingPopularMovies] = useState(false);
  const [loadingTopRatedMovies, setLoadingTopRatedMovies] = useState(false);
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.popularMovies.value);
  const moviesPlayingNow = useSelector((state) => state.moviesPlayingNow.value);
  const topRatedMovies = useSelector((state) => state.topRatedMovies.value);
  const screenSize = useSelector((state) => state.screenSize.value);
  const navigate = useNavigate();
  const onNavigate = (route) => {
    navigate(`/movies/${route}`);
  };
  const numberOfItemstoShow = itemsShownPerScreenSize(screenSize);
  useEffect(() => {
    if (!moviesPlayingNow) {
      fetchMoviesPlayingNow(
        dispatch,
        setError,
        setLoadingMoviesPlayingNow,
        error
      );
    }
    if (!topRatedMovies) {
      fetchTopRatedMovies(dispatch, setError, setLoadingTopRatedMovies, error);
    }
    if (!popularMovies) {
      fetchPopularMovies(dispatch, setError, setLoadingPopularMovies, error);
    }
  }, []);
  const errorChecking = () => {
    if (
      error.moviesPlayingNowError ||
      error.popularMoviesError ||
      error.topRatedMoviesError
    ) {
      return (
        <HttpError
          message={
            "something went wrong, please check your network connection!"
          }
          size={"large"}
        />
      );
    }
  };
  return (
    <styled.MoviesWrapper>
      {errorChecking()}
      {!error.moviesPlayingNowError &&
        !error.popularMoviesError &&
        !error.topRatedMoviesError && (
          <>
            <styled.popularMoviesWrapper>
              {loadingPopularMovies && (
                <CarouselSkeleton
                  numberOfItemsShown={numberOfItemstoShow}
                  size={"large"}
                />
              )}
              {popularMovies === "none" && (
                <styled.Text>No popular Movies at the moment</styled.Text>
              )}
              {popularMovies !== "none" && popularMovies && (
                <Carousel
                  dataList={popularMovies}
                  headerText="Popular"
                  type={"movie"}
                  numberOfItemsShown={numberOfItemstoShow}
                  size="large"
                  navigate={() => onNavigate("popular")}
                  auto={false}
                />
              )}
            </styled.popularMoviesWrapper>
            <styled.topRatedMoviesWrapper>
              {loadingTopRatedMovies && (
                <CarouselSkeleton
                  numberOfItemsShown={numberOfItemstoShow}
                  size={"large"}
                />
              )}
              {topRatedMovies === "none" && (
                <styled.Text>No Top Rated Movies at the moment</styled.Text>
              )}
              {topRatedMovies !== "none" && topRatedMovies && (
                <Carousel
                  dataList={topRatedMovies}
                  headerText="Top Rated"
                  type={"movie"}
                  numberOfItemsShown={numberOfItemstoShow}
                  size="large"
                  navigate={() => onNavigate("top-rated")}
                  auto={false}
                />
              )}
            </styled.topRatedMoviesWrapper>
            <styled.latestMoviesWrapper>
              {loadingMoviesPlayingNow && (
                <CarouselSkeleton
                  numberOfItemsShown={numberOfItemstoShow}
                  size={"large"}
                />
              )}
              {moviesPlayingNow === "none" && (
                <styled.Text>No Movies In Theatres at the moment</styled.Text>
              )}
              {moviesPlayingNow !== "none" && moviesPlayingNow && (
                <Carousel
                  dataList={moviesPlayingNow}
                  headerText="Playing Now"
                  type={"movie"}
                  numberOfItemsShown={numberOfItemstoShow}
                  size="large"
                  navigate={() => onNavigate("playing-now")}
                  auto={false}
                />
              )}
            </styled.latestMoviesWrapper>
          </>
        )}
    </styled.MoviesWrapper>
  );
};

export default Movies;
