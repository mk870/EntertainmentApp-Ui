import React, { useState } from "react";
import reactDom from "react-dom";

import MenuList from "../../MenuList/MenuList";
import { DrawerContainer, DrawerOverlay } from "./DrawerStyles";

const Drawer = ({ setOpenMobileMenu }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const toggleDrawer = () => {
    setIsDrawerOpen(false);
    setTimeout(() => {
      setOpenMobileMenu((value) => !value);
    }, 500);
  };
  return reactDom.createPortal(
    <>
      <DrawerOverlay onClick={toggleDrawer} />
      <DrawerContainer isOpen={isDrawerOpen}>
        <MenuList />
      </DrawerContainer>
    </>,
    document.getElementById("drawer")
  );
};

export default Drawer;
