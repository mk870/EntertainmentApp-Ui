/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Carousel from "components/Carousel/Carousel";
import { itemsShownPerScreenSize } from "components/Carousel/Utils/utils";
import HttpError from "HttpServices/Error/HttpError";
import * as styled from "./TvShowsStyles";
import {
  fetchOnAirTvShows,
  fetchPopularTvShows,
  fetchTopRatedTvShows,
} from "./Utils/dataFetching";
import CarouselSkeleton from "components/SkeletonLoaders/Carousel/CarouselSkeleton";
import PageHOC from "components/HOCs/Page/PageHOC";

const TvShows = () => {
  const [error, setError] = useState({
    popularTvShowsError: null,
    onAirTvShowsError: null,
    topRatedTvShowsError: null,
  });
  const [loadingOnAirTvShows, setLoadingOnAirTvShows] = useState(false);
  const [loadingPopularTvShows, setLoadingPopularTvShows] = useState(false);
  const [loadingTopRatedTvShows, setLoadingTopRatedTvShows] = useState(false);
  const dispatch = useDispatch();
  const popularTvShows = useSelector((state) => state.popularTvShows.value);
  const onAirTvShows = useSelector((state) => state.tvShowsOnAir.value);
  const topRatedTvShows = useSelector((state) => state.topRatedTvShows.value);
  const screenSize = useSelector((state) => state.screenSize.value);
  const navigate = useNavigate();
  const onNavigate = (route) => {
    navigate(`/tv-shows/${route}`);
  };
  const numberOfItemstoShow = itemsShownPerScreenSize(screenSize);
  useEffect(() => {
    if (!onAirTvShows) {
      fetchOnAirTvShows(dispatch, setError, setLoadingOnAirTvShows, error);
    }
    if (!topRatedTvShows) {
      fetchTopRatedTvShows(
        dispatch,
        setError,
        setLoadingTopRatedTvShows,
        error
      );
    }
    if (!popularTvShows) {
      fetchPopularTvShows(dispatch, setError, setLoadingPopularTvShows, error);
    }
  }, []);

  const errorChecking = () => {
    if (
      error.onAirTvShowsError ||
      error.popularTvShowsError ||
      error.topRatedTvShowsError
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
    <styled.TvShowsWrapper>
      {errorChecking()}
      {!error.onAirTvShowsError &&
        !error.popularTvShowsError &&
        !error.topRatedTvShowsError && (
          <>
            <styled.popularTvShowsWrapper>
              {loadingPopularTvShows && (
                <CarouselSkeleton
                  numberOfItemsShown={numberOfItemstoShow}
                  size={"large"}
                />
              )}
              {popularTvShows === "none" && (
                <styled.Text>No popular Tv Shows at the moment</styled.Text>
              )}
              {popularTvShows !== "none" && popularTvShows && (
                <Carousel
                  dataList={popularTvShows}
                  headerText="Popular"
                  type={"tv-show"}
                  numberOfItemsShown={numberOfItemstoShow}
                  size="large"
                  navigate={() => onNavigate("popular")}
                  auto={false}
                />
              )}
            </styled.popularTvShowsWrapper>
            <styled.topRatedTvShowsWrapper>
              {loadingTopRatedTvShows && (
                <CarouselSkeleton
                  numberOfItemsShown={numberOfItemstoShow}
                  size={"large"}
                />
              )}
              {topRatedTvShows === "none" && (
                <styled.Text>No Top Rated Tv Shows at the moment</styled.Text>
              )}
              {topRatedTvShows !== "none" && topRatedTvShows && (
                <Carousel
                  dataList={topRatedTvShows}
                  headerText="Top Rated"
                  type={"tv-show"}
                  numberOfItemsShown={numberOfItemstoShow}
                  size="large"
                  navigate={() => onNavigate("top-rated")}
                  auto={false}
                />
              )}
            </styled.topRatedTvShowsWrapper>
            <styled.latestTvShowsWrapper>
              {loadingOnAirTvShows && (
                <CarouselSkeleton
                  numberOfItemsShown={numberOfItemstoShow}
                  size={"large"}
                />
              )}
              {onAirTvShows === "none" && (
                <styled.Text>No Tv Shows On Air at the moment</styled.Text>
              )}
              {onAirTvShows !== "none" && onAirTvShows && (
                <Carousel
                  dataList={onAirTvShows}
                  headerText="On Air"
                  type={"tv-show"}
                  numberOfItemsShown={numberOfItemstoShow}
                  size="large"
                  navigate={() => onNavigate("on-air")}
                  auto={false}
                />
              )}
            </styled.latestTvShowsWrapper>
          </>
        )}
    </styled.TvShowsWrapper>
  );
};

export default PageHOC(TvShows);
