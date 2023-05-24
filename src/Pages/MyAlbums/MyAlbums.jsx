import React, { useContext } from 'react'
import { Page } from '../../Css/PageStyles'
import CardGridSkeleton from '../../components/SkeletonLoaders/CardGrid/CardGridSkeleton';
import HttpError from '../../HttpServices/Error/HttpError';
import CardGrid from '../../components/CardGrid/CardGrid';
import useQuery from '../../HttpServices/Hooks/useQuery';
import { AppContext } from 'Context/AppContext';

const MyAlbums = () => {
  const {deletedItemId} = useContext(AppContext)
  const { data, isLoading, error } = useQuery({ url: "albums",deletedItemId });
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