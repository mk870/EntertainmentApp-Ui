import React from 'react'
import useBackendQuery from '../../HttpServices/Hooks/useBackendQuery';
import { Page } from '../../Css/PageStyles';
import CardGridSkeleton from '../../components/SkeletonLoaders/CardGrid/CardGridSkeleton';
import HttpError from '../../HttpServices/Error/HttpError';
import CardGrid from '../../components/CardGrid/CardGrid';

const MyTvShows = () => {
  const { data, isLoading, error } = useBackendQuery({ url: "" });
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
  )
}

export default MyTvShows