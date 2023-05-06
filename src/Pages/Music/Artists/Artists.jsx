import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { top25ArtitstsIdsString } from "./Utils/Utilis";
import ArtistListSkeleton from "../../../components/SkeletonLoaders/ArtistList/ArtistListSkeleton";
import HttpError from "../../../HttpServices/Error/HttpError";
import ArtistsGrid from "../../../components/MusicComponents/ArtistsGrid/ArtistsGrid";
import Snackbar from "../../../components/Snackbar/Snackbar";
import { Page } from "../../../Css/PageStyles";

const Artists = () => {
  const [topArtistsList, setTopArtistsList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const topArtists = useSelector((state) => state.topArtists.value);
  const spotifyAccessToken = useSelector(
    (state) => state.spotifyAccessToken.value
  );
  const snackBarRef = useRef(null);
  useEffect(() => {
    if (error === "your spotify session has expired" && snackBarRef.current) {
      snackBarRef.current.showPopup();
    }
  }, [error, snackBarRef]);
  useEffect(() => {
    setError(null);
    if (!topArtists) {
      setIsLoading(true);
      axios
        .get(`https://api.spotify.com/v1/artists`, {
          params: { ids: top25ArtitstsIdsString },
          headers: {
            Authorization: `Bearer ${spotifyAccessToken}`,
          },
        })
        .then((data) => {
          setTopArtistsList(data.data.artists);
          setIsLoading(false);
        })
        .catch((e) => {
          console.log("upcoming", e);
          setError(
            e.message === "Request failed with status code 401"
              ? "your spotify session has expired"
              : "something went wrong, please check your network connection"
          );
          setIsLoading(false);
        });
    } else {
      setTopArtistsList(topArtists);
    }
  }, [spotifyAccessToken, topArtists]);
  return (
    <Page hasError={error}>
      {isLoading && <ArtistListSkeleton size={"large"} />}
      {error && <HttpError message={error} size={"large"} />}
      {topArtistsList && (
        <ArtistsGrid
          artistsList={topArtistsList}
          showAll={true}
          size={"large"}
          header={"Trending Artists"}
        />
      )}
      {error === "your spotify session has expired" && (
        <Snackbar
          message={"your spotify session has expired"}
          type={"getSpotifyAccessToken"}
          ref={snackBarRef}
        />
      )}
    </Page>
  );
};

export default Artists;
