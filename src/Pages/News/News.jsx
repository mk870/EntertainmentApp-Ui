import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import * as styled from "./NewsStyles";
import PageHOC from "components/HOCs/Page/PageHOC";
import useFetchNews from "HttpServices/Hooks/News/useFetchNews";
import {
  actorsNewsCategory,
  albumsNewsCategory,
  artistsNewsCategory,
  entertainmentNewsCategory,
  moviesNewsCategory,
  songsNewsCategory,
  tvShowsNewsCategory,
} from "Utils/Constants";
import CardGridSkeleton from "components/SkeletonLoaders/CardGrid/CardGridSkeleton";
import HttpError from "HttpServices/Error/HttpError";
import Paginator from "components/Paginator/Paginator";

const News = () => {
  const { topic } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const screenSize = useSelector((state) => state.screenSize.value);
  const newsSearchCategory = () => {
    if (topic === "musicians") return artistsNewsCategory;
    else if (topic === "tv-shows") return tvShowsNewsCategory;
    else if (topic === "actors") return actorsNewsCategory;
    else if (topic === "albums") return albumsNewsCategory;
    else if (topic === "songs") return songsNewsCategory;
    else if (topic === "entertainment") return entertainmentNewsCategory;
    else return moviesNewsCategory;
  };
  const title = () => {
    if (topic === "musicians") return "Latest On Artists";
    else if (topic === "tv-shows") return "Latest Tv Shows";
    else if (topic === "actors") return "Latest On Actors";
    else if (topic === "albums") return "Latest Albums";
    else if (topic === "songs") return "Latest Songs";
    else if (topic === "entertainment") return "Latest On Entertainment";
    else return "Latest Movies";
  };
  const { data, isLoading, error } = useFetchNews(newsSearchCategory());
  const newsLinks = [
    { name: "All Entertaiment", url: "entertainment" },
    { name: "Artist", url: "musicians" },
    { name: "Tv Shows", url: "tv-shows" },
    { name: "Movies", url: "movies" },
    { name: "Actors", url: "actors" },
    { name: "Albums", url: "albums" },
    { name: "Tracks", url: "songs" },
  ];
  return (
    <styled.container>
      {isLoading && <CardGridSkeleton />}
      {error && <HttpError message={error} size={"large"} />}
      {data && (
        <>
          <styled.TitleWrapper>
            <styled.Title>{title()}</styled.Title>
            <styled.Links>
              {newsLinks.map((link) => (
                <styled.Link
                  key={link.url}
                  onClick={() => navigate("/news/" + link.url)}
                  isOpen={
                    location.pathname === `/news/${link.url}` ? true : false
                  }
                >
                  {link.name}
                </styled.Link>
              ))}
            </styled.Links>
          </styled.TitleWrapper>
          <Paginator data={data} itemsPerPage={screenSize > 700 ? 12 : 8} />
        </>
      )}
    </styled.container>
  );
};

export default PageHOC(News);
