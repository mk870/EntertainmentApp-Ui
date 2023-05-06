import React from "react";
import * as styled from "./CardGridSkeletonStyles";
import CardSkeleton from "../Card/CardSkeleton";
import { useSelector } from "react-redux";

const CardGridSkeleton = () => {
  const screenSize = useSelector((state) => state.screenSize.value);
  const dummyList = [1,2,3,4,5,6,7,8]
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
