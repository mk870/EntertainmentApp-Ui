import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import useSpotify from "../../../HttpServices/Hooks/useSpotify";
import ContentSummarySkeleton from "../../../components/SkeletonLoaders/ContentSummary/ContentSummarySkeleton";
import HttpError from "../../../HttpServices/Error/HttpError";
import MusicContentSummary from "../../../components/MusicComponents/MusicContentSummary/MusicContentSummary";
import ArtistListSkeleton from "../../../components/SkeletonLoaders/ArtistList/ArtistListSkeleton";
import ArtistsGrid from "../../../components/MusicComponents/ArtistsGrid/ArtistsGrid";
import CardGrid from "../../../components/CardGrid/CardGrid";
import CardGridSkeleton from "../../../components/SkeletonLoaders/CardGrid/CardGridSkeleton";
import Snackbar from "../../../components/Snackbar/Snackbar";
import { Page } from "../../../Css/PageStyles";

const Artist = () => {
  const { artistId } = useParams();
  const snackBarRef = useRef(null);
  const artist = useSpotify({ url: `artists/${artistId}` });
  const artistTopTracks = useSpotify({ url: `artists/${artistId}/top-tracks?market=ES` });
  const artistAlbums = useSpotify({ url: `artists/${artistId}/albums` });
  const relatedArtists = useSpotify({
    url: `artists/${artistId}/related-artists`,
  });
  useEffect(() => {
    if (
      artist.error === "your spotify session has expired" &&
      snackBarRef.current
    ) {
      snackBarRef.current.showPopup();
    }
  }, [artist.error, snackBarRef]);
  return (
    <Page hasError={artist.error}>
      {artist.isLoading && <ContentSummarySkeleton />}
      {artist.error && <HttpError message={artist.error} size="large" />}
      {artist.data && <MusicContentSummary content={artist.data} type="artist" />}
      {artistTopTracks.isLoading && (
        <CardGridSkeleton numberOfItemsShown={[1,2,3,4,5,6,7,8]} />
      )}
      {artistTopTracks.error && (
        <HttpError message={artistTopTracks.error} size="large" />
      )}
      {artistTopTracks.data && (
        <CardGrid
          contentList={artistTopTracks.data.tracks}
          type={"track"}
          header={"Artist's Top Tracks"}
        />
      )}
      {artistAlbums.isLoading && (
        <CardGridSkeleton numberOfItemsShown={[1,2,3,4,5,6,7,8]} />
      )}
      {artistAlbums.error && (
        <HttpError message={artistAlbums.error} size="large" />
      )}
      {artistAlbums.data && (
        <CardGrid
          contentList={artistAlbums.data.items}
          type={"album"}
          header={"Artist's Albums"}
        />
      )}
      {relatedArtists.isLoading && <ArtistListSkeleton size={"large"} />}
      {relatedArtists.error && (
        <HttpError message={relatedArtists.error} size="large" />
      )}
      {relatedArtists.data && (
        <ArtistsGrid
          artistsList={relatedArtists.data.artists}
          showAll={true}
          size={"large"}
          header={"Related Artists"}
        />
      )}
      {(artist.error === "your spotify session has expired" ) && (
        <Snackbar
          message={"your spotify session has expired"}
          type={"getSpotifyAccessToken"}
          ref={snackBarRef}
        />
      )}
    </Page>
  );
};

export default Artist;
