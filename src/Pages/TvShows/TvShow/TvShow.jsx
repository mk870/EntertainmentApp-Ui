import React from "react";
import { useParams } from "react-router-dom";

import ContentSummary from "components/TvShowMovieComponents/ContentSummary/ContentSummary";
import HttpError from "HttpServices/Error/HttpError";
import {
  getCreators,
  getGenres,
  getHeader,
  getOverview,
  getRating,
  getReleaseDate,
  getRuntime,
} from "Utils/ContentSummaryFuncs";
import * as styled from "./TvShowStyles";
import Reviews from "components/TvShowMovieComponents/Reviews/Reviews";
import SeasonsList from "components/TvShowMovieComponents/SeasonsList/SeasonsList";
import ToggleableList from "components/ToggleableList/ToggleableList";
import useTMDB from "HttpServices/Hooks/useTMDB";
import emptyTVshowPoster from "Assets/poster.jpg";
import ReviewsSkeleton from "components/SkeletonLoaders/Reviews/ReviewsSkeleton";
import ToggleableListSkeleton from "components/SkeletonLoaders/ToggleableList/ToggleableListSkeleton";
import ContentSummarySkeleton from "components/SkeletonLoaders/ContentSummary/ContentSummarySkeleton";
import PageHOC from "components/HOCs/Page/PageHOC";

const TvShow = () => {
  const { id } = useParams();
  const tvShowUrl = `tv/${id}`;
  const reviewsUrl = `tv/${id}/reviews`;
  const recommendationsUrl = `tv/${id}/recommendations`;
  const getTVshowPoster = (image) => {
    if (image) return `https://image.tmdb.org/t/p/w500/${image}`;
    else return emptyTVshowPoster;
  };
  const { data, isLoading, error } = useTMDB({ url: tvShowUrl });
  const reviews = useTMDB({ url: reviewsUrl });
  const recommendations = useTMDB({ url: recommendationsUrl });
  return (
    <styled.TvShowWrapper>
      {isLoading && <ContentSummarySkeleton />}
      {error && <HttpError message={error} size="large" />}
      {data && (
        <>
          <ContentSummary
            image={getTVshowPoster(data.poster_path)}
            releaseDate={getReleaseDate(data.first_air_date)}
            runtime={getRuntime(data.episode_run_time)}
            rating={getRating(data.vote_average)}
            header={getHeader(data.name)}
            genres={getGenres(data.genres)}
            overview={getOverview(data.overview)}
            seasons={data.number_of_seasons}
            creators={getCreators(data.created_by)}
            id={data.id}
            type="tv-show"
          />
          <SeasonsList
            id={id}
            listOfSeasons={data.seasons}
            showName={data.name}
          />
        </>
      )}
      {recommendations.isLoading && (
        <ToggleableListSkeleton numberOfItemsShown={8} />
      )}
      {recommendations.error && (
        <HttpError message={recommendations.error} size="large" />
      )}
      {recommendations.data && (
        <ToggleableList
          contentList={recommendations.data.results}
          type={"tv-show"}
          header={"Recommendations for you"}
        />
      )}
      {reviews.isLoading && <ReviewsSkeleton />}
      {reviews.error && <HttpError message={reviews.error} size="large" />}
      {reviews.data && <Reviews reviews={reviews.data.results} />}
    </styled.TvShowWrapper>
  );
};

export default PageHOC(TvShow);
