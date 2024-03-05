import { mainThemeColor, whiteColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
  gap: 10px;
  @media (max-width: 980px) {
    align-items: center;
  }
`;

export const grid = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
  @media (max-width: 1980px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1500px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1360px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 980px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 890px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 660px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

export const paginationLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 10px 0;
  gap: 7px;
`;

export const nextPrevLink = styled.p`
  margin: 0;
  font-size: 14px;
  border: 1px solid ${mainThemeColor};
  padding: 7px 9px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  background-color: ${mainThemeColor};
  color: ${whiteColor};
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;
export const incrementDecrementLink = styled.p`
  margin: 0;
  font-size: 14px;
  border: 1px solid ${mainThemeColor};
  padding: 7px 10px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  color: ${mainThemeColor};
  @media (max-width: 500px) {
    font-size: 12px;
    padding: 7px 8px;
  }
`;
export const pageLink = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ isActive }) => (isActive ? whiteColor : mainThemeColor)};
  background-color: ${({ isActive }) =>
    isActive ? mainThemeColor : "transparent"};
  border: 1px solid ${mainThemeColor};
  width: 30px;
  padding: 7px 0;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
`;
