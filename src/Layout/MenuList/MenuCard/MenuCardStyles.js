import styled, { css, keyframes } from "styled-components";
import {
  mainThemeColor,
  transparentMainThemeColor,
  whiteColor,
} from "Css/Variables";

const flipRotation = keyframes`
 0% { transform: rotateY(0deg);}
 100% { transform: rotateY(90deg);}
`;
const flipAnimation = css`
  animation: ${flipRotation} 0.3s ease;
`;

export const Container = styled.div`
  ${({ flip }) => flip && flipAnimation}
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: start;
  box-sizing: border-box;
  width: 95%;
  height: 130px;
  padding: 10px;
  padding-bottom: 2px;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.15),
    rgba(255, 255, 255, 0.45),
    70%,
    rgba(255, 255, 255, 0.15)
  );
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px) saturate(100%);
  -webkit-backdrop-filter: blur(15px);
  @media (max-width: 980px) {
    width: 80%;
  }
`;
export const Header = styled.span`
  color: ${whiteColor};
  font-size: 14px;
  font-weight: bold;
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 5px;
  width: 100%;
`;
export const Text = styled.p`
  margin: 5px 0 0 0;
  color: ${whiteColor};
  font-size: 13px;
  width: 100%;
  text-align: center;
`;
export const LinkButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${mainThemeColor};
  border-radius: 20px;
  height: 30px;
  width: 100%;
  color: ${whiteColor};
  font-size: 13px;
  margin-top: 20px;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
    background-color: ${transparentMainThemeColor};
  }
`;
