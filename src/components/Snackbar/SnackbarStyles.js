import styled, { keyframes, css } from "styled-components";
import { mainThemeColor, redColor } from "../../Css/Variables";
import { secondaryThemeColor } from "../../Css/Variables";

const slideIn = keyframes`
  0% { left:-100%;}
  100% { left:5%;}
`;

const slideOut = keyframes`
  0% { left:5%;}
  100% { left:-100%;}
`;
const slideInOutAnimation = css`
  animation: ${slideIn} 0.5s, ${slideOut} 0.5s 5.1s;
`;
const slideInAnimation = css`
  animation: ${slideIn} 0.5s;
`;
export const Container = styled.div`
  ${(props) =>
    props.type === "getSpotifyAccessToken"
      ? slideInAnimation
      : slideInOutAnimation};
  display: ${(props) => (props.show ? "flex" : "none")};
  z-index: 200;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  position: fixed;
  left: 5%;
  border-radius: 5px;
  top: 15%;
  padding: 7px;
  background: ${(props) =>
    props.type === "failed"
      ? redColor
      : props.type === "success"?
      "green"
      : secondaryThemeColor};
  .snackbar-icon {
    margin-left: 10px;
  }
  @media (max-width: 500px) {
    .snackbar-icon {
      margin-left: 5px;
    }
  }
  @media (max-width: 360px) {
    max-width: 250px;
  }
`;
export const messageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  .snackbar-icon {
    color: aliceblue;
  }
`;
export const text = styled.p`
  font-size: 13px;
  color: aliceblue;
  margin: 0 0 0 7px;
  @media (max-width: 500px) {
    font-size: 13px;
  }
`;
export const btnGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  margin-top: 5px;
`;
export const btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 13px;
  color: aliceblue;
  margin: 0 5px 0 0;
  width: 60px;
  height: 25px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.type === "close" ? redColor : mainThemeColor};
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 500px) {
    font-size: 12px;
    width: 120px;
    height: 30px;
  }
`;
