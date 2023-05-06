/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import MobileView from "./Mobile/MobileView";
import WebView from "./Web/WebView";
import * as styled from "./LayoutStyles";
import { useDispatch, useSelector } from "react-redux";
import { setScreenSize } from "../../Redux/Slices/ScreenSizeSlice";

const Layout = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const dispatch = useDispatch()
  const screenSize = useSelector((state)=>state.screenSize.value)
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  useEffect(() => {
    const handleResize = () => dispatch(setScreenSize(window.innerWidth));
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize) {
      if (screenSize <= 980) {
        setMobileMenu(true);
      } else {
        setMobileMenu(false);
      }
    }
  }, [screenSize]);
  return (
    <styled.LayoutWrapper>
      {mobileMenu ? (
        <MobileView
          isMobileView={mobileMenu}
          openMobileMenu={openMobileMenu}
          setOpenMobileMenu={setOpenMobileMenu}
        >
          {children}
        </MobileView>
      ) : (
        <WebView>{children}</WebView>
      )}
    </styled.LayoutWrapper>
  );
};

export default Layout;
