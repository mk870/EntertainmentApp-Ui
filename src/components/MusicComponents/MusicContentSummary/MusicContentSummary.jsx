import React, { useContext, useEffect, useRef, useState } from "react";
import { HiOutlineMusicNote, HiOutlineUserGroup } from "react-icons/hi";
import { AiFillStar, AiOutlineCalendar } from "react-icons/ai";
import { BiMoviePlay, BiTime } from "react-icons/bi";
import millify from "millify";
import { BsFillPersonFill } from "react-icons/bs";
import { IoPlayOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import { cleanTextSnippets } from "../../../Utils/utils";
import * as styled from "./MusicContentSummaryStyles";
import { postResource } from "../../../HttpServices/Post/postData";
import { AppContext } from "../../../Context/AppContext";
import Snackbar from "../../Snackbar/Snackbar";
import Spinner from "../../Spinner/Spinner";

const MusicContentSummary = ({ content, type }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [postResponse, setPostResponse] = useState({
    message: "",
    type: "",
  });
  const snackBarRef = useRef(null);
  const { accessToken } = useContext(AppContext);
  const navigate = useNavigate();
  const iconSize = 18;
  const getImage = () => {
    if (type === "playlist" || type === "album" || type === "artist")
      return content.images[0].url;
    if (type === "track") return content.album.images[0].url;
  };
  const trackDurationToMins = (durationInMs) => {
    return `${Math.round(durationInMs / 60000)} mins`;
  };
  const linkText = () => {
    if (type === "artist") return "Add To ArtistList";
    if (type === "album") return "Add To AlbumList";
    if (type === "track") return "Add To TrackList";
  };
  const getVideoQueryString = () => {
    if (type === "track") {
      return `${content.name} by ${content.artists[0].name}`;
    }
  };
  const goWatchVideo = (videoType) => {
    navigate(`/video/${videoType}`, {
      state: {
        videoQueryString: getVideoQueryString(),
      },
    });
  };
  const handlePost = (contentData) => {
    setIsLoading(true)
    if (type === "artist") {
      let data = {
        Name: contentData.name,
        Poster: contentData.images[0].url,
        Popularity: contentData.popularity,
        Followers: millify(contentData.followers.total),
        Spotify_id: contentData.id,
      };
      postResource(
        "addArtist",
        data,
        accessToken,
        setIsLoading,
        setPostResponse,
        postResponse
      );
    }
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
    }
    if (type === "track") {
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
  }
  useEffect(() => {
    if (postResponse && snackBarRef.current) {
      snackBarRef.current.showPopup();
    }
  }, [postResponse, snackBarRef]);
  return (
    <styled.container>
      <styled.Background pic={getImage()} />
      <styled.contentWrapper>
        <styled.poster src={getImage()} alt="poster" />
        <styled.detailsContainer>
          <styled.header>
            <styled.headerText>{content.name}</styled.headerText>
          </styled.header>
          <styled.row>
            {(type === "playlist" || type === "artist") && (
              <styled.subContainer>
                <HiOutlineUserGroup size={iconSize} />
                <styled.subHeaderText>
                  {`${millify(content.followers.total)} followers`}
                </styled.subHeaderText>
              </styled.subContainer>
            )}
            {(type === "track" || type === "album" || type === "artist") && (
              <styled.subContainer>
                <AiFillStar color="gold" size={iconSize} />
                <styled.subHeaderText>
                  {`${content.popularity} stars`}
                </styled.subHeaderText>
              </styled.subContainer>
            )}
            {type === "album" && (
              <styled.subContainer>
                <AiOutlineCalendar size={iconSize} />
                <styled.subHeaderText>
                  {content.release_date}
                </styled.subHeaderText>
              </styled.subContainer>
            )}
            {type === "album" && (
              <styled.subContainer>
                <HiOutlineMusicNote size={iconSize} />
                <styled.subHeaderText>
                  {`${content.total_tracks} tracks`}
                </styled.subHeaderText>
              </styled.subContainer>
            )}
            {type === "track" && (
              <styled.subContainer>
                <BiTime size={iconSize} />
                <styled.subHeaderText>
                  {trackDurationToMins(content.duration_ms)}
                </styled.subHeaderText>
              </styled.subContainer>
            )}
            {type === "track" && (
              <styled.subContainer>
                <HiOutlineMusicNote size={iconSize} />
                <styled.subHeaderText>
                  {`${content.track_number}${
                    content.track_number === 1
                      ? "st"
                      : content.track_number === 2
                      ? "nd"
                      : content.track_number === 3
                      ? "rd"
                      : "th"
                  } track`}
                </styled.subHeaderText>
              </styled.subContainer>
            )}
            {type === "playlist" && (
              <styled.subContainer>
                <HiOutlineMusicNote size={iconSize} />
                <styled.subHeaderText>
                  {`${content.tracks.total} tracks`}
                </styled.subHeaderText>
              </styled.subContainer>
            )}
          </styled.row>
          {type === "artist" && (
            <styled.genreContainer>
              {content.genres.length > 1 ? (
                content.genres.map((genre) => (
                  <styled.genre key={genre}>
                    <styled.genreText>{genre}</styled.genreText>
                  </styled.genre>
                ))
              ) : (
                <styled.genreText>{`${content.name}'s genre data is not available`}</styled.genreText>
              )}
            </styled.genreContainer>
          )}
          {(type === "track" || type === "album") && (
            <styled.trackLinksContainer>
              <styled.artistHeader>
                {content.artists.length > 1 ? "Artists:" : "Artist:"}
              </styled.artistHeader>
              {content.artists.map((artist) => (
                <styled.artistContainer
                  key={artist.id}
                  artist={true}
                  onClick={() => navigate(`/music/artist/${artist.id}`)}
                >
                  <BsFillPersonFill size={iconSize} />
                  <styled.artistText>{artist.name}</styled.artistText>
                </styled.artistContainer>
              ))}
            </styled.trackLinksContainer>
          )}
          {(type === "playlist" || type === "track"|| type === "artist") && (
            <styled.detailsText>{cleanTextSnippets(content.description)}</styled.detailsText>
          )}
          {type === "album" && (
            <styled.detailsText>{content.label}</styled.detailsText>
          )}
          {(type === "artist" || type === "album"||type === "track") && (
            <styled.AddLink onClick={()=>handlePost(content)}>
              <styled.addLinkText>{isLoading?<Spinner/>: linkText()}</styled.addLinkText>
            </styled.AddLink>
          )}
          {type === "track" && (
            <styled.row>
              <styled.AddLink onClick={()=>goWatchVideo("song")}>
                <BiMoviePlay size={20} />
                <styled.addLinkText>Play video</styled.addLinkText>
              </styled.AddLink>
              <styled.link
                href={content.preview_url}
                target="_blank"
                rel="noreferrer"
              >
                <styled.AddLink>
                  <IoPlayOutline size={20} color="aliceblue" />
                  <styled.addLinkText>Play Audio</styled.addLinkText>
                </styled.AddLink>
              </styled.link>
            </styled.row>
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

export default MusicContentSummary;
