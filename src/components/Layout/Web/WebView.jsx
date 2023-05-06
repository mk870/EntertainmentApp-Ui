import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { mainThemeColor, secondaryThemeColor } from "../../../Css/Variables";
import UserDetails from "../../UserDetails/UserDetails";
import SideBar from "./SideBar/SideBar";
import SideMenu from "./SideMenu/SideMenu";
import * as styled from "./WebViewStyles";

const WebView = ({ children }) => {
  const [showUserDetails, setShowUserDetails] = useState(false);
  const navigate = useNavigate();
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
  const pageLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "TV Shows",
      path: "/tv-shows",
    },
    {
      name: "Music",
      path: "/music",
    },
  ];
  const pageLinkStyles = (path) => {
    if (location.pathname === path) {
      return {
        color: "aliceblue",
        borderBottom: mainThemeColor,
      };
    } else {
      return {
        color: secondaryThemeColor,
        borderBottom: "transparent",
      };
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
        <styled.pagesContainerNavbar
          justifyContent={showUserDetails ? "space-between" : "start"}
        >
          <styled.pageLinks>
            {pageLinks.map((link) => (
              <styled.pageLink
                key={link.name}
                onClick={() => navigate(link.path)}
                styles={pageLinkStyles(link.path)}
              >
                {link.name}
              </styled.pageLink>
            ))}
          </styled.pageLinks>
          {showUserDetails && <div className="web-view-user-details"><UserDetails /></div>}
        </styled.pagesContainerNavbar>
        <styled.childrenContainer>{children}</styled.childrenContainer>
      </styled.WebViewPagesContainer>
      {renderSideBar()}
    </styled.WebViewWrapper>
  );
};

export default WebView;
