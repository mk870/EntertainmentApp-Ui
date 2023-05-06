import React from 'react'
import { Page } from '../../Css/PageStyles'
import CardGridSkeleton from '../../components/SkeletonLoaders/CardGrid/CardGridSkeleton';
import HttpError from '../../HttpServices/Error/HttpError';
import CardGrid from '../../components/CardGrid/CardGrid';
import useBackendQuery from '../../HttpServices/Hooks/useBackendQuery';

const MyAlbums = () => {
  const { data, isLoading, error } = useBackendQuery({ url: "" });
  return (
    <Page hasError={error}>
      {isLoading && <CardGridSkeleton />}
      {error && <HttpError message={error} size={"large"} />}
      {data && (
        <CardGrid
          contentList={data.length ? data : "none"}
          header={"My Albums"}
          type={"album"}
          isFromLocalServer={true}
        />
      )}
    </Page>
  )
}

export default MyAlbums