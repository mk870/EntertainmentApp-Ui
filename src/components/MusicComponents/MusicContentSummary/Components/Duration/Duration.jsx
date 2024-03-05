import React from "react";
import * as styled from "../Styles";
import { BiTime } from "react-icons/bi";

const Duration = ({ duration, iconSize }) => {
  const trackDurationInMins = (durationInMs) => {
    if (durationInMs) return `${Math.round(durationInMs / 60000)} mins`;
    else return "--- mins";
  };
  return (
    <styled.subContainer>
      <BiTime size={iconSize} />
      <styled.subHeaderText>
        {trackDurationInMins(duration)}
      </styled.subHeaderText>
    </styled.subContainer>
  );
};

export default Duration;
