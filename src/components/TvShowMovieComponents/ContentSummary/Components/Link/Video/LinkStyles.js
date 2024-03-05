import { mainThemeColor, menuHoverColor, secondaryThemeColor } from "Css/Variables";
import styled from "styled-components";

export const videoLinksContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  min-width: 100%;
  padding-top: 10px;
  gap: 15px;
`;

export const addLinkText = styled.p`
  font-size: 14px;
  color: aliceblue;
  @media (max-width: 410px) {
    font-size: 13px;
  }
`;

export const videoLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  background-color: ${secondaryThemeColor};
  min-width: 90px;
  height: 30px;
  border-radius: 5px;
  .video-icon {
    margin: 0 7px;
  }
  &:hover {
    cursor: pointer;
    color: ${mainThemeColor};
  }
`;
