import { css, keyframes } from "styled-components";

export const opacityRightAnimation = (animationDistance) => {
  return keyframes`
 0% { opacity:0; margin-right:-${animationDistance};}
 100% { opacity: 1; margin-right:0px}
`;
};

export const opacityLeftAnimation = (animationDistance) => {
  return keyframes`
 0% { opacity:0; margin-left:-${animationDistance};}
 100% { opacity: 1; margin-left:0px}
`;
};

export const slideOnRightClickAnimation = (
  animationTime,
  animationDistance
) => {
  return css`
    animation: ${opacityRightAnimation(animationDistance)} ${animationTime}
      linear;
  `;
};
export const slideOnLeftClickAnimation = (animationTime, animationDistance) => {
  return css`
    animation: ${opacityLeftAnimation(animationDistance)} ${animationTime}
      linear;
  `;
};
