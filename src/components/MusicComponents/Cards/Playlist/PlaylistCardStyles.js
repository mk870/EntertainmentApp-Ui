import styled, { css, keyframes } from "styled-components";
import {
  backgroundColor,
  mainThemeColor,
  secondaryThemeColor,
} from "../../../../Css/Variables";
import { slideOnLeftClickAnimation, slideOnRightClickAnimation } from "Utils/CarouselCardAnimations";


export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  ${({
    isInCarousel,
    animationTime,
    animationDistance,
    leftCarouselMovement,
  }) =>
    isInCarousel &&
    leftCarouselMovement &&
    slideOnLeftClickAnimation(animationTime, animationDistance)}
  ${({
    isInCarousel,
    animationTime,
    animationDistance,
    rightCarouselMovement,
  }) =>
    isInCarousel &&
    rightCarouselMovement &&
    slideOnRightClickAnimation(animationTime, animationDistance)}
  width: ${(props) => (props.size === "large" ? "225px" : "180px")};
  height: ${(props) => (props.size === "large" ? "250px" : "175px")};
  margin: 0 3px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  background: ${backgroundColor};
  backdrop-filter: blur(5px);
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 400px) {
    width: 100%;
    height: 390px;
  }
  @media (max-width: 350px) {
    width: 100%;
    height: 330px;
  }
`;
export const poster = styled.img`
  width: ${(props) => (props.size === "large" ? "100%" : "90%")};
  height: ${(props) => (props.size === "large" ? "180px" : "110px")};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: ${(props) =>
    props.size === "large" ? "0px" : "10px"};
  border-bottom-right-radius: ${(props) =>
    props.size === "large" ? "0px" : "10px"};
  background: ${backgroundColor};
  @media (max-width: 400px) {
    width: 100%;
    border-radius: 10px;
    height: 100%;
  }
`;

export const detailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  color: ${secondaryThemeColor};
  margin-top: 7px;
  width: 90%;
  @media (max-width: 400px) {
    display: none;
  }
`;

export const name = styled.p`
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 3px 0;
  color: aliceblue;
  @media (max-width: 750px) {
    font-size: 14px;
    font-weight: 500;
  }
  @media (max-width: 600px) {
    font-size: 12px;
    font-weight: 400;
  }
`;
export const row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 2px;
  margin-bottom: 5px;
  width: 100%;
`;
export const detailsText = styled.p`
  font-size: 13px;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 11px;
  }
`;

export const subContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-right: 10px;
  .sub-icon {
    margin-right: 5px;
  }
`;
export const viewLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: aliceblue;
  border-radius: 5px;
  background: ${mainThemeColor};
  width: ${(props) => (props.size === "large" ? "70px" : "50px")};
  height: ${(props) => (props.size === "large" ? "30px" : "25px")};
  font-size: 13px;
  &:hover {
    cursor: pointer;
  }
`;
