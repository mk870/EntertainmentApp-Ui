import React from "react";
import * as styled from "./LinkStyles";
import { IoPlayOutline } from "react-icons/io5";
import { BiMoviePlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

const Link = ({ type, text, onClickFunc }) => {
  return (
    <styled.AddLink onClick={onClickFunc}>
      {type === "audio" ? (
        <IoPlayOutline size={20} />
      ) : type === "add" ? (
        <AiOutlinePlus size={20} />
      ) : (
        <BiMoviePlay size={20} />
      )}
      <styled.addLinkText>{text}</styled.addLinkText>
    </styled.AddLink>
  );
};

export default Link;
