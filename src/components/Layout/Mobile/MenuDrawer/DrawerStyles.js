import styled from "styled-components";
import { backgroundColor } from "../../../../Css/Variables";

export const DrawerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${backgroundColor};
  position: fixed;
  left:0;
  top:0;
  bottom:0;
  width: 190px;
  z-index: 300;
  animation: moveInAnimation ease 0.6s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes moveInAnimation {
    0% {
      transform: translateX(-60%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;


export const DrawerOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  pointer-events: all;
`;

