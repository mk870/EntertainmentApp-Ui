import React from "react";
import { useSelector } from "react-redux";

import Card from "../TvShowMovieComponents/ContentCard/Card";
import * as styled from "./CardGridStyles";
import PlaylistCard from "../MusicComponents/Cards/Playlist/PlaylistCard";
import TrackAlbumCard from "../MusicComponents/Cards/TrackAlbum/TrackAlbumCard";

const CardGrid = ({ contentList, header, type,isFromLocalServer }) => {
  const screenSize = useSelector((state) => state.screenSize.value);
  return (
    <styled.CardGridWrapper>
      {contentList !== "none" && (
        <styled.Header>
          <styled.HeaderText> {header}</styled.HeaderText>
        </styled.Header>
      )}
      {contentList === "none" ? (
        <styled.TextContainer>
          <styled.Text>{`${header} content not found at the moment`}</styled.Text>
        </styled.TextContainer>
      ) : (
        <styled.Grid>
          {type === "artist" || type === "playlist"
            ? contentList.map((content) => (
                <PlaylistCard
                  key={content.id}
                  content={content}
                  size={screenSize < 800 ? "small" : "large"}
                />
              ))
            : type === "track" || type === "album"
            ? contentList.map((content) => (
                <TrackAlbumCard
                  key={content.id}
                  content={content}
                  type={type}
                  size={screenSize < 800 ? "small" : "large"}
                  isFromLocalServer={isFromLocalServer ? true : false}
                />
              ))
            : contentList.map((content,index) => (
                <Card
                  key={index}
                  content={content}
                  type={type}
                  size={screenSize < 800 ? "small" : "large"}
                  isFromLocalServer={isFromLocalServer ? true : false}
                />
              ))}
        </styled.Grid>
      )}
    </styled.CardGridWrapper>
  );
};

export default CardGrid;
