import React, { useMemo } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import * as styled from "./CastStyles";
import PersonnelCard from "../../PersonnelCard/PersonnelCard";

const Cast = ({ actorsList, type, guestStarsList }) => {
  const navigate = useNavigate();
  const actorsModifiedList = useMemo(() => {
    return () => {
      if (type === "tv-show") {
        return [...actorsList, ...guestStarsList];
      } else {
        return actorsList;
      }
    };
  }, [actorsList, guestStarsList, type]);
  const onNavigate = () => {
    navigate("/actors", {
      state: {
        actors: actorsModifiedList(),
        type: "actor",
      },
    });
  };
  const trimmedActorsList = (actors) => {
    if (actors.length > 6) {
      return actors.slice(0, 6);
    } else {
      return actors;
    }
  };
  const getHeader = () => {
    if (actorsList.length > 0) {
      if (type === "movie") return "Cast";
      else return "Cast and Guest Stars";
    } else return "No Cast";
  };
  return (
    <styled.CastWrapper>
      <styled.header>
        <styled.headerText>{getHeader()}</styled.headerText>
        {actorsList.length > 0 && (
          <styled.linkContainer>
            <styled.linkText onClick={onNavigate}>See all</styled.linkText>
            <AiOutlineRight size={13} />
          </styled.linkContainer>
        )}
      </styled.header>
      <styled.castGrid>
        {trimmedActorsList(actorsList).map((actor) => (
          <PersonnelCard
            key={actor.id}
            handlePersonnelFunc={() => navigate(`/actor/${actor.id}`)}
            image={actor.profile_path}
            size={"large"}
            type={"actor"}
            name={actor.name}
          />
        ))}
      </styled.castGrid>
      {type === "tv-show" && (
        <styled.castGrid>
          {trimmedActorsList(guestStarsList).map((actor) => (
            <PersonnelCard
              key={actor.id}
              handlePersonnelFunc={() => navigate(`/actor/${actor.id}`)}
              image={actor.profile_path}
              size={"large"}
              type={"actor"}
              name={actor.name}
            />
          ))}
        </styled.castGrid>
      )}
    </styled.CastWrapper>
  );
};

export default Cast;
