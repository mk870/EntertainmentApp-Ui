import styled from "styled-components";
import { mainThemeColor, secondaryThemeColor } from "../../Css/Variables";

export const container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
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
  font-weight: bolder;
  color: ${secondaryThemeColor};
  margin: 0 0 0 10px;
  @media(max-width:500px){
    font-size:16px;
  }
`;

export const linkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${mainThemeColor};
  margin-right: 1%;
  &:hover {
    cursor: pointer;
    text-decoration:underline;
  }
  @media (max-width: 500px) {
    margin-right: 2.5%;
  }
  @media (max-width: 410px) {
    margin-right: 5%;
  }
`;
export const linkText = styled.p`
  font-size: 13px;
  font-weight: 300;
  margin-right: 5px;
`;