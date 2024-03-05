import { boxShadow, menuHoverColor, secondaryThemeColor, whiteColor } from "Css/Variables";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  position: relative;
  width: 280px;
  min-height: 200px;
  border-radius: 10px;
  box-sizing: border-box;
  padding-bottom:15px;
  @media (max-width: 1060px) {
    width: 200px;
    min-height: 100px;
  }
  @media (max-width: 660px) {
    width: 280px;
    min-height: 200px;
  }
  @media (max-width: 620px) {
    width: 200px;
    min-height: 100px;
  }
  @media (max-width: 450px) {
    width: 90%;
    min-height: 230px;
  }
  &:hover {
    cursor: pointer;
    box-shadow: ${boxShadow};
  }
`;
export const LinkUrl = styled.a`
  text-decoration: none;
  gap: 5px;
  color: ${secondaryThemeColor};
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  margin-left: 5px;
`;
export const TitleText = styled.span`
  font-size: 14px;
  color: ${whiteColor};
  font-weight: bold;
`;
export const Image = styled.img`
  width: 100%;
  height: 160px;
  border-radius: 7px;
  margin-bottom: 5px;
  @media (max-width: 1060px) {
    height: 120px;
  }
  @media (max-width: 660px) {
    height: 160px;
  }
  @media (max-width: 620px) {
    height: 120px;
  }
  @media (max-width: 450px) {
    height: 220px;
  }
  @media (max-width: 350px) {
    height: 200px;
  }
`;

export const DescriptionText = styled.p`
  font-size: 14px;
  color: ${secondaryThemeColor};
`;
export const SourceWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  margin-top: 5px;
  margin-left: 5px;
`;
export const Text = styled.span`
  font-size: 14px;
  color: ${secondaryThemeColor};
`;
export const PublishmentTime = styled.span`
  font-size: 14px;
  color: ${secondaryThemeColor};
  font-style: italic;
`;
