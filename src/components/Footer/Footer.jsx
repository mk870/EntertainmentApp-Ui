import React from "react";
import {
  FooterContainer,
  FooterLogoImage,
  FooterWrapper,
  FooterText,
  FooterStyledText,
} from "./FooterStyles";
import logo from "../../Assets/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLogoImage src={logo} alt="logo" />
        <FooterStyledText>Ensimini</FooterStyledText>
      </FooterWrapper>
      <FooterWrapper>
        <FooterText>ensiminigroup@gmail.com</FooterText>
        <FooterText>
          Copyright &copy;<span> {year}</span>
        </FooterText>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
