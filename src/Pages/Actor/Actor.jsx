import React from "react";
import { useParams } from "react-router-dom";

import * as styled from "./ActorStyles";
import HttpError from "../../HttpServices/Error/HttpError";
import ContentSummary from "../../components/ContentSummary/ContentSummary";
import { getHeader, getOverview } from "../../Utils/ContentSummaryFuncs";
import emptyProfilePic from "../../Assets/empty-profile.jpg";
import ToggleableList from "../../components/ToggleableList/ToggleableList";
import useTMDB from "../../HttpServices/Hooks/useTMDB";
import ContentSummarySkeleton from "../../components/SkeletonLoaders/ContentSummary/ContentSummarySkeleton";
import ToggleableListSkeleton from "../../components/SkeletonLoaders/ToggleableList/ToggleableListSkeleton";

const Actor = () => {
  const { id } = useParams();
  const actorDetails = useTMDB({ url: `person/${id}` });
  const actorMovies = useTMDB({ url: `person/${id}/movie_credits` });
  const actorTvShows = useTMDB({ url: `person/${id}/tv_credits` });
  const getProfile = (profile) => {
    if (profile) return `https://image.tmdb.org/t/p/w500/${profile}`;
    else return emptyProfilePic;
  };
  const ageCalulator = (dateString) => {
    if (dateString) {
      let today = new Date();
      let birthDate = new Date(dateString);
      let age = today.getFullYear() - birthDate.getFullYear();
      let month = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return String(age);
    }
    return "null";
  };
  return (
    <styled.container>
      {actorDetails.isLoading && <ContentSummarySkeleton />}
      {actorDetails.error && (
        <HttpError message={actorDetails.error} size="large" />
      )}
      {actorDetails.data && (
        <>
          <ContentSummary
            image={getProfile(actorDetails.data.profile_path)}
            header={getHeader(actorDetails.data.name)}
            overview={getOverview(actorDetails.data.biography)}
            rating={actorDetails.data.popularity}
            id={actorDetails.data.id}
            age={ageCalulator(actorDetails.data.birthday)}
            birthPlace={
              actorDetails.data.place_of_birth
                ? actorDetails.data.place_of_birth
                : "no data"
            }
            type="actor"
          />
        </>
      )}
      {actorMovies.isLoading && <ToggleableListSkeleton numberOfItemsShown={8}/>}
      {actorMovies.error && (
        <HttpError message={actorMovies.error} size="large" />
      )}
      {actorMovies.data && (
        <ToggleableList
          contentList={actorMovies.data.cast}
          type={"movie"}
          header={`Featured Movies`}
        />
      )}
      {actorTvShows.isLoading && <ToggleableListSkeleton numberOfItemsShown={8} />}
      {actorTvShows.error && (
        <HttpError message={actorTvShows.error} size="large" />
      )}
      {actorTvShows.data && (
        <ToggleableList
          contentList={actorTvShows.data.cast}
          type={"tv-show"}
          header={`Featured TV Shows`}
        />
      )}
    </styled.container>
  );
};

export default Actor;
