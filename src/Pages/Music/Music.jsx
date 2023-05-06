/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as styled from "./MusicStyles";
import { itemsShownPerScreenSize } from "../../components/Carousel/Utils/utils";
import {
  fetchElectroPlaylists,
  fetchHipHopPlaylists,
  fetchRnbPlaylists,
  fetchtopListPlaylists,
} from "./Utils/datafetching";
import HttpError from "../../HttpServices/Error/HttpError";
import CarouselSkeleton from "../../components/SkeletonLoaders/Carousel/CarouselSkeleton";
import Carousel from "../../components/Carousel/Carousel";

const Music = () => {
  const [error, setError] = useState({
    electroPlaylistsError: null,
    hipHopPlaylistsError: null,
    topListPlaylistsError: null,
    rnbPlaylistsError: null,
  });
  const [loadingElectroPlaylists, setLoadingElectroPlaylists] = useState(false);
  const [loadingHipHopPlaylists, setLoadingHipHopPlaylists] = useState(false);
  const [loadingTopListPlaylists, setLoadingTopListPlaylists] = useState(false);
  const [loadingRnbPlaylists, setLoadingRnbPlaylists] = useState(false);
  const dispatch = useDispatch();
  const electroPlaylists = useSelector((state) => state.electroPlaylists.value);
  const hipHopPlaylists = useSelector((state) => state.hipHopPlaylists.value);
  const rnbPlaylists = useSelector((state) => state.rnbPlaylists.value);
  const topListPlaylists = useSelector((state) => state.topListPlaylists.value);
  const screenSize = useSelector((state) => state.screenSize.value);
  const spotifyAccessToken = useSelector(
    (state) => state.spotifyAccessToken.value
  );
  const navigate = useNavigate();
  const musicGenresToShow = [
    { id: "toplists", name: "Toplist", selected: false },
    { id: "0JQ5DAqbMKFHOzuVTgTizF", name: "Electro", selected: false },
    { id: "0JQ5DAqbMKFQ00XGBls6ym", name: "Hiphop", selected: false },
    { id: "0JQ5DAqbMKFEZPnFQSFB1T", name: "RnB", selected: false },
  ];
  const onNavigate = (route) => {
    navigate(route);
  };
  const numberOfItemstoShow = itemsShownPerScreenSize(screenSize);
  useEffect(() => {
    if (!topListPlaylists) {
      fetchtopListPlaylists(
        dispatch,
        setError,
        setLoadingTopListPlaylists,
        error,
        spotifyAccessToken,
        musicGenresToShow[0].id
      );
    }
    if (!electroPlaylists) {
      fetchElectroPlaylists(
        dispatch,
        setError,
        setLoadingElectroPlaylists,
        error,
        spotifyAccessToken,
        musicGenresToShow[1].id
      );
    }
    if (!hipHopPlaylists) {
      fetchHipHopPlaylists(
        dispatch,
        setError,
        setLoadingHipHopPlaylists,
        error,
        spotifyAccessToken,
        musicGenresToShow[2].id
      );
    }
    if (!rnbPlaylists) {
      fetchRnbPlaylists(
        dispatch,
        setError,
        setLoadingRnbPlaylists,
        error,
        spotifyAccessToken,
        musicGenresToShow[3].id
      );
    }
  }, [spotifyAccessToken]);
  useEffect(() => {
    if (topListPlaylists) {
      setError({ ...error, topListPlaylistsError: null });
    }
    if (hipHopPlaylists) {
      setError({ ...error, hipHopPlaylistsError: null });
    }
    if (electroPlaylists) {
      setError({ ...error, electroPlaylistsError: null });
    }
    if (rnbPlaylists) {
      setError({ ...error, rnbPlaylistsError: null });
    }
  }, [rnbPlaylists, electroPlaylists, hipHopPlaylists, topListPlaylists]);
  const errorMsg = () => {
    if (
      error.electroPlaylistsError === "Request failed with status code 401" ||
      error.hipHopPlaylistsError === "Request failed with status code 401" ||
      error.topListPlaylistsError === "Request failed with status code 401" ||
      error.rnbPlaylistsError === "Request failed with status code 401"
    )
      return "your spotify session has expired";
    else return "something went wrong, please check your network connection!";
  };
  const errorChecking = () => {
    if (
      error.electroPlaylistsError ||
      error.hipHopPlaylistsError ||
      error.topListPlaylistsError ||
      error.rnbPlaylistsError
    ) {
      return <HttpError message={errorMsg()} size={"large"} />;
    }
  };
  return (
    <styled.container>
      {errorChecking()}
      {!error.electroPlaylistsError &&
        !error.hipHopPlaylistsError &&
        !error.rnbPlaylistsError &&
        !error.topListPlaylistsError && (
          <>
            <styled.topListPlaylistsWrapper>
              {loadingTopListPlaylists && (
                <CarouselSkeleton
                  numberOfItemsShown={numberOfItemstoShow}
                  size={"large"}
                />
              )}
              {topListPlaylists === "none" && (
                <styled.Text>No toplist playlists at the moment</styled.Text>
              )}
              {topListPlaylists !== "none" && topListPlaylists && (
                <Carousel
                  dataList={topListPlaylists}
                  headerText="Trending Playlists"
                  type={"playlist"}
                  numberOfItemsShown={numberOfItemstoShow}
                  size="large"
                  navigate={() =>
                    onNavigate(`/music/playlists/${musicGenresToShow[0].id}`)
                  }
                  auto={false}
                />
              )}
            </styled.topListPlaylistsWrapper>
            <styled.electroPlaylistsWrapper>
              {loadingElectroPlaylists && (
                <CarouselSkeleton
                  numberOfItemsShown={numberOfItemstoShow}
                  size={"large"}
                />
              )}
              {electroPlaylists === "none" && (
                <styled.Text>No electro playlists at the moment</styled.Text>
              )}
              {electroPlaylists !== "none" && electroPlaylists && (
                <Carousel
                  dataList={electroPlaylists}
                  headerText="Electro Playlists"
                  type={"playlist"}
                  numberOfItemsShown={numberOfItemstoShow}
                  size="large"
                  navigate={() =>
                    onNavigate(`/music/playlists/${musicGenresToShow[1].id}`)
                  }
                  auto={false}
                />
              )}
            </styled.electroPlaylistsWrapper>
            <styled.hipHopPlaylistsWrapper>
              {loadingHipHopPlaylists && (
                <CarouselSkeleton
                  numberOfItemsShown={numberOfItemstoShow}
                  size={"large"}
                />
              )}
              {hipHopPlaylists === "none" && (
                <styled.Text>No HipHop playlists at the moment</styled.Text>
              )}
              {hipHopPlaylists !== "none" && hipHopPlaylists && (
                <Carousel
                  dataList={hipHopPlaylists}
                  headerText="HipHop Playlists"
                  type={"playlist"}
                  numberOfItemsShown={numberOfItemstoShow}
                  size="large"
                  navigate={() =>
                    onNavigate(`/music/playlists/${musicGenresToShow[2].id}`)
                  }
                  auto={false}
                />
              )}
            </styled.hipHopPlaylistsWrapper>
            <styled.rnbPlaylistsWrapper>
              {loadingRnbPlaylists && (
                <CarouselSkeleton
                  numberOfItemsShown={numberOfItemstoShow}
                  size={"large"}
                />
              )}
              {rnbPlaylists === "none" && (
                <styled.Text>No RNB playlists at the moment</styled.Text>
              )}
              {rnbPlaylists !== "none" && rnbPlaylists && (
                <Carousel
                  dataList={rnbPlaylists}
                  headerText="RNB Playlists"
                  type={"playlist"}
                  numberOfItemsShown={numberOfItemstoShow}
                  size="large"
                  navigate={() =>
                    onNavigate(`/music/playlists/${musicGenresToShow[3].id}`)
                  }
                  auto={false}
                />
              )}
            </styled.rnbPlaylistsWrapper>
          </>
        )}
    </styled.container>
  );
};

export default Music;
