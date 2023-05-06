import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import * as styled from "./ToggleableListStyles";
import CardGrid from "../CardGrid/CardGrid";

const ToggleableList = ({ contentList, type, header }) => {
  const [showMoreContentList, setShowMoreContentList] = useState(false);
  const toggleContentList = () => {
    setShowMoreContentList((value) => !value);
  };
  const toggledContentList = () => {
    if (!showMoreContentList) {
      if (contentList.length > 10) {
        return contentList.slice(0, 10);
      } else return contentList;
    } else return contentList;
  };
  const iconSize = 18;
  return (
    <styled.container>
      <styled.header>
        <styled.headerText>
          {contentList.length > 0 ? header : `No ${header}`}
        </styled.headerText>
        {contentList.length > 10 && (
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
      </styled.header>
      <CardGrid contentList={toggledContentList()} type={type} header={""} />
    </styled.container>
  );
};

export default ToggleableList;
