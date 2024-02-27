import React, { useContext } from "react";

import useQuery from "HttpServices/Hooks/useQuery";
import { Page } from "Css/PageStyles";
import CardGridSkeleton from "components/SkeletonLoaders/CardGrid/CardGridSkeleton";
import HttpError from "HttpServices/Error/HttpError";
import CardGrid from "components/CardGrid/CardGrid";
import { AppContext } from "Context/AppContext";
import PageHOC from "components/HOCs/Page/PageHOC";

const MyTvShows = () => {
  const { deletedItemId } = useContext(AppContext);
  const { data, isLoading, error } = useQuery({
    url: "tvShows",
    deletedItemId,
  });
  return (
    <Page hasError={error}>
      {isLoading && <CardGridSkeleton />}
      {error && <HttpError message={error} size={"large"} />}
      {data && (
        <CardGrid
          contentList={data.length ? data : "none"}
          header={"My Tv Shows"}
          type={"tv-show"}
          isFromLocalServer={true}
        />
      )}
    </Page>
  );
};

export default PageHOC(MyTvShows);
