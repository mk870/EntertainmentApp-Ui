import React, { useContext, useEffect, useRef, useState } from "react";
import { AiFillStar, AiOutlinePlus } from "react-icons/ai";
import { FaImdb } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import * as styled from "./CardStyles";
import emptyProfilePic from "Assets/empty-profile.jpg";
import emptyPoster from "Assets/poster.jpg";
import { postResource } from "../../../HttpServices/Post/postData";
import { AppContext } from "../../../Context/AppContext";
import Spinner from "components/Spinner/Spinner";
import Snackbar from "components/Snackbar/Snackbar";
import { deleteResource } from "HttpServices/Delete/deleteResource";


const Card = ({ content, type, size, isFromLocalServer }) => {
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
  const onNavigate = (e) => {
    e.stopPropagation();
    if (type === "movie") {
      if (isFromLocalServer) navigate(`/movie/${content.Tmdb_id}`);
      else navigate(`/movie/${content.id}`);
    }
    if (type === "tv-show") {
      if (isFromLocalServer) navigate(`/tv-show/${content.Tmdb_id}`);
      else navigate(`/tv-show/${content.id}`);
    }
    if (type === "actor") {
      if (isFromLocalServer) navigate(`/actor/${content.Tmdb_id}`);
      else navigate(`/actor/${content.id}`);
    }
  };
  const handlePost = (contentData, e) => {
    e.stopPropagation();
    setIsLoading(true);
    console.log(contentData);
    if (type === "movie") {
      let data = {
        Title: contentData.title ? contentData.title : "",
        Release_date: contentData.release_date ? contentData.release_date : "",
        Poster: contentData.poster_path ? contentData.poster_path : "",
        Rating: contentData.vote_average ? contentData.vote_average : "",
        Tmdb_id: contentData.id,
      };
      postResource(
        "addMovie",
        data,
        accessToken,
        setIsLoading,
        setPostResponse,
        postResponse
      );
    }
    if (type === "tv-show") {
      let data = {
        Name: contentData.name ? contentData.name : "",
        Release_date: contentData.first_air_date
          ? contentData.first_air_date
          : "",
        Poster: contentData.poster_path ? contentData.poster_path : "",
        Rating: contentData.vote_average ? contentData.vote_average : "",
        Tmdb_id: contentData.id,
      };
      postResource(
        "addTv-show",
        data,
        accessToken,
        setIsLoading,
        setPostResponse,
        postResponse
      );
    }
  };
  const handleDelete = (e, id) => {
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
  const getRating = () => {
    if (isFromLocalServer) {
      if (content.Rating) return Math.round(content.Rating * 10) / 10;
      else return "---";
    } else {
      if (content.vote_average)
        return Math.round(content.vote_average * 10) / 10;
      else return "---";
    }
  };
  const getPopularity = () => {
    if (isFromLocalServer) {
      if (content.Poster) return Math.round(content.Popularity);
      else return "---";
    } else {
      if (content.popularity) return Math.round(content.popularity);
      else return "---";
    }
  };
  const getReleaseDateOrCharacterName = (data) => {
    if (type === "movie") {
      if (isFromLocalServer) {
        return data.Release_date;
      } else return data.release_date;
    }
    if (type === "tv-show") {
      if (isFromLocalServer) {
        return data.Release_date;
      } else return data.first_air_date;
    }
    if (type === "actor") {
      if (isFromLocalServer) {
        return data.Character;
      } else return `as ${data.character}`;
    }
  };
  const getImage = () => {
    if (type === "actor") {
      if (isFromLocalServer) {
        if (content.Poster)
          return `https://image.tmdb.org/t/p/w500/${content.Poster}`;
        else return emptyProfilePic;
      } else {
        if (content.profile_path)
          return `https://image.tmdb.org/t/p/w500/${content.profile_path}`;
        else return emptyProfilePic;
      }
    } else {
      if (isFromLocalServer) {
        if (content.Poster)
          return `https://image.tmdb.org/t/p/w500/${content.Poster}`;
        else return emptyPoster;
      } else {
        if (content.poster_path)
          return `https://image.tmdb.org/t/p/w500/${content.poster_path}`;
        else return emptyPoster;
      }
    }
  };
  const getName = () => {
    if (type === "movie") {
      if (isFromLocalServer) return content.Title;
      else return content.title;
    } else {
      if (isFromLocalServer) return content.Name;
      else return content.name;
    }
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
    <styled.CardWrapper size={size} onClick={(e) => onNavigate(e)}>
      <styled.overlay size={size}></styled.overlay>
      <styled.poster alt="poster" src={getImage()} size={size} />
      {size !== "large" && (
        <styled.ratingContainer>
          <AiFillStar size={13} color={"gold"} />
          <styled.ratingText>
            {type === "actor" ? getPopularity() : getRating()}
          </styled.ratingText>
        </styled.ratingContainer>
      )}
      <styled.contentDetails>
        {size === "large" && <styled.name>{getName()}</styled.name>}
        {size === "large" && (
          <styled.date>{getReleaseDateOrCharacterName(content)}</styled.date>
        )}
        {size === "large" && (
          <styled.largeCardRatingContainer>
            <FaImdb size={29} color={"gold"} className="imdb-icon" />
            <styled.ratingText size={size}>
              {type === "actor"
                ? `${getPopularity()} stars`
                : `${getRating()} stars`}
            </styled.ratingText>
          </styled.largeCardRatingContainer>
        )}
      </styled.contentDetails>
      <styled.linksContainer size={size} type={type}>
        <styled.viewLink size={size} onClick={(e) => onNavigate(e)}>
          view
        </styled.viewLink>
        {type !== "actor" && !isFromLocalServer && (
          <styled.addLink size={size} onClick={(e) => handlePost(content, e)}>
            {isLoading ? <Spinner /> : <AiOutlinePlus size={14} />}
          </styled.addLink>
        )}
        {isFromLocalServer && (
          <styled.deleteLink
            size={size}
            onClick={(e) => handleDelete(e, content.id)}
          >
            {isLoading ? <Spinner /> : "Delete"}
          </styled.deleteLink>
        )}
      </styled.linksContainer>
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

export default Card;
