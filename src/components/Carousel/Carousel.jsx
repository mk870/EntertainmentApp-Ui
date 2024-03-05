/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useSelector } from "react-redux";

import Card from "../TvShowMovieComponents/ContentCard/Card";
import * as styled from "./CarouselStyles";
import { carouselList, itemsShownPerScreenSize } from "./Utils/utils";
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
  const [openNextSlide, setOpenNextSlide] = useState(false);
  const [openPrevSlide, setOpenPrevSlide] = useState(false);
  const updatedDataList = useMemo(() => {
    return carouselList(numberOfItemsShown, dataList);
  }, [numberOfItemsShown, dataList]);
  let totalDataIndex;
  let slideInterval;
  const iconSize = 20;
  const delayTime = 800;
  const pixelsMarginAnimation = 20;
  totalDataIndex = updatedDataList.length - 1;
  useEffect(() => {
    setCurrentSlide(0);
  }, []);
  const animationTimeFunc = (index) => {
    let time = 0.25;
    if (openNextSlide) {
      time = (index + 1) / 6;
    }
    if (openPrevSlide) {
      time = (itemsShownPerScreenSize(screenSize) - index) / 6;
    }
    return `${time.toFixed(2)}s`;
  };
  const animationMovementdistance = (pixelsMoved, index) => {
    let pixelDistance = 10;
    if (openNextSlide) {
      pixelDistance = (index + 1) * pixelsMoved;
    }
    if (openPrevSlide) {
      pixelDistance =
        (itemsShownPerScreenSize(screenSize) - index) * pixelsMoved;
    }
    return `${pixelDistance.toString()}px`;
  };
  const nextSlide = () => {
    if (currentSlide === totalDataIndex) {
      setOpenNextSlide((value) => !value);
      setCurrentSlide(0);
    } else {
      setOpenNextSlide((value) => !value);
      setCurrentSlide(currentSlide + 1);
    }
    setTimeout(() => {
      setOpenNextSlide((value) => !value);
    }, delayTime);
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setOpenPrevSlide((value) => !value);
      setCurrentSlide(totalDataIndex);
    } else {
      setOpenPrevSlide((value) => !value);
      setCurrentSlide(currentSlide - 1);
    }
    setTimeout(() => {
      setOpenPrevSlide((value) => !value);
    }, delayTime);
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
            {itemList.map((item, index) => (
              <styled.CardWrapper key={item.id}>
                {type === "playlist" ? (
                  <PlaylistCard
                    content={item}
                    size={screenSize < 940 ? "small" : size}
                    isInCarousel={true}
                    animationDistance={animationMovementdistance(
                      pixelsMarginAnimation,
                      index
                    )}
                    animationTime={animationTimeFunc(index)}
                    rightCarouselMovement={openNextSlide}
                    leftCarouselMovement={openPrevSlide}
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
                    isInCarousel={true}
                    animationDistance={animationMovementdistance(
                      pixelsMarginAnimation,
                      index
                    )}
                    animationTime={animationTimeFunc(index)}
                    rightCarouselMovement={openNextSlide}
                    leftCarouselMovement={openPrevSlide}
                  />
                )}
              </styled.CardWrapper>
            ))}
          </div>
        ))}
      </styled.slidercontent>
    </styled.CarouselWrapper>
  );
};

export default Carousel;
