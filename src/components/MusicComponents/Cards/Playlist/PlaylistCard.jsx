import React from "react";
import { FaSpotify } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import * as styled from "./PlaylistCardStyles";
import emptyPlaylistPoster from "../../../../Assets/empty_playlist_poster.jpg";

const PlaylistCard = ({
  content,
  size,
  isInCarousel,
  animationTime,
  animationDistance,
  leftCarouselMovement,
  rightCarouselMovement,
}) => {
  const navigate = useNavigate();
  const onNavigate = (e, id) => {
    e.stopPropagation();
    navigate(`/music/playlist/${id}`);
  };
  const getPoster = () => {
    if (content.images[0]?.url) {
      return content.images[0].url;
    } else return emptyPlaylistPoster;
  };
  const getTracksTotal = () => {
    if (content.tracks?.total) return content.tracks.total;
    else return "---";
  };
  return (
    <styled.CardWrapper
      size={size}
      onClick={(e) => onNavigate(e, content.id)}
      isInCarousel={isInCarousel}
      animationDistance={animationDistance}
      animationTime={animationTime}
      leftCarouselMovement={leftCarouselMovement}
      rightCarouselMovement={rightCarouselMovement}
    >
      <styled.poster size={size} src={getPoster()} />
      <styled.detailsContainer>
        <styled.name>{content.name}</styled.name>
        <styled.row>
          <styled.subContainer>
            <FaSpotify
              size={size === "large" ? 22 : 18}
              color="#1dd860"
              className="sub-icon"
            />
            <styled.detailsText>
              {`${getTracksTotal()} tracks`}
            </styled.detailsText>
          </styled.subContainer>
          <styled.viewLink onClick={(e) => onNavigate(e, content.id)}>
            view
          </styled.viewLink>
        </styled.row>
      </styled.detailsContainer>
    </styled.CardWrapper>
  );
};

export default PlaylistCard;
