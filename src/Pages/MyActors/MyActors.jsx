import React, { useContext } from "react";

import useQuery from "HttpServices/Hooks/useQuery";
import CardGridSkeleton from "components/SkeletonLoaders/CardGrid/CardGridSkeleton";
import HttpError from "HttpServices/Error/HttpError";
import CardGrid from "components/CardGrid/CardGrid";
import { Page } from "Css/PageStyles";
import { AppContext } from "Context/AppContext";
import PageHOC from "components/HOCs/Page/PageHOC";

const MyActors = () => {
  const { deletedItemId } = useContext(AppContext);
  const { data, isLoading, error } = useQuery({ url: "actors", deletedItemId });
  return (
    <Page hasError={error}>
      {isLoading && <CardGridSkeleton />}
      {error && <HttpError message={error} size={"large"} />}
      {data && (
        <CardGrid
          contentList={data.length ? data : "none"}
          header={"My Actors"}
          type={"actor"}
          isFromLocalServer={true}
        />
      )}
    </Page>
  );
};

export default PageHOC(MyActors);
