import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import * as styled from "./TrackStyles";
import useSpotify from "HttpServices/Hooks/music/useSpotify";
import ContentSummarySkeleton from "components/SkeletonLoaders/ContentSummary/ContentSummarySkeleton";
import ToggleableListSkeleton from "components/SkeletonLoaders/ToggleableList/ToggleableListSkeleton";
import HttpError from "HttpServices/Error/HttpError";
import MusicContentSummary from "components/MusicComponents/MusicContentSummary/MusicContentSummary";
import TrackAlbumCard from "components/MusicComponents/Cards/TrackAlbum/TrackAlbumCard";
import ToggleableList from "components/ToggleableList/ToggleableList";
import CardSkeleton from "components/SkeletonLoaders/Card/CardSkeleton";
import ArtistListSkeleton from "components/SkeletonLoaders/ArtistList/ArtistListSkeleton";
import ArtistsGrid from "components/MusicComponents/ArtistsGrid/ArtistsGrid";
import Snackbar from "components/Snackbar/Snackbar";
import { Page } from "Css/PageStyles";
import PageHOC from "components/HOCs/Page/PageHOC";

const Track = () => {
  const [trackArtistsLoading, setTrackArtistsLoading] = useState(true);
  const [trackArtistsError, setTrackArtistsError] = useState(null);
  const [trackArtists, setTrackArtists] = useState(null);
  const { trackId } = useParams();
  const snackBarRef = useRef(null);
  const screenSize = useSelector((state) => state.screenSize.value);
  const spotifyAccessToken = useSelector(
    (state) => state.spotifyAccessToken.value
  );
  const artistIds = (artistList) => {
    const idsList = [];
    for (let i = 0; i < artistList.length; i++) {
      if (i === artistList.length - 1) idsList.push(artistList[i].id);
      else idsList.push(`${artistList[i].id},`);
    }
    const ids = "".concat(...idsList);
    return ids;
  };
  const track = useSpotify({ url: `tracks/${trackId}` });
  const recommendations = useSpotify({
    url: `recommendations?seed_tracks=${trackId}&limit=80`,
  });
  useEffect(() => {
    if (track.data) {
      axios
        .get(
          `https://api.spotify.com/v1/artists?ids=${artistIds(
            track.data.artists
          )}`,
          {
            headers: {
              Authorization: `Bearer ${spotifyAccessToken}`,
            },
          }
        )
        .then((data) => {
          setTrackArtists(data.data.artists);
          console.log("Artists", data.data.artists);
          setTrackArtistsLoading(false);
        })
        .catch((e) => {
          console.log(e.message);
          setTrackArtistsError(
            e.message === "Request failed with status code 401"
              ? "your spotify session has expired"
              : "something went wrong, please check your network connection"
          );
          setTrackArtistsLoading(false);
        });
    }
  }, [spotifyAccessToken, track.data]);
  useEffect(() => {
    if (
      (track.error === "your spotify session has expired" ) &&
      snackBarRef.current
    ) {
      snackBarRef.current.showPopup();
    }
  }, [track.error, snackBarRef]);
  return (
    <Page hasError={track.error}>
      {track.isLoading && (
        <>
          <ContentSummarySkeleton />
          <styled.albumContainer>
            <CardSkeleton size={screenSize < 600 ? "small" : "large"} />
          </styled.albumContainer>
        </>
      )}
      {track.error && <HttpError message={track.error} size="large" />}
      {track.data && (
        <>
          <MusicContentSummary content={track.data} type="track" />
          {trackArtistsLoading && <ArtistListSkeleton size={"large"} />}
          {trackArtistsError && (
            <HttpError message={trackArtistsError} size="large" />
          )}
          {trackArtists && (
            <ArtistsGrid
              artistsList={trackArtists}
              showAll={true}
              size={"large"}
              header={
                trackArtists.length > 1 ? "Track Artists" : "Track Artist"
              }
            />
          )}
          <styled.albumContainer>
            <styled.header>Album</styled.header>
            <TrackAlbumCard content={track.data.album} type={"album"} />
          </styled.albumContainer>
        </>
      )}
      {recommendations.isLoading && (
        <ToggleableListSkeleton numberOfItemsShown={8} />
      )}
      {recommendations.error && (
        <HttpError message={recommendations.error} size={"large"} />
      )}
      {recommendations.data && (
        <ToggleableList
          contentList={recommendations.data.tracks}
          type={"track"}
          header={"Recommendend Tracks"}
        />
      )}
      {(track.error === "your spotify session has expired" ) && (
        <Snackbar
          message={"your spotify session has expired"}
          type={"getSpotifyAccessToken"}
          ref={snackBarRef}
        />
      )}
    </Page>
  );
};

export default PageHOC(Track);
