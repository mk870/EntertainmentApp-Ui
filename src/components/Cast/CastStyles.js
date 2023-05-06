import styled from "styled-components";
import { mainThemeColor, secondaryThemeColor } from "../../Css/Variables";

export const CastWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width:100%;
  margin-bottom:5px;
`;

export const castGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin-left: 5px;
  margin-bottom:15px;
  @media(max-width:500px){
    justify-content: center;
    margin-left: 0px;
  }
`;

export const header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const headerText = styled.p`
  font-size: 18px;
  font-weight: 800;
  color: ${secondaryThemeColor};
  margin: 0 0 0 10px;
`;
export const linkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${mainThemeColor};
  margin-right: 5px;
  &:hover {
    cursor: pointer;
    text-decoration:underline;
  }
`;
export const linkText = styled.p`
  font-size: 13px;
  font-weight: 300;
  margin-right: 5px;
`;
