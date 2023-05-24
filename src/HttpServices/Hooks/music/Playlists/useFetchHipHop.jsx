import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addHipHopPlaylists } from "Redux/Slices/Content/Music/Playlists/HipHopSlice";

const useFetchHipHop = () => {
  const [error, setError] = useState(null);
  const hipHopPlaylists = useSelector((state) => state.hipHopPlaylists.value);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const spotifyAccessToken = useSelector(
    (state) => state.spotifyAccessToken.value
  );
  useEffect(() => {
    setError(null);
    if (!hipHopPlaylists) {
      setIsLoading(true);
      axios
        .get(
          `https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists`,
          {
            headers: {
              Authorization: `Bearer ${spotifyAccessToken}`,
            },
          }
        )
        .then((data) => {
          if (data.data.playlists.items === undefined) {
            dispatch(addHipHopPlaylists("none"));
            setIsLoading(false);
          } else {
            dispatch(addHipHopPlaylists(data.data.playlists.items));
            setIsLoading(false);
          }
        })
        .catch((e) => {
          setError(e.message);
          setIsLoading(false);
        });
    }
  }, [dispatch, hipHopPlaylists, spotifyAccessToken]);
  return { error, isLoading };
};

export default useFetchHipHop;
