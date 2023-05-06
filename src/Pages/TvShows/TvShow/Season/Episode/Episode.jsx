import React from "react";
import { useLocation, useParams } from "react-router-dom";

import * as styled from "./EpisodeStyles";
import HttpError from "../../../../../HttpServices/Error/HttpError";
import ContentSummary from "../../../../../components/ContentSummary/ContentSummary";
import {
  getCreators,
  getHeader,
  getImage,
  getOverview,
  getReleaseDate,
} from "../../../../../Utils/ContentSummaryFuncs";
import Cast from "../../../../../components/Cast/Cast";
import useTMDB from "../../../../../HttpServices/Hooks/useTMDB";
import ContentSummarySkeleton from "../../../../../components/SkeletonLoaders/ContentSummary/ContentSummarySkeleton";
import CastSkeleton from "../../../../../components/SkeletonLoaders/Cast/CastSkeleton";

const Episode = () => {
  const { episodeNumber } = useParams();
  const location = useLocation();
  const { data, isLoading, error } = useTMDB({
    url: `tv/${location.state.showId}/season/${location.state.seasonNumber}/episode/${episodeNumber}`,
  });
  const castData = useTMDB({
    url: `tv/${location.state.showId}/season/${location.state.seasonNumber}/episode/${episodeNumber}/credits`,
  });
  return (
    <styled.EpisodeWrapper>
      {isLoading && <ContentSummarySkeleton />}
      {error && <HttpError message={error} size="large" />}
      {data && (
        <>
          <ContentSummary
            image={getImage(
              `https://image.tmdb.org/t/p/w500/${data.still_path}`
            )}
            header={getHeader(data.name)}
            releaseDate={getReleaseDate(data.air_date)}
            type={"episode"}
            rating={data.vote_average}
            runtime={`${data.runtime} mins`}
            creators={getCreators(data.crew)}
            overview={getOverview(data.overview)}
            seasonNumber={data.season_number}
            episodeNumber={episodeNumber}
            showName={location.state.showName}
          />
        </>
      )}
      {castData.isLoading && <CastSkeleton type={"tv-show"} />}
      {castData.error && <HttpError message={castData.error} size="large" />}
      {castData.data && (
        <Cast
          actorsList={castData.data.cast}
          type={"tv-show"}
          guestStarsList={castData.data.guest_stars}
        />
      )}
    </styled.EpisodeWrapper>
  );
};

export default Episode;
