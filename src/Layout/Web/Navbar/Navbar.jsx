import React from "react";

import * as styled from "./NavbarStyles";
import UserDetails from "components/UserDetails/UserDetails";
import { useLocation, useNavigate } from "react-router-dom";
import { mainThemeColor, secondaryThemeColor } from "Css/Variables";

const Navbar = ({ showUserDetails }) => {
  const navigate = useNavigate();
  const location = useLocation()
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
    {
      name: "News",
      path: "/news/entertainment",
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
  return (
    <styled.Container
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
      {showUserDetails && (
        <div className="web-view-user-details">
          <UserDetails />
        </div>
      )}
    </styled.Container>
  );
};

export default Navbar;
