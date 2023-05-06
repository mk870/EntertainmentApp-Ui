/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useSelector } from "react-redux";

import Card from "../ContentCard/Card";
import * as styled from "./CarouselStyles";
import { carouselList } from "./Utils/utils";
import PlaylistCard from "../MusicComponents/Cards/Playlist/PlaylistCard";
import TrackAlbumCard from "../MusicComponents/Cards/TrackAlbum/TrackAlbumCard";

const Carousel = ({
  dataList,
  headerText,
  type,
  numberOfItemsShown,
  size,
  auto,
  navigate,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const screenSize = useSelector((state) => state.screenSize.value);
  const updatedDataList = useMemo(() => {
    return carouselList(numberOfItemsShown, dataList);
  }, [numberOfItemsShown, dataList]);
  let totalDataIndex;
  let slideInterval;
  const iconSize = 20;
  totalDataIndex = updatedDataList.length - 1;
  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  const nextSlide = () => {
    if (currentSlide === totalDataIndex) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(totalDataIndex);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  const autoSlide = () => {
    slideInterval = setInterval(nextSlide, 4000);
  };
  useEffect(() => {
    if (auto) {
      autoSlide();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);
  return (
    <styled.CarouselWrapper>
      <styled.textContainer>
        <styled.header size={size}>{headerText}</styled.header>
        <styled.linkContainer>
          <styled.linkText onClick={navigate}>See all</styled.linkText>
          <AiOutlineRight size={15} />
        </styled.linkContainer>
      </styled.textContainer>
      <styled.slidercontent size={size}>
        <AiOutlineLeft
          className="leftArrow"
          size={iconSize}
          onClick={prevSlide}
        />
        <AiOutlineRight
          className="rightArrow"
          size={iconSize}
          onClick={nextSlide}
        />
        {updatedDataList.map((itemList, index) => (
          <div
            className={currentSlide === index ? "current" : "slide"}
            key={index}
          >
            {itemList.map((item) => (
              <div className="item" key={item.id}>
                {type === "playlist" ? (
                  <PlaylistCard
                    content={item}
                    size={screenSize < 940 ? "small" : size}
                  />
                ) : type === "album" ? (
                  <TrackAlbumCard
                    content={item}
                    type={type}
                    size={screenSize < 940 ? "small" : size}
                    isInCarousel={true}
                  />
                ) : (
                  <Card
                    content={item}
                    type={type}
                    size={screenSize < 940 ? "small" : size}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </styled.slidercontent>
    </styled.CarouselWrapper>
  );
};

export default Carousel;
