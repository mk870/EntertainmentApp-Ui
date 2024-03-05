import React from "react";
import { HiOutlineMusicNote } from "react-icons/hi";
import * as styled from "../Styles";

const TrackNumber = ({ trackNumber, iconSize }) => {
  return (
    <styled.subContainer>
      <HiOutlineMusicNote size={iconSize} />
      <styled.subHeaderText>
        {`${trackNumber}${
          trackNumber === 1
            ? "st"
            : trackNumber === 2
            ? "nd"
            : trackNumber === 3
            ? "rd"
            : "th"
        } track`}
      </styled.subHeaderText>
    </styled.subContainer>
  );
};

export default TrackNumber;
