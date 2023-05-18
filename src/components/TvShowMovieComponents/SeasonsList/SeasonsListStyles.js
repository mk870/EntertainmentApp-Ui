import styled from "styled-components";
import { secondaryThemeColor } from "../../../Css/Variables";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;
export const headerText = styled.p`
  font-size: 18px;
  font-weight: 800;
  color: ${secondaryThemeColor};
  margin-left: 10px;
`;
export const HeaderText2 = styled.p`
  font-size: 13px;
  font-weight: 300;
  margin-right: 5px;
  color: ${secondaryThemeColor};
`;

export const toggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-right: 10px;
  color: ${secondaryThemeColor};
  &:hover {
    cursor: pointer;
    text-decoration:underline;
  }
`;
export const seasons = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 0 10px;
  gap: 10px;
  @media (max-width: 530px) {
    justify-content: center;
  }
`;
export const season = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${secondaryThemeColor};
  &:hover {
    cursor: pointer;
    text-decoration:underline;
  }
`;
export const poster = styled.img`
  width: 120px;
  height: 130px;
  border-radius: 5px;
  transition:0.2s ease-in-out all;
  &:hover{
    transform:scale(1.1);
  }
`;

export const seasonText = styled.p`
  font-size: 14px;
  margin: 5px 0 0 0;
  color: ${secondaryThemeColor};
`;
