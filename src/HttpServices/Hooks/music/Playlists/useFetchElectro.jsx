import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addElectroPlaylists } from "Redux/Slices/Content/Music/Playlists/ElectroSlice";

const useFetchElectro = () => {
  const [error, setError] = useState(null);
  const electroPlaylists = useSelector((state) => state.electroPlaylists.value);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const spotifyAccessToken = useSelector(
    (state) => state.spotifyAccessToken.value
  );
  useEffect(() => {
    setError(null)
    if (!electroPlaylists) {
      setIsLoading(true);
      axios
        .get(
          `https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists`,
          {
            headers: {
              Authorization: `Bearer ${spotifyAccessToken}`,
            },
          }
        )
        .then((data) => {
          if (data.data.playlists.items === undefined) {
            dispatch(addElectroPlaylists("none"));
            setIsLoading(false);
          } else {
            dispatch(addElectroPlaylists(data.data.playlists.items));
            setIsLoading(false);
          }
        })
        .catch((e) => {
          setError(e.message);
          setIsLoading(false);
        });
    }else setIsLoading(false)
  }, [dispatch, electroPlaylists, spotifyAccessToken]);
  return { error, isLoading };
};

export default useFetchElectro;
