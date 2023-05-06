/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import * as styled from "./SeasonStyles";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AiFillStar, AiOutlineCalendar } from "react-icons/ai";
import { BiTime } from "react-icons/bi";

import HttpError from "../../../../HttpServices/Error/HttpError";
import ContentSummary from "../../../../components/ContentSummary/ContentSummary";
import {
  getHeader,
  getImage,
  getOverview,
  getReleaseDate,
} from "../../../../Utils/ContentSummaryFuncs";
import useTMDB from "../../../../HttpServices/Hooks/useTMDB";
import SeasonSkeleton from "../../../../components/SkeletonLoaders/Season/SeasonSkeleton";

const Season = () => {
  const { seasonNumber } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const onNavigate = (showId, seasonNumber, episodeNumber) => {
    navigate(`/tv-show/season/episode/${episodeNumber}`, {
      state: {
        showId,
        seasonNumber,
        showName: location.state.showName,
      },
    });
  };
  const url = `tv/${location.state.showId}/season/${seasonNumber}`;
  const { data, isLoading, error } = useTMDB({ url });
  const iconSize = 18;

  return (
    <styled.SeasonWrapper>
      {isLoading && <SeasonSkeleton />}
      {error && <HttpError message={error} size="large" />}
      {data && (
        <>
          <ContentSummary
            image={getImage(
              `https://image.tmdb.org/t/p/w500/${data.poster_path}`
            )}
            header={getHeader(data.name)}
            releaseDate={getReleaseDate(data.air_date)}
            type={"season"}
            rating={data.episodes[0].vote_average}
            runtime={`${data.episodes[0].runtime} mins`}
            episodes={data.episodes.length}
            overview={getOverview(data.overview)}
          />
          <styled.ListContainer>
            {data.episodes.map((episode) => (
              <styled.Episode
                key={episode.id}
                onClick={() =>
                  onNavigate(
                    episode.show_id,
                    episode.season_number,
                    episode.episode_number
                  )
                }
              >
                <styled.poster
                  src={`https://image.tmdb.org/t/p/w500/${episode.still_path}`}
                  alt="poster"
                />
                <styled.EpisodeDetails>
                  <styled.headerText>{`Episode ${episode.episode_number}`}</styled.headerText>
                  <styled.text>{episode.name}</styled.text>
                  <styled.row>
                    <styled.subContainer>
                      <AiOutlineCalendar size={iconSize} />
                      <styled.subHeaderText>
                        {episode.air_date}
                      </styled.subHeaderText>
                    </styled.subContainer>
                    <styled.subContainer>
                      <BiTime size={iconSize} />
                      <styled.subHeaderText>{`${episode.runtime} mins`}</styled.subHeaderText>
                    </styled.subContainer>
                    <styled.subContainer>
                      <AiFillStar size={iconSize} color={"gold"} />
                      <styled.subHeaderText>
                        {episode.vote_average}
                      </styled.subHeaderText>
                    </styled.subContainer>
                  </styled.row>
                  <styled.text>{episode.overview}</styled.text>
                </styled.EpisodeDetails>
              </styled.Episode>
            ))}
          </styled.ListContainer>
        </>
      )}
    </styled.SeasonWrapper>
  );
};

export default Season;
