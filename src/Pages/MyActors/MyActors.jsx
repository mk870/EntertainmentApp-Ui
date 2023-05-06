import React from "react";

import useBackendQuery from "../../HttpServices/Hooks/useBackendQuery";
import CardGridSkeleton from "../../components/SkeletonLoaders/CardGrid/CardGridSkeleton";
import HttpError from "../../HttpServices/Error/HttpError";
import CardGrid from "../../components/CardGrid/CardGrid";
import { Page } from "../../Css/PageStyles";

const MyActors = () => {
  const { data, isLoading, error } = useBackendQuery({ url: "" });
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

export default MyActors;
