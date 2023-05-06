import React from "react";
import * as styled from "./ToggleableHeaderStyles";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiOutlineRight } from "react-icons/ai";

const ToggleableHeader = ({
  contentList,
  header,
  type,
  showMoreContentList,
  setShowMoreContentList,
  onNavigate,
  showAll,
  size,
}) => {
  const toggleContentList = () => {
    setShowMoreContentList((value) => !value);
  };
  const iconSize = 15;
  return (
    <styled.header size={size}>
      <styled.headerText size={size}>
        {contentList.length > 0 ? header : `No ${header}`}
      </styled.headerText>
      {contentList.length > 8 && type === "visibility" && (
        <styled.linkContainer>
          <styled.linkText onClick={toggleContentList}>
            {showMoreContentList ? "show less" : "show more"}
          </styled.linkText>
          {showMoreContentList ? (
            <IoIosArrowUp size={iconSize} onClick={toggleContentList} />
          ) : (
            <IoIosArrowDown size={iconSize} onClick={toggleContentList} />
          )}
        </styled.linkContainer>
      )}
      {contentList.length > 0 && type === "navigate" && !showAll && (
        <styled.linkContainer>
          <styled.linkText onClick={onNavigate}>See all</styled.linkText>
          <AiOutlineRight size={iconSize} />
        </styled.linkContainer>
      )}
    </styled.header>
  );
};

export default ToggleableHeader;
