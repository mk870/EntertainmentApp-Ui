import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

import * as styled from "./VideoStyles";
import HttpError from "../../HttpServices/Error/HttpError";
import { cleanTextSnippets, youtubeKey } from "../../Utils/utils";
import VideoSkeleton from "../../components/SkeletonLoaders/Videos/VideoSkeleton";

const Video = () => {
  const { type } = useParams();
  const { state } = useLocation();
  const [error, setError] = useState(null);
  const [allVideos, setAllVideos] = useState(null);
  const [videoPlayingNow, setVideoPlayingNow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${state.videoQueryString} ${type}&key=${youtubeKey}`
      )
      .then((data) => {
        setAllVideos(data.data.items);
        setVideoPlayingNow(data.data.items[0]);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
        setError("something went wrong, please check your network connection");
        setIsLoading(false);
      });
  }, [state.videoQueryString, type]);
  const getDate = (date) => {
    return date.split("T")[0];
  };
  const videoList = () => {
    return allVideos.filter(
      (value) => value.id.videoId !== videoPlayingNow.id.videoId
    );
  };
  return (
    <styled.container>
      {isLoading && <VideoSkeleton />}
      {error && <HttpError message={error} size={"large"} />}
      {allVideos && videoPlayingNow && (
        <styled.videoContainer>
          <styled.videoFrameContainer>
            <styled.videoFrame
              src={`https://www.youtube.com/embed/${videoPlayingNow.id.videoId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <styled.videoDescription>
              <styled.videoTitle>
                {cleanTextSnippets(videoPlayingNow.snippet.title)}
              </styled.videoTitle>
              <styled.videoText>
                {cleanTextSnippets(videoPlayingNow.snippet.channelTitle)}
              </styled.videoText>
              <styled.videoText>
                {getDate(videoPlayingNow.snippet.publishedAt)}
              </styled.videoText>
              <styled.videoText>
                {cleanTextSnippets(videoPlayingNow.snippet.description)}
              </styled.videoText>
            </styled.videoDescription>
          </styled.videoFrameContainer>
          <styled.videoList>
            {videoList().map((video) => (
              <styled.videoListItem
                key={video.id.videoId}
                onClick={() => setVideoPlayingNow(video)}
              >
                <styled.videoListItemPoster
                  alt={video.snippet.title}
                  src={video.snippet.thumbnails.medium.url}
                />
                <styled.videoListItemDetailsContainer>
                  <styled.videoTitle>
                    {cleanTextSnippets(video.snippet.title)}
                  </styled.videoTitle>
                  <styled.videoText>
                    {cleanTextSnippets(video.snippet.channelTitle)}
                  </styled.videoText>
                  <styled.videoText>
                    {getDate(video.snippet.publishedAt)}
                  </styled.videoText>
                </styled.videoListItemDetailsContainer>
              </styled.videoListItem>
            ))}
          </styled.videoList>
        </styled.videoContainer>
      )}
    </styled.container>
  );
};

export default Video;
