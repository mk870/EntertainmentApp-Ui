import React from "react";
import { useParams } from "react-router-dom";

import useSpotify from "../../../HttpServices/Hooks/music/useSpotify";
import HttpError from "../../../HttpServices/Error/HttpError";
import CardGrid from "../../../components/CardGrid/CardGrid";
import CardGridSkeleton from "../../../components/SkeletonLoaders/CardGrid/CardGridSkeleton";
import { Page } from "../../../Css/PageStyles";

const SearchResults = () => {
  const { queryString } = useParams();
  const { data, isLoading, error } = useSpotify({
    url: `search?q=${queryString}&type=track&limit=50`,
  });
  return (
    <Page hasError={error}>
      {isLoading && <CardGridSkeleton />}
      {error && <HttpError message={error} size="large" />}
      {data && (
        <CardGrid
          contentList={data.tracks.items ? data.tracks.items : "none"}
          type={"track"}
          header={"Search Results"}
        />
      )}
    </Page>
  );
};

export default SearchResults;
