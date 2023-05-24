import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import useSpotify from "../../../../HttpServices/Hooks/music/useSpotify";
import HttpError from "../../../../HttpServices/Error/HttpError";
import Snackbar from "../../../../components/Snackbar/Snackbar";
import { Page } from "../../../../Css/PageStyles";
import ContentSummarySkeleton from "components/SkeletonLoaders/ContentSummary/ContentSummarySkeleton";
import ToggleableListSkeleton from "components/SkeletonLoaders/ToggleableList/ToggleableListSkeleton";
import MusicContentSummary from "components/MusicComponents/MusicContentSummary/MusicContentSummary";
import ToggleableList from "components/ToggleableList/ToggleableList";

const Playlist = () => {
  const { playlistId } = useParams();
  const snackBarRef = useRef(null);
  const { data, isLoading, error } = useSpotify({
    url: `playlists/${playlistId}`,
  });
  const reArrangeList = (tracks)=>{
    const newList = []
    for (let i = 0; i < tracks.length; i++) {
      newList.push(tracks[i].track)
    }
    return newList
  }
  useEffect(() => {
    if (
      error === "your spotify session has expired" &&
      snackBarRef.current
    ) {
      snackBarRef.current.showPopup();
    }
  }, [error, snackBarRef]);
  return (
    <Page hasError={error}>
      {isLoading && (
        <>
          <ContentSummarySkeleton />
          <ToggleableListSkeleton numberOfItemsShown={12} />
        </>
      )}
      {error && <HttpError message={error} size="large" />}
      {data && (
        <>
          <MusicContentSummary content={data} type="playlist" />
          <ToggleableList
            contentList={reArrangeList(data.tracks.items)}
            type={"track"}
            header={"Playlist Tracks"}
          />
        </>
      )}
      {(error === "your spotify session has expired" ) && (
        <Snackbar
          message={"your spotify session has expired"}
          type={"getSpotifyAccessToken"}
          ref={snackBarRef}
        />
      )}
    </Page>
  );
};

export default Playlist;
