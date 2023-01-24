import React from "react";
import reactDom from "react-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

import {
  CloseDrawer,
  DrawerContainer,
  DrawerLink,
  DrawerLinks,
  DrawerMenuIcon,
  DrawerMenuList,
  DrawerOverlay,
} from "./DrawerStyles";
import logo from "../../../Assets/logo.png";

const Drawer = ({ pageLinks, navigate, openMobileMenu, setOpenMobileMenu }) => {
  return reactDom.createPortal(
    <>
      <DrawerOverlay onClick={() => setOpenMobileMenu(!openMobileMenu)} />
      <DrawerContainer>
        <CloseDrawer>
          <div
            className="close-drawer-icon"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          >
            <AiOutlineCloseCircle size={23} />
          </div>
          <img src={logo} alt="logo" className="drawer-image" />
        </CloseDrawer>
        <DrawerMenuList>
          {pageLinks.map((link) => (
            <DrawerLinks key={link.page} onClick={() => navigate(link.path)}>
              <DrawerMenuIcon>{link.icon}</DrawerMenuIcon>
              <DrawerLink>{link.page}</DrawerLink>
            </DrawerLinks>
          ))}
        </DrawerMenuList>
      </DrawerContainer>
    </>,
    document.getElementById("portal")
  );
};

export default Drawer;
