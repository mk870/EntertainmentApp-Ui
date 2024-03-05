import styled from "styled-components";
import { mainThemeColor } from "Css/Variables";

export const NavbarInputWrapper = styled.div`
  width:70%;
  @media (max-width: 470px) {
    width:60%;
  }
`;

export const NavbarDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  box-sizing: border-box;
  padding: 10px 10px 0px 10px;
  width:100%;
`;
export const NavbarUserDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 60px;
  margin-right:10px;
  @media (max-width: 400px) {
    margin-right:0px;
  }
`;
export const NavbarLogoWrapper = styled.div`
  width:40px;
`;
export const NavbarLogoName = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${mainThemeColor};
`;
