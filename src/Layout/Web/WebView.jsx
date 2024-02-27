import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import SideBar from "./SideBar/SideBar";
import SideMenu from "./SideMenu/SideMenu";
import * as styled from "./WebViewStyles";
import Navbar from "./Navbar/Navbar";

const WebView = ({ children }) => {
  const [showUserDetails, setShowUserDetails] = useState(false);
  const location = useLocation();
  const marginRight = () => {
    if (
      location.pathname === "/" ||
      location.pathname === "/music" ||
      location.pathname === "/tv-shows"
    ) {
      return "250px";
    } else {
      return "0px";
    }
  };
  const renderSideBar = () => {
    if (
      location.pathname === "/" ||
      location.pathname === "/music" ||
      location.pathname === "/tv-shows"
    ) {
      return (
        <styled.WebViewSideBarContainer>
          <SideBar />
        </styled.WebViewSideBarContainer>
      );
    }
  };
  useEffect(() => {
    if (
      location.pathname === "/music" ||
      location.pathname === "/" ||
      location.pathname === "/tv-shows" ||
      location.pathname === "/login"
    ) {
      setShowUserDetails(false);
    } else {
      setShowUserDetails(true);
    }
  }, [location.pathname]);
  return (
    <styled.WebViewWrapper>
      <styled.WebViewMenuBarContainer>
        <SideMenu />
      </styled.WebViewMenuBarContainer>
      <styled.WebViewPagesContainer marginRight={marginRight}>
        <Navbar showUserDetails={showUserDetails}/>
        <styled.childrenContainer>{children}</styled.childrenContainer>
      </styled.WebViewPagesContainer>
      {renderSideBar()}
    </styled.WebViewWrapper>
  );
};

export default WebView;
