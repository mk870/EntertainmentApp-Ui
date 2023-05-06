import React from 'react'
import useBackendQuery from '../../HttpServices/Hooks/useBackendQuery'
import {Page} from '../../Css/PageStyles.js'
import CardGridSkeleton from '../../components/SkeletonLoaders/CardGrid/CardGridSkeleton'
import HttpError from '../../HttpServices/Error/HttpError'
import CardGrid from '../../components/CardGrid/CardGrid'

const MySongs = () => {
  const { data, isLoading, error } = useBackendQuery({ url: "" });
  return (
    <Page hasError={error}>
    {isLoading && <CardGridSkeleton />}
      {error && <HttpError message={error} size={"large"} />}
      {data && (
        <CardGrid
          contentList={data.length ? data : "none"}
          header={"My Songs"}
          type={"track"}
          isFromLocalServer={true}
        />
      )}
    </Page>
  )
}

export default MySongs