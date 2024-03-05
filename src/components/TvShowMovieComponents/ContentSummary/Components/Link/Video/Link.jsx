import React from "react";
import * as styled from "./LinkStyles";
import { RxVideo } from "react-icons/rx";

const Link = ({ onClickFunc, link, iconSize }) => {
  return (
    <styled.videoLink key={link} onClick={onClickFunc}>
      <RxVideo size={iconSize} className="video-icon" />
      <styled.addLinkText>{link}</styled.addLinkText>
    </styled.videoLink>
  );
};

export default Link;
