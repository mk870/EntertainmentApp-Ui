import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import * as styled from "./SeasonsListStyles";

const SeasonsList = ({ id, listOfSeasons, showName }) => {
  const [showMoreSeasons, setShowMoreSeasons] = useState(false);
  const navigate = useNavigate();
  const iconSize = 18;
  const onNavigate = (season_number,air_date) => {
    if(air_date){
      navigate(`/tv-show/season/${season_number}`, {
        state: {
          showId: id,
          showName
        },
      });
    }
  };
  const toggleShowMoreSeasons = () => {
    setShowMoreSeasons((value) => !value);
  };
  const trimmedSeasonsList = (rawList) => {
    if (rawList.length > 6) {
      return rawList.slice(0, 4);
    } else {
      return rawList;
    }
  };
  return (
    <styled.Container>
      <styled.Header>
        <styled.headerText>Seasons</styled.headerText>
        {listOfSeasons.length > 6 && (
          <styled.toggleContainer>
            <styled.HeaderText2 onClick={toggleShowMoreSeasons}>
              {showMoreSeasons ? "show less" : "show more"}
            </styled.HeaderText2>
            {showMoreSeasons ? (
              <IoIosArrowUp size={iconSize} onClick={toggleShowMoreSeasons} />
            ) : (
              <IoIosArrowDown size={iconSize} onClick={toggleShowMoreSeasons} />
            )}
          </styled.toggleContainer>
        )}
      </styled.Header>
      <styled.seasons>
        {showMoreSeasons
          ? listOfSeasons.map((season) => (
              <styled.season
                key={season.id}
                onClick={() => onNavigate(season.season_number,season.air_date)}
              >
                <styled.poster
                  src={`https://image.tmdb.org/t/p/w500/${season.poster_path}`}
                  alt="poster"
                />
                <styled.seasonText>
                  {`season ${season.season_number}`}
                </styled.seasonText>
              </styled.season>
            ))
          : trimmedSeasonsList(listOfSeasons).map((season) => (
              <styled.season
                key={season.id}
                onClick={() => onNavigate(season.season_number,season.air_date)}
              >
                <styled.poster
                  src={`https://image.tmdb.org/t/p/w500/${season.poster_path}`}
                  alt="poster"
                />
                <styled.seasonText>
                  {`season ${season.season_number}`}
                </styled.seasonText>
              </styled.season>
            ))}
      </styled.seasons>
    </styled.Container>
  );
};

export default SeasonsList;
