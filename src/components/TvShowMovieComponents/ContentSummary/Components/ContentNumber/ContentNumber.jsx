import React from "react";
import { FaTv } from "react-icons/fa";

import * as styled from "../Styles";

const ContentNumber = ({ iconSize, episodes, seasonNumber, seasons,type }) => {
  return (
    <styled.subContainer>
      <FaTv size={iconSize} />
      <styled.subHeaderText>
        {type === "season" && `no. episodes ${episodes}`}
        {type === "episode" && `season ${seasonNumber}`}
        {type === "tv-show" && `no. seasons ${seasons}`}
      </styled.subHeaderText>
    </styled.subContainer>
  );
};

export default ContentNumber;
