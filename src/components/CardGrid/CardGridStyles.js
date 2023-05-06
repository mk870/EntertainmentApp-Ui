import styled from "styled-components";
import { secondaryThemeColor } from "../../Css/Variables";

export const CardGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 10px;
`;

export const Grid = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: row;
  flex-wrap:wrap;
  gap: 5px;
`;
export const HeaderText = styled.p`
  font-size: 18px;
  color: ${secondaryThemeColor};
  font-weight: 700;
  margin-left: 5px;
  margin-top: 0;
  @media (max-width: 500px) {
    font-size: 15px;
    font-weight: auto;
  }
`;
export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 4px;
  @media (max-width: 980px) {
    align-items: center;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height:100%;
  padding:20px;
`;
export const Text = styled.p`
  font-size: 18px;
  font-weight:600;
  color: ${secondaryThemeColor};
  text-align:center;
`;
