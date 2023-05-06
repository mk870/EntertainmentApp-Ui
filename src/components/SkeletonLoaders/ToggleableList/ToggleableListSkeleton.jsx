import React from "react";
import * as styled from "./ToggleableListSkeletonStyles";
import CardGridSkeleton from "../CardGrid/CardGridSkeleton";

const ToggleableListSkeleton = ({ numberOfItemsShown }) => {
  const cardList = Array.from(
    { length: numberOfItemsShown },
    (x, index) => index + 1
  );
  return (
    <styled.container>
      <CardGridSkeleton numberOfItemsShown={cardList} />
    </styled.container>
  );
};

export default ToggleableListSkeleton;
