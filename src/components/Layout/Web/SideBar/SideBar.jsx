/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import HttpError from "../../../../HttpServices/Error/HttpError";
import Carousel from "../../../Carousel/Carousel";
import UserDetails from "../../../UserDetails/UserDetails";
import Genres from "./Genres/Genres";
import SearchBar from "./SearchBar/SearchBar";
import * as styled from "./SideBarStyles";
import {
  fetchLatestAlbums,
  fetchMoviesPlayingNow,
  fetchTopArtists,
  fetchTvShowsAiringToday,
  fetchTvShowsOnAir,
  fetchUpComingMovies,
} from "./Utils/dataFetching";
import CarouselSkeleton from "../../../SkeletonLoaders/Carousel/CarouselSkeleton";
import ArtistsGrid from "../../../MusicComponents/ArtistsGrid/ArtistsGrid";
import ArtistListSkeleton from "../../../SkeletonLoaders/ArtistList/ArtistListSkeleton";

const SideBar = () => {
  const [showMoreGenres, setShowMoreGenres] = useState(false);
  const [fetchErrors, setFetchErrors] = useState({
    moviesPlayingNowError: null,
    upComingMoviesError: null,
    tvShowsOnAirError: null,
    tvShowsAiringTodayError: null,
    topArtistsError: null,
    latestAlbumsError: null,
  });
  const [loading, setLoading] = useState({
    upComingMovies: false,
    moviesPlayingNow: false,
    tvShowsAiringToday: false,
    tvShowsOnAir: false,
    topArtists: false,
    latestAlbums: false,
  });
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const upComingMovies = useSelector((state) => state.upComingMovies.value);
  const moviesPlayingNow = useSelector((state) => state.moviesPlayingNow.value);
  const tvShowsOnAir = useSelector((state) => state.tvShowsOnAir.value);
  const topArtists = useSelector((state) => state.topArtists.value);
  const latestAlbums = useSelector((state) => state.latestAlbums.value);
  const spotifyAccessToken = useSelector(
    (state) => state.spotifyAccessToken.value
  );
  const tvShowsAiringToday = useSelector(
    (state) => state.tvShowsAiringToday.value
  );
  const onNavigate = (route) => {
    navigate(`${route}`);
  };
  useEffect(() => {
    if (pathname === "/") {
      fetchMoviesPlayingNow(
        moviesPlayingNow,
        dispatch,
        setLoading,
        loading,
        setFetchErrors,
        fetchErrors
      );
    } else if (pathname === "/tv-shows") {
      fetchTvShowsAiringToday(
        tvShowsAiringToday,
        dispatch,
        setLoading,
        loading,
        setFetchErrors,
        fetchErrors
      );
    } else if (pathname === "/music") {
      fetchTopArtists(
        topArtists,
        dispatch,
        setLoading,
        loading,
        setFetchErrors,
        fetchErrors,
        spotifyAccessToken
      );
    }
  }, [pathname]);
  useEffect(() => {
    if (pathname === "/") {
      fetchUpComingMovies(
        upComingMovies,
        dispatch,
        setLoading,
        loading,
        setFetchErrors,
        fetchErrors
      );
    } else if (pathname === "/tv-shows") {
      fetchTvShowsOnAir(
        tvShowsOnAir,
        dispatch,
        setLoading,
        loading,
        setFetchErrors,
        fetchErrors
      );
    } else if (pathname === "/music") {
      fetchLatestAlbums(
        latestAlbums,
        dispatch,
        setLoading,
        loading,
        setFetchErrors,
        fetchErrors,
        spotifyAccessToken,
      );
    }
  }, [pathname, spotifyAccessToken]);
  useEffect(() => {
    if (latestAlbums) {
      setFetchErrors({
        ...fetchErrors,
        latestAlbumsError: null,
      });
    }
  }, [latestAlbums]);
  return (
    <styled.SidebarWrapper>
      <UserDetails />
      <styled.container>
        <SearchBar />
      </styled.container>
      <styled.container>
        <Genres
          showMoreGenres={showMoreGenres}
          setShowMoreGenres={setShowMoreGenres}
        />
      </styled.container>
      {pathname === "/" && !showMoreGenres && (
        <>
          {upComingMovies && (
            <Carousel
              dataList={upComingMovies}
              headerText="Up coming"
              type="movie"
              numberOfItemsShown={1}
              size="small"
              navigate={() => onNavigate("/movies/up-coming")}
              auto={true}
            />
          )}
          {fetchErrors.upComingMoviesError && (
            <HttpError message={fetchErrors.upComingMoviesError} size="small" />
          )}
          {loading.upComingMovies && (
            <CarouselSkeleton numberOfItemsShown={1} size={"small"} />
          )}
          {moviesPlayingNow && (
            <Carousel
              dataList={moviesPlayingNow}
              headerText="Now playing"
              type="movie"
              numberOfItemsShown={1}
              size="small"
              navigate={() => onNavigate("/movies/playing-now")}
              auto={true}
            />
          )}
          {fetchErrors.moviesPlayingNowError && (
            <HttpError
              message={fetchErrors.moviesPlayingNowError}
              size="small"
            />
          )}
          {loading.moviesPlayingNow && (
            <CarouselSkeleton numberOfItemsShown={1} size={"small"} />
          )}
        </>
      )}
      {pathname === "/tv-shows" && !showMoreGenres && (
        <>
          {tvShowsAiringToday && (
            <Carousel
              dataList={tvShowsAiringToday}
              headerText="Airing today"
              type="tv-show"
              numberOfItemsShown={1}
              size="small"
              navigate={() => onNavigate("/tv-shows/airing-today")}
              auto={true}
            />
          )}
          {fetchErrors.tvShowsAiringTodayError && (
            <HttpError
              message={fetchErrors.tvShowsAiringTodayError}
              size="small"
            />
          )}
          {loading.tvShowsAiringToday && (
            <CarouselSkeleton numberOfItemsShown={1} size={"small"} />
          )}
          {tvShowsOnAir && (
            <Carousel
              dataList={tvShowsOnAir}
              headerText="On air"
              type="tv-show"
              numberOfItemsShown={1}
              size="small"
              navigate={() => onNavigate("/tv-shows/on-air")}
              auto={true}
            />
          )}
          {fetchErrors.tvShowsOnAirError && (
            <HttpError message={fetchErrors.tvShowsOnAirError} size="small" />
          )}
          {loading.tvShowsOnAir && (
            <CarouselSkeleton numberOfItemsShown={1} size={"small"} />
          )}
        </>
      )}
      {pathname === "/music" && !showMoreGenres && (
        <>
          {loading.topArtists && <ArtistListSkeleton size={"small"} />}
          {topArtists && (
            <ArtistsGrid
              artistsList={topArtists}
              size={"small"}
              showAll={false}
              header={"Trending Artists"}
            />
          )}
          {fetchErrors.topArtistsError && (
            <HttpError message={fetchErrors.topArtistsError} size={"small"} />
          )}
          {latestAlbums && (
            <Carousel
              dataList={latestAlbums}
              headerText="Latest Albums"
              type="album"
              numberOfItemsShown={1}
              size="small"
              navigate={() => onNavigate("/music/albums/new-releases")}
              auto={true}
            />
          )}
          {fetchErrors.latestAlbumsError && (
            <HttpError message={fetchErrors.latestAlbumsError} size="small" />
          )}
          {loading.latestAlbums && (
            <CarouselSkeleton numberOfItemsShown={1} size={"small"} />
          )}
        </>
      )}
    </styled.SidebarWrapper>
  );
};

export default SideBar;
