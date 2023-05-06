import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

import * as styled from "./TrackAlbumStyles";
import { shortenString } from "../../../../Utils/utils";
import Spinner from "../../../Spinner/Spinner";
import { AppContext } from "../../../../Context/AppContext";
import { deleteResource } from "../../../../HttpServices/Delete/deleteResource";
import Snackbar from "../../../Snackbar/Snackbar";
import { postResource } from "../../../../HttpServices/Post/postData";

const TrackAlbumCard = ({ content, type, isInCarousel, isFromLocalServer }) => {
  const [isLoading, setIsLoading] = useState(false);
  const snackBarRef = useRef(null);
  const [postResponse, setPostResponse] = useState({
    message: "",
    type: "",
  });
  const [deleteResponse, setDeleteResponse] = useState({
    message: "",
    type: "",
  });
  const { accessToken } = useContext(AppContext);
  const postTrackOrAlbum = (e, contentData) => {
    e.stopPropagation();
    setIsLoading(true);
    if (type === "album") {
      let data = {
        Name: contentData.name,
        Poster: contentData.images[0].url,
        Artists: contentData.artists,
        Spotify_id: contentData.id,
      };
      postResource(
        "addAlbum",
        data,
        accessToken,
        setIsLoading,
        setPostResponse,
        postResponse
      );
    } else {
      let data = {
        Name: contentData.name,
        Poster: contentData.album.images[0].url,
        Artists: contentData.artists,
        Spotify_id: contentData.id,
      };
      postResource(
        "addTrack",
        data,
        accessToken,
        setIsLoading,
        setPostResponse,
        postResponse
      );
    }
  };
  const deleteTrackOrAlbum = (e, id) => {
    e.stopPropagation();
    setIsLoading(true);
    if (type === "album") {
      deleteResource(
        "deleteAlbum",
        id,
        accessToken,
        setIsLoading,
        setDeleteResponse,
        deleteResponse
      );
    } else {
      deleteResource(
        "deleteTrack",
        id,
        accessToken,
        setIsLoading,
        setDeleteResponse,
        deleteResponse
      );
    }
  };
  const navigate = useNavigate();
  const onNavigate = () => {
    if (isFromLocalServer) {
      if (type === "track") navigate(`/music/track/${content.Spotify_id}`);
      else navigate(`/music/album/${content.Spotify_id}`);
    } else {
      if (type === "track") navigate(`/music/track/${content.id}`);
      else navigate(`/music/album/${content.id}`);
    }
  };
  const getArtists = () => {
    if (type === "track") {
      if (isFromLocalServer) {
        if (content.Artists.length > 1)
          return `${content.Artists[0].name} ft...`;
        else return `${content.Artists[0].name}`;
      } else {
        if (content.artists.length > 1)
          return `${content.artists[0].name} ft...`;
        else return `${content.artists[0].name}`;
      }
    } else {
      if (isFromLocalServer) {
        if (content.Artists.length > 1)
          return `${content.Artists[0].name} &...`;
        else return `${content.Artists[0].name}`;
      } else {
        if (content.artists.length > 1)
          return `${content.artists[0].name} &...`;
        else return `${content.artists[0].name}`;
      }
    }
  };
  const getPoster = () => {
    if (isFromLocalServer) {
      return content.Poster;
    } else {
      if (type === "track") return content.album.images[0].url;
      else return content.images[0].url;
    }
  };
  const getName = () => {
    if (isFromLocalServer) {
      return shortenString(content.Name, 35);
    } else return shortenString(content.name, 35);
  };
  useEffect(() => {
    if (postResponse && snackBarRef.current) {
      snackBarRef.current.showPopup();
    }
  }, [postResponse, snackBarRef]);
  useEffect(() => {
    if (deleteResponse && snackBarRef.current) {
      snackBarRef.current.showPopup();
    }
  }, [snackBarRef, deleteResponse]);
  return (
    <styled.CardWrapper
      onClick={() => onNavigate()}
      isInCarousel={isInCarousel}
    >
      <styled.poster
        src={getPoster()}
        isInCarousel={type === "album" ? true : false}
      />
      {isInCarousel && (
        <styled.row>
          {isFromLocalServer ? (
            <styled.deleteLink
              onClick={(e) => deleteTrackOrAlbum(e, content.id)}
              isInCarousel={isInCarousel}
            >
              delete
            </styled.deleteLink>
          ) : (
            <styled.addLink
              onClick={(e) => postTrackOrAlbum(e, content)}
              isInCarousel={isInCarousel}
            >
              {isLoading ? <Spinner /> : <AiOutlinePlus size={14} />}
            </styled.addLink>
          )}
        </styled.row>
      )}
      <styled.detailsContainer isInCarousel={isInCarousel}>
        <styled.name>{getName()}</styled.name>
        {!isInCarousel && (
          <styled.row>
            <styled.detailsText>{getArtists()}</styled.detailsText>
            {isFromLocalServer ? (
              <styled.deleteLink
                onClick={(e) => deleteTrackOrAlbum(e, content.id)}
                isInCarousel={isInCarousel}
              >
                {isLoading ? <Spinner /> : "Delete"}
              </styled.deleteLink>
            ) : (
              <styled.addLink
                onClick={(e) => postTrackOrAlbum(e, content)}
                isInCarousel={isInCarousel}
              >
                {isLoading ? <Spinner /> : <AiOutlinePlus size={14} />}
              </styled.addLink>
            )}
          </styled.row>
        )}
      </styled.detailsContainer>
      {postResponse.message && (
        <Snackbar
          message={postResponse.message}
          type={postResponse.type}
          ref={snackBarRef}
        />
      )}
      {deleteResponse.message && (
        <Snackbar
          message={deleteResponse.message}
          type={deleteResponse.type}
          ref={snackBarRef}
        />
      )}
    </styled.CardWrapper>
  );
};

export default TrackAlbumCard;
