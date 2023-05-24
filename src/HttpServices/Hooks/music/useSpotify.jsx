
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const useSpotify = ({ url }) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const spotifyAccessToken = useSelector(
    (state) => state.spotifyAccessToken.value
  );
  useEffect(() => {
    setData(null)
    setError(null)
    axios
      .get(`https://api.spotify.com/v1/${url}`, {
        headers: {
          Authorization: `Bearer ${spotifyAccessToken}`,
        },
      })
      .then((data) => {
        setData(data.data);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(
          e.message === "Request failed with status code 401"
            ? "your spotify session has expired"
            : "something went wrong, please check your network connection"
        );
        setIsLoading(false);
      });
  }, [url,spotifyAccessToken]);
  return { data, isLoading, error };
};

export default useSpotify;
