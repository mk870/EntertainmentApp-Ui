import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

import * as styled from "../../Styles";

const Link = ({ text, iconSize, onClickFunc }) => {
  return (
    <styled.AddLink onClick={onClickFunc}>
      <AiOutlinePlus size={iconSize} />
      <styled.addLinkText>{text}</styled.addLinkText>
    </styled.AddLink>
  );
};

export default Link;
