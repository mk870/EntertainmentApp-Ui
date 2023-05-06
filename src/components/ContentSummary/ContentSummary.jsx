import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiTime } from "react-icons/bi";
import { AiFillStar, AiOutlineCalendar } from "react-icons/ai";
import { FaTv } from "react-icons/fa";
import { RxVideo } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5";

import * as styled from "./ContentSummaryStyles";
import Snackbar from "../Snackbar/Snackbar";
import { postResource } from "../../HttpServices/Post/postData";
import { AppContext } from "../../Context/AppContext";
import Spinner from "../Spinner/Spinner";

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
    console.log(showName);
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
      return <Spinner/>;
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
    console.log(image)
    if (image.includes(queryString)) {
      return image.split(queryString)[1];
    } else return image;
  };
  const handlePost = () => {
    setIsLoading(true)
    if (type === "movie") {
      let data = {
        Title: header,
        Release_date: releaseDate,
        Poster: getImageToPost(image),
        Rating: rating,
        Tmdb_id: id,
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
        Name: header,
        Release_date: releaseDate,
        Poster: getImageToPost(image),
        Rating: rating,
        Tmdb_id: id,
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
    if (type === "actor") {
      let data = {
        Name: header,
        Poster: getImageToPost(image),
        Popularity: rating,
        Character: "",
        Tmdb_id: id,
      };
      postResource(
        "addActor",
        data,
        accessToken,
        setIsLoading,
        setPostResponse,
        postResponse
      );
    }
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
            {type !== "actor" && (
              <styled.subContainer>
                <AiFillStar size={iconSize} color={"gold"} />
                <styled.subHeaderText>{rating}</styled.subHeaderText>
              </styled.subContainer>
            )}
            {type !== "actor" && type !== "movie" && (
              <styled.subContainer>
                <FaTv size={iconSize} />
                <styled.subHeaderText>
                  {type === "season" && `no. episodes ${episodes}`}
                  {type === "episode" && `season ${seasonNumber}`}
                  {type === "tv-show" && `no. seasons ${seasons}`}
                </styled.subHeaderText>
              </styled.subContainer>
            )}
          </styled.row>
          {type === "movie" && (
            <styled.row>
              <styled.subContainer>
                <styled.subHeaderText>{"Budget:"}</styled.subHeaderText>
                <styled.subHeaderText>{budget}</styled.subHeaderText>
              </styled.subContainer>
              <styled.subContainer>
                <styled.subHeaderText>{"Revenue:"}</styled.subHeaderText>
                <styled.subHeaderText>{revenue}</styled.subHeaderText>
              </styled.subContainer>
            </styled.row>
          )}
          {(type === "episode" || type === "tv-show") && (
            <styled.creatorsContainer>
              <div className="heading">
                {type === "episode" ? "Crew:" : "Created by:"}
              </div>
              {creators ? (
                creators.map((creator, index) => (
                  <span className="creatorText" key={creator.id}>
                    {creators.length - 1 === index
                      ? ` ${creator.name}`
                      : `${creator.name}, `}
                  </span>
                ))
              ) : (
                <span className="creatorText">no data</span>
              )}
            </styled.creatorsContainer>
          )}
          {(type === "movie" || type === "tv-show") && (
            <styled.genreContainer>
              {genres ? (
                genres.map((genre) => (
                  <styled.genre key={genre.id}>
                    <styled.genreText>{genre.name}</styled.genreText>
                  </styled.genre>
                ))
              ) : (
                <styled.genreText>no genre data</styled.genreText>
              )}
            </styled.genreContainer>
          )}
          {type === "movie" && (
            <styled.detailsText>{movieTagLine}</styled.detailsText>
          )}
          <styled.detailsText>{overview}</styled.detailsText>
          {(type === "movie" || type === "tv-show" || type === "actor") && (
            <styled.AddLink onClick={handlePost}>
              <styled.addLinkText>{linkText()}</styled.addLinkText>
            </styled.AddLink>
          )}
          {(type === "movie" || type === "episode") && (
            <styled.videoLinksContainer>
              {videoLinks.map((link) => (
                <styled.videoLink key={link} onClick={() => goWatchVideo(link)}>
                  <RxVideo size={iconSize} className="video-icon" />
                  <styled.addLinkText>{link}</styled.addLinkText>
                </styled.videoLink>
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
