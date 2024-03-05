import React from "react";

import * as styled from "../Styles";
import { AiFillStar } from "react-icons/ai";

const Popularity = ({ popularity, iconSize }) => {
  return (
    <styled.subContainer>
      <AiFillStar color="gold" size={iconSize} />
      <styled.subHeaderText>{`${popularity} stars`}</styled.subHeaderText>
    </styled.subContainer>
  );
};

export default Popularity;
