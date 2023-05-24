import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import useSpotify from "../../../HttpServices/Hooks/music/useSpotify";
import CardGridSkeleton from "../../../components/SkeletonLoaders/CardGrid/CardGridSkeleton";
import HttpError from "../../../HttpServices/Error/HttpError";
import CardGrid from "../../../components/CardGrid/CardGrid";
import Snackbar from "../../../components/Snackbar/Snackbar";
import { Page } from "../../../Css/PageStyles";

const Playlists = () => {
  const { genreId } = useParams();
  const snackBarRef = useRef(null);
  const musicGenres = useSelector((state) => state.musicGenres.value);
  const { data, isLoading, error } = useSpotify({
    url: `browse/categories/${genreId}/playlists`,
  });
  const header = () => {
    for (let i = 0; i < musicGenres.length; i++) {
      if (musicGenres[i].id === genreId)
        return `${musicGenres[i].name} Playlist`;
    }
  };
  useEffect(() => {
    if (error === "your spotify session has expired" && snackBarRef.current) {
      snackBarRef.current.showPopup();
    }
  }, [error, snackBarRef]);
  return (
    <Page hasError={error}>
      {isLoading && <CardGridSkeleton />}
      {error && <HttpError message={error} size="large" />}
      {!error && !isLoading && data && (
        <CardGrid
          contentList={data.playlists.items}
          header={header()}
          type={"playlist"}
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

export default Playlists;
