import styled, { css, keyframes } from "styled-components";
import { backgroundColor, secondaryThemeColor } from "Css/Variables";

const slideOut = keyframes`
  0% { transform: translateX(0%);}
  100% { transform: translateX(-100%);}
`;

const slideIn = keyframes`
0% { transform: translateX(-100%);}
100% { transform: translateX(0%);}
`;
const slideInAnimation = css`
  animation: ${slideIn} 0.6s ease;
`;
const slideOutAnimation = css`
  animation: ${slideOut} 0.6s ease;
`;
export const DrawerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  background-color: ${backgroundColor};
  position: fixed;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-track {
    background: ${backgroundColor};
  }
  ::-webkit-scrollbar-thumb {
    background: ${secondaryThemeColor};
    border-radius: 5px;
    &:hover {
      cursor: pointer;
    }
  }
  left: 0;
  top: 0;
  bottom: 0;
  width: 250px;
  z-index: 1000;
  ${({ isOpen }) => (isOpen ? slideInAnimation : slideOutAnimation)}
`;

export const DrawerOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  pointer-events: all;
  z-index: 1000;
`;
