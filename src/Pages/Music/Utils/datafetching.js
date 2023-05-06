import axios from "axios";
import { addElectroPlaylists } from "../../../Redux/Slices/Content/Music/Playlists/ElectroSlice";
import { addHipHopPlaylists } from "../../../Redux/Slices/Content/Music/Playlists/HipHopSlice";
import { addTopListPlaylists } from "../../../Redux/Slices/Content/Music/Playlists/TopListSlice";
import { addRnBPlaylists } from "../../../Redux/Slices/Content/Music/Playlists/RNBSlice";

export const fetchElectroPlaylists = (
  dispatch,
  setError,
  setLoadingElectroPlaylists,
  error,
  spotifyAccessToken,
  playlistsId
) => {
  setLoadingElectroPlaylists(true);
  axios
    .get(
      `https://api.spotify.com/v1/browse/categories/${playlistsId}/playlists`,
      {
        headers: {
          Authorization: `Bearer ${spotifyAccessToken}`,
        },
      }
    )
    .then((data) => {
      if (data.data.playlists.items === undefined) {
        dispatch(addElectroPlaylists("none"));
        setLoadingElectroPlaylists(false);
      } else {
        dispatch(addElectroPlaylists(data.data.playlists.items));
        setLoadingElectroPlaylists(false);
      }
    })
    .catch((e) => {
      console.log(e.message);
      setError({
        ...error,
        electroPlaylistsError: e.message,
      });
      setLoadingElectroPlaylists(false);
    });
};

export const fetchHipHopPlaylists = (
  dispatch,
  setError,
  setLoadingHipHopPlaylists,
  error,
  spotifyAccessToken,
  playlistsId
) => {
  setLoadingHipHopPlaylists(true);
  axios
    .get(
      `https://api.spotify.com/v1/browse/categories/${playlistsId}/playlists`,
      {
        headers: {
          Authorization: `Bearer ${spotifyAccessToken}`,
        },
      }
    )
    .then((data) => {
      if (data.data.playlists.items === undefined) {
        dispatch(addHipHopPlaylists("none"));
        setLoadingHipHopPlaylists(false);
      } else {
        dispatch(addHipHopPlaylists(data.data.playlists.items));
        setLoadingHipHopPlaylists(false);
      }
    })
    .catch((e) => {
      console.log(e.message);
      setError({
        ...error,
        hipHopPlaylistsError: e.message,
      });
      setLoadingHipHopPlaylists(false);
    });
};

export const fetchtopListPlaylists = (
  dispatch,
  setError,
  setLoadingTopListPlaylists,
  error,
  spotifyAccessToken,
  playlistsId
) => {
  setLoadingTopListPlaylists(true);
  axios
    .get(
      `https://api.spotify.com/v1/browse/categories/${playlistsId}/playlists`,
      {
        headers: {
          Authorization: `Bearer ${spotifyAccessToken}`,
        },
      }
    )
    .then((data) => {
      if (data.data.playlists.items === undefined) {
        dispatch(addTopListPlaylists("none"));
        setLoadingTopListPlaylists(false);
      } else {
        dispatch(addTopListPlaylists(data.data.playlists.items));
        setLoadingTopListPlaylists(false);
      }
    })
    .catch((e) => {
      console.log(e.message);
      setError({
        ...error,
        topListPlaylistsError: e.message,
      });
      setLoadingTopListPlaylists(false);
    });
};

export const fetchRnbPlaylists = (
  dispatch,
  setError,
  setLoadingRnbPlaylists,
  error,
  spotifyAccessToken,
  playlistsId
) => {
  setLoadingRnbPlaylists(true);
  axios
    .get(
      `https://api.spotify.com/v1/browse/categories/${playlistsId}/playlists`,
      {
        headers: {
          Authorization: `Bearer ${spotifyAccessToken}`,
        },
      }
    )
    .then((data) => {
      if (data.data.playlists.items === undefined) {
        dispatch(addRnBPlaylists("none"));
        setLoadingRnbPlaylists(false);
      } else {
        dispatch(addRnBPlaylists(data.data.playlists.items));
        setLoadingRnbPlaylists(false);
      }
    })
    .catch((e) => {
      console.log(e.message);
      setError({
        ...error,
        rnbPlaylistsError:e.message,
      });
      setLoadingRnbPlaylists(false);
    });
};
