import axios from "axios";

import {
  moviesPlayingNowURL,
  tvShowsAiringTodayURL,
  tvShowsOnAirURL,
  upComingMoviesURL,
} from "./urls";
import { addUpComingMovies } from "Redux/Slices/Content/Movies/UpComingSlice";
import { addTvShowsOnAir } from "Redux/Slices/Content/TvShows/onAirSlice";
import { addTvShowsAiringToday } from "Redux/Slices/Content/TvShows/airingTodaySlice";
import { addMoviesPlayingNow } from "Redux/Slices/Content/Movies/NowPlayingSlice";
import { addTopArtists } from "Redux/Slices/Content/Music/Artists/TopArtistsSlice";
import { addLatestAlbums } from "Redux/Slices/Content/Music/LatestAlbums/LatestAlbumsSlice";
import { top25ArtistsIdsString } from "Pages/Music/Artists/Utils/Utilis";

export const fetchUpComingMovies = (
  upComingMovies,
  dispatch,
  setLoading,
  loading,
  setErrors,
  errors
) => {
  if (!upComingMovies) {
    setLoading({
      ...loading,
      upComingMovies: true,
    });
    axios
      .get(upComingMoviesURL)
      .then((data) => {
        dispatch(addUpComingMovies(data.data.results));
        setLoading({
          ...loading,
          upComingMovies: false,
        });
      })
      .catch((e) => {
        setErrors({
          ...errors,
          upComingMoviesError: "network error, could not load resource",
        });
        setLoading({
          ...loading,
          upComingMovies: false,
        });
      });
  }
};

export const fetchTvShowsOnAir = (
  tvShowsOnAir,
  dispatch,
  setLoading,
  loading,
  setErrors,
  errors
) => {
  if (!tvShowsOnAir) {
    setLoading({
      ...loading,
      tvShowsOnAir: true,
    });
    axios
      .get(tvShowsOnAirURL)
      .then((data) => {
        dispatch(addTvShowsOnAir(data.data.results));
        setLoading({
          ...loading,
          tvShowsOnAir: false,
        });
      })
      .catch((e) => {
        setErrors({
          ...errors,
          tvShowsOnAirError: "network error, could not load resource",
        });
        setLoading({
          ...loading,
          tvShowsOnAir: false,
        });
      });
  }
};

export const fetchTvShowsAiringToday = (
  tvShowsAiringToday,
  dispatch,
  setLoading,
  loading,
  setErrors,
  errors
) => {
  if (!tvShowsAiringToday) {
    setLoading({
      ...loading,
      tvShowsAiringToday: true,
    });
    axios
      .get(tvShowsAiringTodayURL)
      .then((data) => {
        dispatch(addTvShowsAiringToday(data.data.results));
        setLoading({
          ...loading,
          tvShowsAiringToday: false,
        });
      })
      .catch((e) => {
        setErrors({
          ...errors,
          tvShowsAiringTodayError: "network error, could not load resource",
        });
        setLoading({
          ...loading,
          tvShowsAiringToday: false,
        });
      });
  }
};

export const fetchMoviesPlayingNow = (
  moviesPlayingNow,
  dispatch,
  setLoading,
  loading,
  setErrors,
  errors
) => {
  if (!moviesPlayingNow) {
    setLoading({
      ...loading,
      moviesPlayingNow: true,
    });
    axios
      .get(moviesPlayingNowURL)
      .then((data) => {
        dispatch(addMoviesPlayingNow(data.data.results));
        setLoading({
          ...loading,
          moviesPlayingNow: false,
        });
      })
      .catch((e) => {
        setErrors({
          ...errors,
          moviesPlayingNowError: "network error, could not load resource",
        });
        setLoading({
          ...loading,
          moviesPlayingNow: false,
        });
      });
  }
};

export const fetchTopArtists = (
  topArtists,
  dispatch,
  setLoading,
  loading,
  setErrors,
  errors,
  spotifyAccessToken
) => {
  if (!topArtists) {
    setLoading({
      ...loading,
      topArtists: true,
    });
    axios
      .get(`https://api.spotify.com/v1/artists`, {
        params: { ids: top25ArtistsIdsString },
        headers: {
          Authorization: `Bearer ${spotifyAccessToken}`,
        },
      })
      .then((data) => {
        dispatch(addTopArtists(data.data.artists));
        setLoading({
          ...loading,
          topArtists: false,
        });
      })
      .catch(() => {
        setErrors({
          ...errors,
          topArtistsError: "network error, could not load resource",
        });
        setLoading({
          ...loading,
          topArtists: false,
        });
      });
  }
};

export const fetchLatestAlbums = (
  latestAlbums,
  dispatch,
  setLoading,
  loading,
  setErrors,
  errors,
  spotifyAccessToken,
) => {
  if (!latestAlbums) {
    setLoading({
      ...loading,
      latestAlbums: true,
    });
    axios
      .get(`https://api.spotify.com/v1/browse/new-releases?limit=50`, {
        headers: {
          Authorization: `Bearer ${spotifyAccessToken}`,
        },
      })
      .then((data) => {
        dispatch(addLatestAlbums(data.data.albums.items));
        setLoading({
          ...loading,
          latestAlbums: false,
        });
      })
      .catch((e) => {
        if (e.message === "Request failed with status code 401") {
          setErrors({
            ...errors,
            latestAlbumsError: "your spotify session has expired",
          });
          setLoading({
            ...loading,
            latestAlbums: false,
          });
        } else {
          setErrors({
            ...errors,
            latestAlbumsError:
              "something went wrong, please check your network connection",
          });
          setLoading({
            ...loading,
            latestAlbums: false,
          });
        }
      });
  }
};
