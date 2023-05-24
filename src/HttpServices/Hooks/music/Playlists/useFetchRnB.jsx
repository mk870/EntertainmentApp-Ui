import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addRnBPlaylists } from "Redux/Slices/Content/Music/Playlists/RNBSlice";

const useFetchRnB = () => {
  const [error, setError] = useState(null);
  const rnbPlaylists = useSelector((state) => state.rnbPlaylists.value);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const spotifyAccessToken = useSelector(
    (state) => state.spotifyAccessToken.value
  );
  useEffect(() => {
    setError(null)
    if (!rnbPlaylists) {
      setIsLoading(true);
      axios
        .get(
          `https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFEZPnFQSFB1T/playlists`,
          {
            headers: {
              Authorization: `Bearer ${spotifyAccessToken}`,
            },
          }
        )
        .then((data) => {
          if (data.data.playlists.items === undefined) {
            dispatch(addRnBPlaylists("none"));
            setIsLoading(false);
          } else {
            dispatch(addRnBPlaylists(data.data.playlists.items));
            setIsLoading(false);
          }
        })
        .catch((e) => {
          setError(e.message);
          setIsLoading(false);
        });
    }
  }, [dispatch, rnbPlaylists, spotifyAccessToken]);
  return { error, isLoading };
};

export default useFetchRnB;
