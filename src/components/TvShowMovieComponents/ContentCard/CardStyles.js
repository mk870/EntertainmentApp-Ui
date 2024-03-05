import styled, { css, keyframes } from "styled-components";
import {
  mainThemeColor,
  redColor,
  secondaryThemeColor,
} from "../../../Css/Variables";
import { slideOnLeftClickAnimation, slideOnRightClickAnimation } from "Utils/CarouselCardAnimations";


export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
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
  @media (max-width: 400px) {
    width: 100%;
    height: 390px;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(26, 24, 29, 0.4);
  background-color: ${(props) =>
    props.size === "large" ? "rgba(26, 24, 29, 0.4)" : "rgba(26, 24, 29, 0.4)"};
  background-blend-mode: overlay;
  z-index: 2;
  border-radius: 10px;
`;
export const poster = styled.img`
  width: ${(props) => (props.size === "large" ? "225px" : "180px")};
  height: ${(props) => (props.size === "large" ? "250px" : "175px")};
  border-radius: 10px;
  @media (max-width: 400px) {
    width: 100%;
    height: 390px;
  }
`;
export const ratingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background: black;
  border-radius: 10px;
  width: 35px;
  height: 20px;
  padding: 0px 4px;
  position: absolute;
  top: 5px;
  left: 9px;
  z-index: 3;
`;
export const ratingText = styled.p`
  color: aliceblue;
  font-size: 13px;
`;
export const contentDetails = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  position: absolute;
  bottom: 5px;
  left: 9px;
`;
export const name = styled.p`
  color: aliceblue;
  font-size: 15px;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 5px;
  z-index: 4;
`;
export const date = styled.p`
  color: aliceblue;
  font-size: 14px;
  font-weight: 200;
  margin-top: 0;
  margin-bottom: 5px;
  z-index: 4;
`;
export const linksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.size === "large" || props.type === "actor" ? "end" : "space-between"};
  flex-direction: row;
  position: absolute;
  padding: 0px 7px 5px 7px;
  bottom: 5px;
  left: 0;
  right: 0;
  z-index: 4;
`;
export const viewLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: aliceblue;
  border-radius: ${(props) => (props.size === "large" ? "5px" : "3px")};
  background: ${mainThemeColor};
  width: ${(props) => (props.size === "large" ? "60px" : "45px")};
  height: ${(props) => (props.size === "large" ? "25px" : "20px")};
  font-size: ${(props) => (props.size === "large" ? "13px" : "11px")};
  margin-right: ${(props) => (props.size === "large" ? "5px" : "0")};
  z-index: 8;
  &:hover {
    cursor: pointer;
  }
`;
export const addLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: aliceblue;
  background: ${secondaryThemeColor};
  border-radius: 100%;
  height: ${(props) => (props.size === "large" ? "30px" : "25px")};
  width: ${(props) => (props.size === "large" ? "30px" : "25px")};
  margin-right: ${(props) => (props.size === "large" ? "5px" : "0")};
  z-index: 8;
  &:hover {
    cursor: pointer;
  }
`;
export const deleteLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: aliceblue;
  border-radius: ${(props) => (props.size === "large" ? "5px" : "3px")};
  background: ${redColor};
  width: ${(props) => (props.size === "large" ? "60px" : "45px")};
  height: ${(props) => (props.size === "large" ? "25px" : "20px")};
  font-size: ${(props) => (props.size === "large" ? "13px" : "11px")};
  margin-right: ${(props) => (props.size === "large" ? "5px" : "0")};
  z-index: 8;
  &:hover {
    cursor: pointer;
  }
`;
export const largeCardRatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  z-index: 4;
  .imdb-icon {
    margin-right: 5px;
  }
`;
