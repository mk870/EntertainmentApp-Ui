import React, { useEffect, useState } from "react";
import {
  Container,
  LogoContainer,
  MobileMenuWrapper,
  PageLink,
  PageLinks,
} from "./NavbarStyles";
import { FiMenu } from "react-icons/fi";
import { BsFillChatRightTextFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";
import { GoSignIn } from "react-icons/go";
import logo from "../../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import Drawer from "./Drawer/Drawer";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const iconSize = 22;
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 760) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
  }, [screenSize]);

  const pageLinks = [
    {
      page: "Home",
      path: "/",
      icon: <FaHome size={iconSize} color="black" />,
    },
    {
      page: "AboutUs",
      path: "/about-us",
      icon: <BsFillChatRightTextFill size={iconSize} color="black" />,
    },
    {
      page: "Login",
      path: "/login",
      icon: <RiLoginCircleFill size={iconSize} color="black" />,
    },
    {
      page: "Signup",
      path: "/signup",
      icon: <GoSignIn size={iconSize} color="black" />,
    },
  ];
  return (
    <Container>
      {mobileMenu && (
        <MobileMenuWrapper onClick={() => setOpenMobileMenu(!openMobileMenu)}>
          <FiMenu fontSize={29} />
        </MobileMenuWrapper>
      )}
      <LogoContainer mobileMenuStyle={mobileMenu === true ? "0" : "1"}>
        <img src={logo} alt="logo" className="navbar-logo" />
      </LogoContainer>
      {!mobileMenu && (
        <PageLinks>
          {pageLinks.map((link) => (
            <PageLink onClick={() => navigate(link.path)} key={link.page}>
              {link.page}
            </PageLink>
          ))}
        </PageLinks>
      )}
      {openMobileMenu && (
        <Drawer
          pageLinks={pageLinks}
          navigate={navigate}
          openMobileMenu={openMobileMenu}
          setOpenMobileMenu={setOpenMobileMenu}
        />
      )}
    </Container>
  );
};

export default Navbar;
