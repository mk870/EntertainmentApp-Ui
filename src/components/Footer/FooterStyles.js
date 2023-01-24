import styled from "styled-components";
import { mainColor } from "../CssVariables/Index";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background-color: ${mainColor};
  padding: 10px;
`;
export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0px 60px 0px 60px;
  @media (max-width: 600px) {
    margin: 0px 10px 0px 10px;
  }
`;
export const FooterLogoImage = styled.img`
  height: 60px;
  width: 70px;
  border-radius: 10px;
  margin-bottom: 4px;
  @media (max-width: 430px) {
    height: 60px;
    width: 70px;
  }
`;
export const FooterText = styled.p`
  color: white;
  font-weight: bold;
  font-size: 14px;
  @media (max-width: 700px) {
    font-size: 14px;
  }
  @media (max-width: 430px) {
    font-size: 13px;
  }
`;
export const FooterStyledText = styled.p`
  color: white;
  font-weight: bold;
  font-size: 16px;
  font-family: "Quicksand", sans-serif;
  letter-spacing: 2px;
  @media (max-width: 700px) {
    font-size: 16px;
  }
  @media (max-width: 430px) {
    font-size: 16px;
  }
`;

export const FooterSocials = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 30px;
  place-items: center;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
export const FooterSocial = styled.div``;
