/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addSpotifyAccessToken } from "../../../Redux/Slices/Content/Music/Token/SpotifyAccessToken";

const useFetchSpotifyAccessToken = () => {
  const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
  const [spotifyAccessTokenError,setSpotifyAccessTokenError] = useState(null)
  const dispatch = useDispatch()
  useEffect(() => {
    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      body:
        "grant_type=client_credentials&client_id=" +
        client_id +
        "&client_secret=" +
        client_secret,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch(addSpotifyAccessToken(response.access_token));
      })
      .catch((e) => {
        setSpotifyAccessTokenError(e.message)
      });
  },[])
  return{spotifyAccessTokenError}
};

export default useFetchSpotifyAccessToken;
