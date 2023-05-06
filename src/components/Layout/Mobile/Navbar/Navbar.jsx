import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

import { secondaryThemeColor } from "../../../../Css/Variables";
import InputField from "../../../InputField/InputField";
import UserDetails from "../../../UserDetails/UserDetails";
import Drawer from "../MenuDrawer/Drawer";
import * as styles from "./NavbarStyles";

const Navbar = ({ isMobileView, openMobileMenu, setOpenMobileMenu }) => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const tvShowGenres = useSelector((state) => state.tvShowGenres.value);
  const moviesGenres = useSelector((state) => state.movieGenres.value);
  const location = useLocation();
  const navigate = useNavigate();
  const onNavigate = () => {
    if (
      location.pathname.includes("/music") ||
      location.pathname === "/my-songs" ||
      location.pathname === "/my-artists"||
      location.pathname === "/my-albums"
    )
    navigate(`music/search/${searchInputValue}`);
    else if (
      location.pathname.includes("/tv-show") ||
      location.pathname === "/my-tv-shows"
    ) {
      const genreList = tvShowGenres.filter((genre) => genre.selected === true);
      navigate(`tv-shows/search`, {
        state: {
          queryString: searchInputValue,
          contentType: "tv-show",
          genreList,
        },
      });
    } else if (
      location.pathname.includes("/video")
    ) {
      navigate(`video/${searchInputValue}`, {
        state: {
          queryString: searchInputValue,
        },
      });
    }
    else {
      const genreList = moviesGenres.filter((genre) => genre.selected === true);
      navigate(`movies/search`, {
        state: {
          queryString: searchInputValue,
          contentType: "movie",
          genreList,
        },
      });
    }
    setSearchInputValue("");
  };
  const inputLabel = () => {
    if (
      location.pathname.includes("/music") ||
      location.pathname === "/my-songs" ||
      location.pathname === "/my-artists"||
      location.pathname === "/my-albums"
    )
      return "song title";
    else if (
      location.pathname.includes("/tv-show") ||
      location.pathname === "/my-tv-shows"
    )
    return "search tv shows";
    else if (
      location.pathname.includes("/video")
    ) 
      return "search any video";
    else return "search movies";
  };
  return (
    <styles.NavbarDetails>
      <styles.NavbarLogoWrapper>
        <FiMenu
          fontSize={29}
          color={secondaryThemeColor}
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        />
      </styles.NavbarLogoWrapper>
      <styles.NavbarInputWrapper>
        <InputField
          label={inputLabel()}
          inputValue={searchInputValue}
          isSearch={true}
          onChangeFunc={(value) => setSearchInputValue(value)}
          handleOnKeyEnter={onNavigate}
          backgroundColor="black"
          hasFloatingLabel={true}
        />
      </styles.NavbarInputWrapper>
      <styles.NavbarUserDetails>
        <UserDetails isMobileView={isMobileView} />
      </styles.NavbarUserDetails>
      {openMobileMenu && (
        <Drawer
          openMobileMenu={openMobileMenu}
          setOpenMobileMenu={setOpenMobileMenu}
        />
      )}
    </styles.NavbarDetails>
  );
};

export default Navbar;
