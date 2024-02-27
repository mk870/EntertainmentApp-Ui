/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as styled from "./MusicStyles";
import { itemsShownPerScreenSize } from "components/Carousel/Utils/utils";
import HttpError from "HttpServices/Error/HttpError";
import CarouselSkeleton from "components/SkeletonLoaders/Carousel/CarouselSkeleton";
import Carousel from "components/Carousel/Carousel";
import withSpotifyNotification from "components/HOCs/SpotifyHoc";
import useFetchElectro from "HttpServices/Hooks/music/Playlists/useFetchElectro";
import useFetchHipHop from "HttpServices/Hooks/music/Playlists/useFetchHipHop";
import useFetchTopList from "HttpServices/Hooks/music/Playlists/useFetchTopList";
import useFetchRnB from "HttpServices/Hooks/music/Playlists/useFetchRnB";

const Music = ({setGetSpotifyAccessToken}) => {
  const electroPlaylists = useSelector((state) => state.electroPlaylists.value);
  const hipHopPlaylists = useSelector((state) => state.hipHopPlaylists.value);
  const rnbPlaylists = useSelector((state) => state.rnbPlaylists.value);
  const topListPlaylists = useSelector((state) => state.topListPlaylists.value);
  const screenSize = useSelector((state) => state.screenSize.value);
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
  const electro = useFetchElectro()
  const hipHop = useFetchHipHop()
  const topList = useFetchTopList()
  const rnb = useFetchRnB()
  const errorMsg = () => {
    if (
      electro.error === "Request failed with status code 401" ||
      hipHop.error === "Request failed with status code 401" ||
      topList.error === "Request failed with status code 401" ||
      rnb.error === "Request failed with status code 401"
    ){
      setGetSpotifyAccessToken(true)
      return "your spotify session has expired";
    }
    else return "something went wrong, please check your network connection!";
  };
  const errorChecking = () => {
    if (
      electro.error ||
      hipHop.error ||
      topList.error ||
      rnb.error
    ) {
      return <HttpError message={errorMsg()} size={"large"} />;
    }
  };
  return (
    <styled.container>
      {errorChecking()}
      {!hipHop.error &&
        !rnb.error &&
        !electro.error &&
        !topList.error && (
          <>
            <styled.topListPlaylistsWrapper>
              {topList.isLoading && !topListPlaylists && (
                <CarouselSkeleton
                  numberOfItemsShown={numberOfItemstoShow}
                  size={"large"}
                />
              )}
              {topListPlaylists === "none" && (
                <styled.Text>No toplist playlists at the moment</styled.Text>
              )}
              {topListPlaylists !== "none" && topListPlaylists && !topList.isLoading &&(
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
              {electro.isLoading && !electroPlaylists && (
                <CarouselSkeleton
                  numberOfItemsShown={numberOfItemstoShow}
                  size={"large"}
                />
              )}
              {electroPlaylists === "none" && (
                <styled.Text>No electro playlists at the moment</styled.Text>
              )}
              {electroPlaylists !== "none" && electroPlaylists && !electro.isLoading &&(
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
              {hipHop.isLoading && (
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
              {rnb.isLoading && (
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

export default withSpotifyNotification(Music);
