import {
  backgroundColor,
  boxShadow,
  menuHoverColor,
  secondaryThemeColor,
  whiteColor,
} from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 80vh;
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex: 1;
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: start;
    gap: 10px;
    margin-bottom: 10px;
  }
`;
export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${secondaryThemeColor};
  @media (max-width: 500px) {
    font-size: 15px;
    }
`;
export const Links = styled.div`
  font-size: 14px;
  font-weight: normal;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  @media (max-width: 460px) {
    flex-wrap: wrap;
    justify-content: start;
    }
`;

export const Link = styled.div`
  color: ${({ isOpen }) => (isOpen ? whiteColor : secondaryThemeColor)};
  background-color: ${({ isOpen }) =>
    isOpen ? menuHoverColor : backgroundColor};
  box-sizing: border-box;
  padding: 5px;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
    box-shadow: ${boxShadow};
  }
    @media (max-width: 620px) {
      font-size: 13px;
    }
`;
