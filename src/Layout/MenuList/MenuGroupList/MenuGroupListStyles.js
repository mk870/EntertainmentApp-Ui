import {
  mainThemeColor,
  menuHoverColor,
  secondaryThemeColor,
} from "Css/Variables";
import styled, { css, keyframes } from "styled-components";

const slideUp = keyframes`
  0% { transform: translateY(0px);}
  100% { transform: translateY(-17px);}
`;

const slideDown = keyframes`
0% { transform: translateY(-17px);}
100% { transform: translateY(0px);}
`;
const appear = keyframes`
0% { opacity: 0;}
100% { opacity: 1;}
`;
const disappear = keyframes`
0% { opacity: 1;}
100% { opacity: 0;}
`;
const slideUpAnimation = css`
  animation: ${slideUp} 0.8s ease;
`;
const slideDownAnimation = css`
  animation: ${slideDown} 0.8s ease;
`;

const appearAnimation = css`
  animation: ${appear} 0.8s ease;
`;
const disappearAnimation = css`
  animation: ${disappear} 0.8s ease;
`;
export const Container = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  box-sizing: border-box;
  padding-left: 10px;
  padding-bottom: 2px;
  color: ${secondaryThemeColor};
  border-left: 1px solid ${mainThemeColor};
  border-bottom-left-radius: 20px;
  margin-bottom: 5px;
  ${slideDownAnimation}
  ${({ isClosed }) => isClosed && slideUpAnimation}
`;
export const MenuGroupItem = styled.div`
  ${appearAnimation}
  ${({ isClosed }) => isClosed && disappearAnimation}
  opacity: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  height: 35px;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
  padding: 5px;
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
    background-color: ${menuHoverColor};
  }
`;
export const MenuGroupItemText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  .menu-icon {
    color: ${(props) => (props.clicked ? mainThemeColor : secondaryThemeColor)};
    margin-top: 5px;
    font-size: 20px;
  }
  p {
    margin-left: 10px;
    color: ${(props) => (props.clicked ? "aliceblue" : secondaryThemeColor)};
  }
`;
