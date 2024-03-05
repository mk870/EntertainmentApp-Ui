import React, { useContext, useEffect, useRef, useState } from "react";
import millify from "millify";
import { useNavigate } from "react-router-dom";
import HTMLReactParser from "html-react-parser";

import {
  cleanTextSnippets,
  convertArtistListToString,
} from "../../../Utils/utils";
import * as styled from "./MusicContentSummaryStyles";
import { postResource } from "../../../HttpServices/Post/postData";
import { AppContext } from "../../../Context/AppContext";
import Snackbar from "../../Snackbar/Snackbar";
import Spinner from "../../Spinner/Spinner";
import emptyArtistProfile from "../../../Assets/empty-profile.jpg";
import emptyTrackPhoto from "../../../Assets/empty_track_poster.jpg";
import emptyAlbumCover from "../../../Assets/empty_album_poster.jpg";
import Artists from "./Components/Artists/Artists";
import GenreList from "./Components/GenreList/GenreList";
import TrackNumber from "./Components/TrackNumber/TrackNumber";
import Duration from "./Components/Duration/Duration";
import NumberOfTracks from "./Components/NumberOfTracks/NumberOfTracks";
import ReleaseDate from "./Components/ReleaseDate/ReleaseDate";
import Popularity from "./Components/Popularity/Popularity";
import Followers from "./Components/Followers/Followers";
import Link from "./Components/Link/Link";

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
      if (content.images[0]?.url) return content.images[0].url;
      else {
        if (type === "artist") return emptyArtistProfile;
        else return emptyAlbumCover;
      }
    if (type === "track") {
      if (content.album?.images[0]?.url) return content.album.images[0].url;
      else return emptyTrackPhoto;
    }
  };
  const linkText = () => {
    if (type === "artist") return "Add To MyArtistList";
    if (type === "album") return "Add To MyAlbumList";
    if (type === "track") return "Add To MyTrackList";
  };
  const getName = () => {
    if (content.artists[0]?.name) return `by ${content.artists[0].name}`;
    else return "";
  };
  const getVideoQueryString = () => {
    if (type === "track") {
      return `${content.name} ${getName()}`;
    }
  };
  const goWatchVideo = (videoType) => {
    navigate(`/video/${videoType}`, {
      state: {
        videoQueryString: getVideoQueryString(),
      },
    });
  };
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
  const postFollowers = (contentData) => {
    if (contentData.followers?.total)
      return millify(contentData.followers.total);
    else return "";
  };
  const getTotalTracks = () => {
    if (content.tracks?.total) return content.tracks.total;
    else return "---";
  };
  const handlePost = (contentData) => {
    if (accessToken) {
      setIsLoading(true);
      if (type === "artist") {
        let data = {
          Name: contentData.name ? contentData.name : "not available",
          Poster: postImage(contentData),
          Popularity: contentData.popularity ? contentData.popularity : "",
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
      }
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
      }
      if (type === "track") {
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
  useEffect(() => {
    if (postResponse && snackBarRef.current) {
      snackBarRef.current.showPopup();
    }
  }, [postResponse, snackBarRef]);
  return (
    <styled.container>
      <styled.contentWrapper>
        <styled.poster src={getImage()} alt="poster" />
        <styled.detailsContainer>
          <styled.header>
            <styled.headerText>{content.name}</styled.headerText>
          </styled.header>
          <styled.row>
            {(type === "playlist" || type === "artist") && (
              <Followers content={content} iconSize={iconSize} />
            )}
            {(type === "track" || type === "album" || type === "artist") && (
              <Popularity popularity={content.popularity} iconSize={iconSize} />
            )}
            {type === "album" && (
              <ReleaseDate
                releaseDate={content.release_date}
                iconSize={iconSize}
              />
            )}
            {type === "album" && (
              <NumberOfTracks
                totalTracks={content.total_tracks}
                iconSize={iconSize}
              />
            )}
            {type === "track" && (
              <Duration duration={content.duration_ms} iconSize={iconSize} />
            )}
            {type === "track" && (
              <TrackNumber
                trackNumber={content.track_number}
                iconSize={iconSize}
              />
            )}
            {type === "playlist" && (
              <NumberOfTracks
                totalTracks={getTotalTracks()}
                iconSize={iconSize}
              />
            )}
          </styled.row>
          {type === "artist" && <GenreList content={content} />}
          {(type === "track" || type === "album") && (
            <Artists artists={content.artists} iconSize={iconSize} />
          )}
          {(type === "playlist" || type === "track" || type === "artist") && (
            <styled.detailsText>
              {HTMLReactParser(cleanTextSnippets(content.description))}
            </styled.detailsText>
          )}
          {type === "album" && (
            <styled.detailsText>{content.label}</styled.detailsText>
          )}
          <styled.row>
            {(type === "artist" || type === "album" || type === "track") && (
              <Link
                onClickFunc={() => handlePost(content)}
                text={isLoading ? <Spinner /> : linkText()}
                type={"add"}
              />
            )}
            {type === "track" && (
              <>
                <Link
                  onClickFunc={() => goWatchVideo("song")}
                  text={"Play video"}
                  type={"video"}
                />
                <styled.link
                  href={content.preview_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Link text={"Play Audio"} onClickFunc={null} type={"audio"} />
                </styled.link>
              </>
            )}
          </styled.row>
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
