import React from "react";
import { useParams } from "react-router-dom";
import millify from "millify";

import * as styled from "./MovieStyles";
import useTMDB from "../../../HttpServices/Hooks/useTMDB";
import HttpError from "../../../HttpServices/Error/HttpError";
import ContentSummary from "../../../components/ContentSummary/ContentSummary";
import {
  getGenres,
  getHeader,
  getOverview,
  getRating,
  getReleaseDate,
  getRuntime,
} from "../../../Utils/ContentSummaryFuncs";
import emptyMoviePoster from "../../../Assets/poster.jpg";
import ToggleableList from "../../../components/ToggleableList/ToggleableList";
import Reviews from "../../../components/Reviews/Reviews";
import Cast from "../../../components/Cast/Cast";
import ContentSummarySkeleton from "../../../components/SkeletonLoaders/ContentSummary/ContentSummarySkeleton";
import CastSkeleton from "../../../components/SkeletonLoaders/Cast/CastSkeleton";
import ToggleableListSkeleton from "../../../components/SkeletonLoaders/ToggleableList/ToggleableListSkeleton";
import ReviewsSkeleton from "../../../components/SkeletonLoaders/Reviews/ReviewsSkeleton";

const Movie = () => {
  const { id } = useParams();
  const movieDetails = useTMDB({ url: `/movie/${id}` });
  const recommendations = useTMDB({ url: `/movie/${id}/recommendations` });
  const reviews = useTMDB({ url: `/movie/${id}/reviews` });
  const cast = useTMDB({ url: `/movie/${id}/credits` });
  const getMoviePoster = (image) => {
    if (image) return `https://image.tmdb.org/t/p/w500/${image}`;
    else return emptyMoviePoster;
  };
  const processAmount = (amount) => {
    if (amount) return `$${millify(amount)}`;
    else return "no financial data";
  };
  return (
    <styled.MovieWrapper>
      {movieDetails.isLoading && <ContentSummarySkeleton />}
      {movieDetails.error && (
        <HttpError message={movieDetails.error} size="large" />
      )}
      {movieDetails.data && (
        <>
          <ContentSummary
            image={getMoviePoster(movieDetails.data.poster_path)}
            releaseDate={getReleaseDate(movieDetails.data.release_date)}
            runtime={getRuntime(movieDetails.data.runtime)}
            rating={getRating(movieDetails.data.vote_average)}
            header={getHeader(movieDetails.data.title)}
            genres={getGenres(movieDetails.data.genres)}
            overview={getOverview(movieDetails.data.overview)}
            movieTagLine={getOverview(movieDetails.data.tagline)}
            revenue={processAmount(movieDetails.data.revenue)}
            budget={processAmount(movieDetails.data.budget)}
            id={movieDetails.data.id}
            type="movie"
          />
        </>
      )}
      {cast.isLoading && <CastSkeleton type={"movie"} />}
      {cast.error && <HttpError message={cast.error} size="large" />}
      {cast.data && <Cast actorsList={cast.data.cast} type={"movie"} />}
      {recommendations.isLoading && (
        <ToggleableListSkeleton numberOfItemsShown={8} />
      )}
      {recommendations.error && (
        <HttpError message={recommendations.error} size="large" />
      )}
      {recommendations.data && (
        <ToggleableList
          contentList={recommendations.data.results}
          type={"movie"}
          header={"Recommendations for you"}
        />
      )}
      {reviews.isLoading && <ReviewsSkeleton />}
      {reviews.error && <HttpError message={reviews.error} size="large" />}
      {reviews.data && <Reviews reviews={reviews.data.results} />}
    </styled.MovieWrapper>
  );
};

export default Movie;
