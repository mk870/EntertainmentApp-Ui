import React from "react";

import * as styled from "../Styles";
import { AiOutlineCalendar } from "react-icons/ai";

const ReleaseDate = ({ releaseDate, iconSize }) => {
  return (
    <styled.subContainer>
      <AiOutlineCalendar size={iconSize} />
      <styled.subHeaderText>{releaseDate}</styled.subHeaderText>
    </styled.subContainer>
  );
};

export default ReleaseDate;
