import { mainThemeColor, menuHoverColor } from "Css/Variables";
import styled from "styled-components";

export const row = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 5px;
  margin: 10px 0;
`;
export const link = styled.a`
  text-decoration: none;
  color: aliceblue;
`;

export const AddLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  min-width: 90px;
  background-color: ${menuHoverColor};
  height: 30px;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 0px 5px;
  color: aliceblue;
  &:hover {
    cursor: pointer;
    color: ${mainThemeColor};
  }
`;
export const addLinkText = styled.span`
  font-size: 14px;
  margin-left: 3px;
  color: aliceblue;
  @media (max-width: 410px) {
    font-size: 13px;
  }
`;