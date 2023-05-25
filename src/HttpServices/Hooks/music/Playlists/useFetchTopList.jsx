import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTopListPlaylists } from "Redux/Slices/Content/Music/Playlists/TopListSlice";

const useFetchTopList = () => {
  const [error, setError] = useState(null);
  const topListPlaylists = useSelector((state) => state.topListPlaylists.value);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const spotifyAccessToken = useSelector(
    (state) => state.spotifyAccessToken.value
  );
  useEffect(() => {
    setError(null)
    if (!topListPlaylists) {
      setIsLoading(true);
      axios
        .get(
          `https://api.spotify.com/v1/browse/categories/toplists/playlists`,
          {
            headers: {
              Authorization: `Bearer ${spotifyAccessToken}`,
            },
          }
        )
        .then((data) => {
          if (data.data.playlists.items === undefined) {
            dispatch(addTopListPlaylists("none"));
            setIsLoading(false);
          } else {
            dispatch(addTopListPlaylists(data.data.playlists.items));
            setIsLoading(false);
          }
        })
        .catch((e) => {
          setError(e.message);
          setIsLoading(false);
        });
    }else setIsLoading(false)
  }, [dispatch, spotifyAccessToken, topListPlaylists]);
  return { error, isLoading };
};

export default useFetchTopList;
