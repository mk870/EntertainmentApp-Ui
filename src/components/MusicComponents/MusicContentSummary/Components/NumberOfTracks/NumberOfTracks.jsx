import React from "react";

import * as styled from "../Styles";
import { HiOutlineMusicNote } from "react-icons/hi";

const NumberOfTracks = ({ iconSize, totalTracks }) => {
  return (
    <styled.subContainer>
      <HiOutlineMusicNote size={iconSize} />
      <styled.subHeaderText>{`${totalTracks} tracks`}</styled.subHeaderText>
    </styled.subContainer>
  );
};

export default NumberOfTracks;
