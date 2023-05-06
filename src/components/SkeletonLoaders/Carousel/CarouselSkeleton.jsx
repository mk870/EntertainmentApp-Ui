import React from "react";
import * as styled from "./CarouselSkeletonStyles";
import CardSkeleton from "../Card/CardSkeleton";
import { useSelector } from "react-redux";

const CarouselSkeleton = ({ numberOfItemsShown, size }) => {
  const screenSize = useSelector((state) => state.screenSize.value);
  const cardList = Array.from(
    { length: numberOfItemsShown },
    (x, index) => index + 1
  );
  return (
    <styled.Container>
      {cardList.map((card) => (
        <CardSkeleton size={screenSize < 940 ? "small" : size} key={card} />
      ))}
    </styled.Container>
  );
};

export default CarouselSkeleton;
