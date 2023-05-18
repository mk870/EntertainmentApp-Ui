import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import millify from "millify";

import * as styled from "./ArtistCardStyles";
import { shortenString } from "../../../../Utils/utils";
import Spinner from "../../../Spinner/Spinner";
import { AppContext } from "../../../../Context/AppContext";
import Snackbar from "../../../Snackbar/Snackbar";
import { deleteResource } from "../../../../HttpServices/Delete/deleteResource";
import { postResource } from "../../../../HttpServices/Post/postData";
import emptyArtistImage from "../../../../Assets/empty-profile.jpg";

const ArtistCard = ({ content, isFromLocalServer }) => {
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
  const navigate = useNavigate();
  const iconSize = 18;
  const emptyName = "not available";
  const onNavigate = () => {
    if (isFromLocalServer) navigate(`/music/artist/${content.Spotify_id}`);
    else navigate(`/music/artist/${content.id}`);
  };
  const getFollowers = () => {
    if (isFromLocalServer) {
      if (content.Followers) return `${content.Followers} followers`;
      else return "--- followers";
    } else {
      if (content.followers?.total)
        return `${millify(content.followers.total)} followers`;
      else return "--- followers";
    }
  };
  const postFollowers = (contentData) => {
    if (contentData.followers?.total) return millify(contentData.followers.total);
    else return "";
  };
  const getImage = () => {
    if (isFromLocalServer) {
      if (content.Poster) {
        return content.Poster;
      } else return emptyArtistImage;
    } else {
      if (content.images[0]?.url) {
        return content.images[0].url;
      } else return emptyArtistImage;
    }
  };
  const postImage = (contentData) => {
    if (contentData.images[0]?.url) return contentData.images[0].url;
    else return "";
  };
  const getName = () => {
    if (isFromLocalServer) {
      return shortenString(content.Name, 35);
    } else {
      if (content.name) return shortenString(content.name, 35);
      else return emptyName;
    }
  };
  const postName = (contentData) => {
    if (contentData.name) return contentData.name;
    else return emptyName;
  };
  const postArtist = (e, contentData) => {
    e.stopPropagation();
    setIsLoading(true);
    console.log(contentData);
    let data = {
      Name: postName(contentData),
      Poster: postImage(contentData),
      Followers: postFollowers(contentData),
      Spotify_id: contentData.id,
    };
    postResource(
      "artist",
      data,
      accessToken,
      setIsLoading,
      setPostResponse,
      postResponse
    );
  };
  const deleteArtist = (e, id) => {
    e.stopPropagation();
    setIsLoading(true);
    deleteResource(
      "delete",
      id,
      accessToken,
      setIsLoading,
      setDeleteResponse,
      deleteResponse
    );
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
    <styled.CardWrapper onClick={onNavigate}>
      <styled.poster src={getImage()} />
      <styled.detailsContainer>
        <styled.name>{getName()}</styled.name>
        <styled.row>
          <styled.subContainer>
            <HiOutlineUserGroup size={iconSize} />
            <styled.detailsText>{getFollowers()}</styled.detailsText>
          </styled.subContainer>
          {isFromLocalServer ? (
            <styled.deleteLink onClick={(e) => deleteArtist(e, content.id)}>
              {isLoading ? <Spinner /> : "Delete"}
            </styled.deleteLink>
          ) : (
            <styled.addLink onClick={(e) => postArtist(e, content)}>
              {isLoading ? <Spinner /> : <AiOutlinePlus size={14} />}
            </styled.addLink>
          )}
        </styled.row>
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

export default ArtistCard;
