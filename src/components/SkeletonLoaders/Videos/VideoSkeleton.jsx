import React from "react";
import * as styled from "./VideoSkeletonStyles";

const VideoSkeleton = () => {
  const dummyVideos = [1, 2, 3, 4];
  return (
    <styled.videoContainer>
      <styled.videoFrameContainer>
        <styled.videoFrame></styled.videoFrame>
        <styled.videoDescription>
          <styled.videoTitle></styled.videoTitle>
          <styled.videoText></styled.videoText>
          <styled.videoText></styled.videoText>
          <styled.videoText></styled.videoText>
          <styled.videoLastText></styled.videoLastText>
        </styled.videoDescription>
      </styled.videoFrameContainer>
      <styled.videoList>
        {dummyVideos.map((video) => (
          <styled.videoListItem key={video}>
            <styled.videoListItemPoster></styled.videoListItemPoster>
            <styled.videoListItemDetailsContainer>
              <styled.videoTitle></styled.videoTitle>
              <styled.videoText></styled.videoText>
              <styled.videoText></styled.videoText>
            </styled.videoListItemDetailsContainer>
          </styled.videoListItem>
        ))}
      </styled.videoList>
    </styled.videoContainer>
  );
};

export default VideoSkeleton;
