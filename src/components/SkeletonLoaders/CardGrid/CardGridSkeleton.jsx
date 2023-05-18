import React from "react";
import { useSelector } from "react-redux";

import * as styled from "./CardGridSkeletonStyles";
import CardSkeleton from "../Card/CardSkeleton";

const CardGridSkeleton = () => {
  const screenSize = useSelector((state) => state.screenSize.value);
  const dummyList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <styled.CardGridWrapper>
      <styled.Grid>
        {dummyList.map((item) => (
          <CardSkeleton
            key={item}
            size={screenSize < 800 ? "small" : "large"}
          />
        ))}
      </styled.Grid>
    </styled.CardGridWrapper>
  );
};

export default CardGridSkeleton;
