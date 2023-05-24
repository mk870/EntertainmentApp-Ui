import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

import * as styled from "./TrackAlbumStyles";
import {
  convertArtistListToString,
  shortenString,
} from "../../../../Utils/utils";
import Spinner from "../../../Spinner/Spinner";
import { AppContext } from "../../../../Context/AppContext";
import { deleteResource } from "../../../../HttpServices/Delete/deleteResource";
import Snackbar from "../../../Snackbar/Snackbar";
import { postResource } from "../../../../HttpServices/Post/postData";
import emptyTrackPoster from "../../../../Assets/empty_track_poster.jpg";
import emptyAlbumPoster from "../../../../Assets/empty_album_poster.jpg";

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
  const { accessToken,setDeletedItemId } = useContext(AppContext);
  const postImage = (contentData) => {
    if (type === "track") {
      if (contentData.album?.images[0]?.url)
        return contentData.album.images[0].url;
      else return "";
    } else {
      if (contentData.images[0]?.url) return contentData.images[0].url;
      else return "";
    }
  };
  const postTrackOrAlbum = (e, contentData) => {
    e.stopPropagation();
    if (accessToken) {
      setIsLoading(true);
      if (type === "album") {
        let data = {
          Name: contentData.name ? contentData.name : "not available",
          Poster: postImage(contentData),
          Artists: convertArtistListToString(contentData.artists),
          Spotify_id: contentData.id,
        };
        postResource(
          "album",
          data,
          accessToken,
          setIsLoading,
          setPostResponse,
          postResponse
        );
      } else {
        let data = {
          Name: contentData.name ? contentData.name : "not available",
          Poster: postImage(contentData),
          Artists: convertArtistListToString(contentData.artists),
          Spotify_id: contentData.id,
        };
        postResource(
          "track",
          data,
          accessToken,
          setIsLoading,
          setPostResponse,
          postResponse
        );
      }
    } else navigate("/login");
  };
  const deleteTrackOrAlbum = (e, id) => {
    e.stopPropagation();
    setIsLoading(true);
    if (type === "album") {
      deleteResource(
        "album",
        id,
        accessToken,
        setIsLoading,
        setDeleteResponse,
        deleteResponse,
        setDeletedItemId
      );
    } else {
      deleteResource(
        "track",
        id,
        accessToken,
        setIsLoading,
        setDeleteResponse,
        deleteResponse,
        setDeletedItemId
      );
    }
  };
  const navigate = useNavigate();
  const onNavigate = () => {
    if (isFromLocalServer) {
      if (type === "track") navigate(`/music/track/${content.spotify_id}`);
      else navigate(`/music/album/${content.spotify_id}`);
    } else {
      if (type === "track") navigate(`/music/track/${content.id}`);
      else navigate(`/music/album/${content.id}`);
    }
  };
  const getArtists = () => {
    if (type === "track") {
      if (isFromLocalServer) {
        if (content.artists) {
          if (content.artists.includes(",")) {
            return `${content.artists.split(",")[0]} ft...`;
          } else return content.artists.split(",")[0];
        } else return "no artist name";
      } else {
        if (content.artists.length > 1)
          return `${content.artists[0].name} ft...`;
        else return `${content.artists[0].name}`;
      }
    } else {
      if (isFromLocalServer) {
        if (content.artists) {
          if (content.artists.includes(",")) {
            return `${content.artists.split(",")[0]} &...`;
          } else return content.artists.split(",")[0];
        } else return "no artist name";
      } else {
        if (content.artists.length > 1)
          return `${content.artists[0].name} &...`;
        else return `${content.artists[0].name}`;
      }
    }
  };
  const getPoster = () => {
    if (isFromLocalServer) {
      if (type === "track") {
        if (content.poster) return content.poster;
        else return emptyTrackPoster;
      } else {
        if (content.poster) return content.poster;
        else return emptyAlbumPoster;
      }
    } else {
      if (type === "track") {
        if (content.album?.images[0]?.url) {
          return content.album.images[0].url;
        } else return emptyTrackPoster;
      } else {
        if (content.images[0]?.url) return content.images[0].url;
        else return emptyAlbumPoster;
      }
    }
  };
  const getName = () => {
    if (isFromLocalServer) {
      return shortenString(content.name, 35);
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
