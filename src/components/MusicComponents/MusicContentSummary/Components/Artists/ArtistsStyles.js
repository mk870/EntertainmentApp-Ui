import { mainThemeColor, menuHoverColor, secondaryThemeColor } from "Css/Variables";
import styled from "styled-components";

export const trackLinksContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 10px;
  gap: 10px;
`;

export const artistText = styled.p`
  font-size: 13px;
  font-weight: 200;
  color: aliceblue;
  margin: 0px 0px 0px 5px;
  @media (max-width: 800px) {
    font-size: 11px;
  }
`;
export const artistHeader = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: aliceblue;
  margin: 0px;
`;
export const artistContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-right: 10px;
  padding: 5px;
  border-radius: 3px;
  box-sizing: border-box;
  background-color: ${menuHoverColor};
  &:hover {
    cursor: pointer;
    border: none;
    color: ${mainThemeColor};
  }
`;

export const trackLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${secondaryThemeColor};
  width: 40px;
  height: 40px;
  border-radius: 100%;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    font-size: 16px;
  }
`;
