import React from "react";

import * as styled from "./MobileViewStyles";
import Navbar from "./Navbar/Navbar";

const MobileView = ({
  children,
  isMobileView,
  openMobileMenu,
  setOpenMobileMenu
}) => {
  return (
    <styled.MobileViewWrapper>
      <Navbar 
        isMobileView={isMobileView} 
        openMobileMenu={openMobileMenu}
        setOpenMobileMenu={setOpenMobileMenu}
      />
      <styled.MobileViewPagesWrapper>{children}</styled.MobileViewPagesWrapper>
    </styled.MobileViewWrapper>
  );
};

export default MobileView;
