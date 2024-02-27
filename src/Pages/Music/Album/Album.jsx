import React, { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

import useSpotify from "HttpServices/Hooks/music/useSpotify";
import HttpError from "HttpServices/Error/HttpError";
import MusicContentSummary from "components/MusicComponents/MusicContentSummary/MusicContentSummary";
import ContentSummarySkeleton from "components/SkeletonLoaders/ContentSummary/ContentSummarySkeleton";
import ToggleableListSkeleton from "components/SkeletonLoaders/ToggleableList/ToggleableListSkeleton";
import ToggleableList from "components/ToggleableList/ToggleableList";
import ArtistsGrid from "components/MusicComponents/ArtistsGrid/ArtistsGrid";
import ArtistListSkeleton from "components/SkeletonLoaders/ArtistList/ArtistListSkeleton";
import Snackbar from "components/Snackbar/Snackbar";
import { Page } from "Css/PageStyles";
import PageHOC from "components/HOCs/Page/PageHOC";

const Album = () => {
  const [albumTracksError, setAlbumTracksError] = useState(null);
  const [albumTracks, setAlbumTracks] = useState(null);
  const [albumTracksLoading, setAlbumTracksLoading] = useState(true);
  const [albumArtistsError, setAlbumArtistsError] = useState(null);
  const [albumArtists, setAlbumArtists] = useState(null);
  const [albumArtistsLoading, setAlbumArtistsLoading] = useState(true);
  const { albumId } = useParams();
  const snackBarRef = useRef(null);
  const spotifyAccessToken = useSelector(
    (state) => state.spotifyAccessToken.value
  );
  const getArtistIds = (tracksList) => {
    const ids = [];
    const albumArtistsObj = {};
    for (let i = 0; i < tracksList.length; i++) {
      for (let j = 0; j < tracksList[i].artists.length; j++) {
        if (tracksList[i].artists[j].name in albumArtistsObj === false) {
          albumArtistsObj[tracksList[i].artists[j].name] =
            tracksList[i].artists[j].id;
        }
      }
    }
    for (const key in albumArtistsObj) {
      ids.push(albumArtistsObj[key]);
    }
    const processedIds = [];
    for (let i = 0; i < ids.length; i++) {
      if (i === ids.length - 1) {
        processedIds.push(ids[i]);
      } else {
        processedIds.push(`${ids[i]},`);
      }
    }
    const idsInString = "".concat(...processedIds);
    return idsInString;
  };
  const artistIds = useCallback((tracks) => getArtistIds(tracks), []);
  const album = useSpotify({ url: `albums/${albumId}` });
  useEffect(() => {
    if (album.data) {
      axios
        .get(
          `https://api.spotify.com/v1/albums/${albumId}/tracks?limit=${album.data.total_tracks}`,
          {
            headers: {
              Authorization: `Bearer ${spotifyAccessToken}`,
            },
          }
        )
        .then((data) => {
          setAlbumTracks(data.data);
          console.log("albumtracks", data.data);
          setAlbumTracksLoading(false);
        })
        .catch((e) => {
          console.log(e.message);
          setAlbumTracksError(
            e.message === "Request failed with status code 401"
              ? "your spotify session has expired"
              : "something went wrong, please check your network connection"
          );
          setAlbumTracksLoading(false);
        });
    }
  }, [album.data, spotifyAccessToken, albumId]);
  useEffect(() => {
    if (albumTracks) {
      axios
        .get(
          `https://api.spotify.com/v1/artists?ids=${artistIds(
            albumTracks.items
          )}`,
          {
            headers: {
              Authorization: `Bearer ${spotifyAccessToken}`,
            },
          }
        )
        .then((data) => {
          setAlbumArtists(data.data);
          console.log("albumArtists", data.data);
          setAlbumArtistsLoading(false);
        })
        .catch((e) => {
          console.log(e.message);
          setAlbumArtistsError(
            e.message === "Request failed with status code 401"
              ? "your spotify session has expired"
              : "something went wrong, please check your network connection"
          );
          setAlbumArtistsLoading(false);
        });
    }
  }, [spotifyAccessToken, artistIds, albumTracks]);
  const addImagesToAlbumTracks = (tracklist, imageList) => {
    const newList = [];
    for (let i = 0; i < tracklist.length; i++) {
      tracklist[i]["album"] = { images: imageList };
      newList.push(tracklist[i]);
    }
    return newList;
  };
  useEffect(() => {
    if (
      album.error === "your spotify session has expired" &&
      snackBarRef.current
    ) {
      snackBarRef.current.showPopup();
    }
  }, [album.error, snackBarRef]);
  return (
    <Page hasError={album.error}>
      {album.isLoading && (
        <>
          <ContentSummarySkeleton />
        </>
      )}
      {album.error && <HttpError message={album.error} size="large" />}
      {album.data && (
        <>
          <MusicContentSummary content={album.data} type="album" />
        </>
      )}
      {albumArtistsLoading && <ArtistListSkeleton size={"large"} />}
      {albumArtistsError && (
        <HttpError message={albumArtistsError} size={"large"} />
      )}
      {albumArtists && (
        <ArtistsGrid
          artistsList={albumArtists.artists}
          showAll={true}
          size={"large"}
          header={"Album Artists"}
        />
      )}
      {albumTracksLoading && <ToggleableListSkeleton numberOfItemsShown={10} />}
      {albumTracksError && (
        <HttpError message={albumTracksError} size={"large"} />
      )}
      {albumTracks && (
        <ToggleableList
          contentList={addImagesToAlbumTracks(
            albumTracks.items,
            album.data.images
          )}
          type={"track"}
          header={"Album Tracks"}
        />
      )}
      {(album.error === "your spotify session has expired" ) && (
        <Snackbar
          message={"your spotify session has expired"}
          type={"getSpotifyAccessToken"}
          ref={snackBarRef}
        />
      )}
    </Page>
  );
};

export default PageHOC(Album);
