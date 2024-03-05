import { mainThemeColor, secondaryThemeColor } from "Css/Variables";
import styled from "styled-components";

export const AddLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  min-width: 30px;
  background-color: ${secondaryThemeColor};
  height: 30px;
  border-radius: 5px;
  padding: 0 5px;
  &:hover {
    cursor: pointer;
    color: ${mainThemeColor};
  }
  @media (max-width: 920px) {
    min-width: 125px;
  }
`;
export const addLinkText = styled.p`
  font-size: 14px;
  color: aliceblue;
  @media (max-width: 410px) {
    font-size: 13px;
  }
`;

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
export const subHeaderText = styled.p`
  font-size: 14px;
  font-weight: 200;
  color: aliceblue;
  margin: 0px 0px 0px 5px;
`;
export const subContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-right: 10px;
`;
