import React, { useEffect, useRef } from "react";

import useSpotify from "../../../HttpServices/Hooks/music/useSpotify";
import ToggleableListSkeleton from "../../../components/SkeletonLoaders/ToggleableList/ToggleableListSkeleton";
import HttpError from "../../../HttpServices/Error/HttpError";
import ToggleableList from "../../../components/ToggleableList/ToggleableList";
import Snackbar from "../../../components/Snackbar/Snackbar";
import { Page } from "../../../Css/PageStyles";

const NewAlbums = () => {
  const snackBarRef = useRef(null);
  const latestAlbums = useSpotify({ url: `browse/new-releases?limit=50` });
  useEffect(() => {
    if (
      latestAlbums.error === "your spotify session has expired" &&
      snackBarRef.current
    ) {
      snackBarRef.current.showPopup();
    }
  }, [latestAlbums.error, snackBarRef]);
  return (
    <Page hasError={latestAlbums.error}>
      {latestAlbums.isLoading && (
        <ToggleableListSkeleton numberOfItemsShown={10} />
      )}
      {latestAlbums.error && (
        <HttpError message={latestAlbums.error} size="large" />
      )}
      {latestAlbums.data && (
        <ToggleableList
          contentList={latestAlbums.data.albums.items}
          type={"album"}
          header={"Latest Albums"}
        />
      )}
      {(latestAlbums.error === "your spotify session has expired" ) && (
        <Snackbar
          message={"your spotify session has expired"}
          type={"getSpotifyAccessToken"}
          ref={snackBarRef}
        />
      )}
    </Page>
  );
};

export default NewAlbums;
