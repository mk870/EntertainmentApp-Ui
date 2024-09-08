/* eslint-disable react-hooks/exhaustive-deps */
import React, { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import MobileView from "./Mobile/MobileView";
import WebView from "./Web/WebView";
import * as styled from "./LayoutStyles";
import { setScreenSize } from "Redux/Slices/ScreenSizeSlice";

const Layout = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const dispatch = useDispatch()
  const screenSize = useSelector((state)=>state.screenSize.value)
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  useLayoutEffect(() => {
    const handleResize = () => dispatch(setScreenSize(window.innerWidth));
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
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
