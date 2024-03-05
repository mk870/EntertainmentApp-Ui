import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiTime } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

import * as styled from "./ContentSummaryStyles";
import Snackbar from "../../Snackbar/Snackbar";
import { postResource } from "../../../HttpServices/Post/postData";
import { AppContext } from "../../../Context/AppContext";
import Spinner from "../../Spinner/Spinner";
import VideoLink from "./Components/Link/Video/Link";
import PostLink from "./Components/Link/Post/Link";
import GenreList from "./Components/GenreList/GenreList";
import Creators from "./Components/Creators/Creators";
import Finances from "./Components/Finances/Finances";
import ContentNumber from "./Components/ContentNumber/ContentNumber";
import Ratings from "./Components/Ratings/Ratings";

const ContentSummary = ({
  image,
  releaseDate,
  header,
  rating,
  genres,
  overview,
  runtime,
  seasons,
  seasonNumber,
  creators,
  episodes,
  age,
  birthPlace,
  episodeNumber,
  showName,
  budget,
  revenue,
  movieTagLine,
  id,
  type,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const snackBarRef = useRef(null);
  const [postResponse, setPostResponse] = useState({
    message: "",
    type: "",
  });
  const { accessToken } = useContext(AppContext);
  const navigate = useNavigate();
  const iconSize = 18;
  const videoLinks = ["trailer", "review", "clips"];
  const getVideoQueryString = () => {
    if (type === "episode") {
      return `${showName} season${seasonNumber} episode${episodeNumber}`;
    } else {
      return header;
    }
  };
  const goWatchVideo = (videoType) => {
    navigate(`/video/${videoType}`, {
      state: {
        videoQueryString: getVideoQueryString(),
      },
    });
  };
  const linkText = () => {
    if (isLoading) {
      return <Spinner />;
    }
    if (type === "movie" && !isLoading) {
      return "Add to MovieList";
    }
    if (type === "tv-show" && !isLoading) {
      return "Add to TvShowList";
    }
    if (type === "actor" && !isLoading) {
      return "Add to ActorList";
    }
  };
  const getImageToPost = (image) => {
    const queryString = "w500/";
    if (image) {
      if (image.includes(queryString)) {
        return image.split(queryString)[1];
      } else return "";
    } else return "";
  };
  const handlePost = () => {
    if (accessToken) {
      setIsLoading(true);
      if (type === "movie") {
        let data = {
          Title: header,
          Release_date: releaseDate,
          Poster: getImageToPost(image),
          Rating: rating,
          Tmdb_id: id,
        };
        postResource(
          "movie",
          data,
          accessToken,
          setIsLoading,
          setPostResponse,
          postResponse
        );
      }
      if (type === "tv-show") {
        let data = {
          Name: header,
          Release_date: releaseDate,
          Poster: getImageToPost(image),
          Rating: rating,
          Tmdb_id: id,
        };
        postResource(
          "tvShow",
          data,
          accessToken,
          setIsLoading,
          setPostResponse,
          postResponse
        );
      }
      if (type === "actor") {
        let data = {
          Name: header,
          Poster: getImageToPost(image),
          Popularity: rating ? Math.ceil(rating) : 0,
          Character: "",
          Tmdb_id: id,
        };
        postResource(
          "actor",
          data,
          accessToken,
          setIsLoading,
          setPostResponse,
          postResponse
        );
      }
    } else navigate("/login");
  };
  useEffect(() => {
    if (postResponse && snackBarRef.current) {
      snackBarRef.current.showPopup();
    }
  }, [postResponse, snackBarRef]);
  return (
    <styled.container>
      <styled.Background pic={image} />
      <styled.contentWrapper>
        <styled.poster src={image} alt="poster" />
        <styled.detailsContainer>
          <styled.header>
            <styled.headerText>{header}</styled.headerText>
          </styled.header>
          <styled.row>
            <styled.subContainer>
              <AiOutlineCalendar size={iconSize} />
              <styled.subHeaderText>
                {type === "actor" ? `${age} years` : releaseDate}
              </styled.subHeaderText>
            </styled.subContainer>
            <styled.subContainer>
              {type === "actor" ? (
                <IoLocationOutline size={iconSize} />
              ) : (
                <BiTime size={iconSize} />
              )}
              <styled.subHeaderText>
                {type === "actor" ? birthPlace : runtime}
              </styled.subHeaderText>
            </styled.subContainer>
            <Ratings rating={rating} iconSize={iconSize} />
            {type !== "actor" && type !== "movie" && (
              <ContentNumber
                seasonNumber={seasonNumber}
                seasons={seasons}
                episodes={episodes}
                iconSize={iconSize}
                type={type}
              />
            )}
          </styled.row>
          {type === "movie" && <Finances budget={budget} revenue={revenue} />}
          {(type === "episode" || type === "tv-show") && (
            <Creators creators={creators} type={type}/>
          )}
          {(type === "movie" || type === "tv-show") && (
            <GenreList genres={genres} />
          )}
          {type === "movie" && (
            <styled.detailsText>{movieTagLine}</styled.detailsText>
          )}
          <styled.detailsText>{overview}</styled.detailsText>
          {(type === "movie" || type === "tv-show" || type === "actor") && (
            <PostLink
              onClickFunc={handlePost}
              text={linkText()}
              iconSize={iconSize}
            />
          )}
          {(type === "movie" || type === "episode") && (
            <styled.videoLinksContainer>
              {videoLinks.map((link) => (
                <VideoLink
                  key={link}
                  link={link}
                  onClickFunc={() => goWatchVideo(link)}
                  iconSize={iconSize}
                />
              ))}
            </styled.videoLinksContainer>
          )}
        </styled.detailsContainer>
      </styled.contentWrapper>
      {postResponse.message && (
        <Snackbar
          message={postResponse.message}
          type={postResponse.type}
          ref={snackBarRef}
        />
      )}
    </styled.container>
  );
};

export default ContentSummary;
