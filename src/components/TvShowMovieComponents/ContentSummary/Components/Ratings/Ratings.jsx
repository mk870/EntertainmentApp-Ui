import React from "react";
import { AiFillStar } from "react-icons/ai";

import * as styled from "../Styles";

const Ratings = ({ rating, iconSize }) => {
  return (
    <styled.subContainer>
      <AiFillStar size={iconSize} color={"gold"} />
      <styled.subHeaderText>{rating}</styled.subHeaderText>
    </styled.subContainer>
  );
};

export default Ratings;
