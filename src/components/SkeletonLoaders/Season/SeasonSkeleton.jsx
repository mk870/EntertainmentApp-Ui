import React from "react";
import * as styled from "./SeasonSkeletonStyles";
import ContentSummarySkeleton from "../ContentSummary/ContentSummarySkeleton";

const SeasonSkeleton = () => {
  const dummyEpisodes = [1, 2, 3, 4, 5];
  return (
    <styled.container>
      <ContentSummarySkeleton />
      <styled.ListContainer>
        {dummyEpisodes.map((episode) => (
          <styled.Episode key={episode}>
            <styled.poster></styled.poster>
            <styled.EpisodeDetails>
              <styled.EpisodeDetailsText></styled.EpisodeDetailsText>
              <styled.EpisodeDetailsText></styled.EpisodeDetailsText>
              <styled.row>
                <styled.subText></styled.subText>
                <styled.subText></styled.subText>
                <styled.subText></styled.subText>
              </styled.row>
              <styled.text></styled.text>
              <styled.text></styled.text>
              <styled.text></styled.text>
              <styled.lastText></styled.lastText>
            </styled.EpisodeDetails>
          </styled.Episode>
        ))}
      </styled.ListContainer>
    </styled.container>
  );
};

export default SeasonSkeleton;
