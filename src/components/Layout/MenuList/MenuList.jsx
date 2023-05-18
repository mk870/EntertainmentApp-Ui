/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { RiSlideshow3Line } from "react-icons/ri";
import { HiOutlineMusicNote } from "react-icons/hi";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { GiMusicalNotes } from "react-icons/gi";
import {
  MdAlbum,
  MdOutlineLocalMovies,
  MdOutlineRecentActors,
  MdOutlineSlideshow,
} from "react-icons/md";

import * as styled from "./MenuListStyles";
import logo from "../../../Assets/logo.png";
import { AppContext } from "../../../Context/AppContext";

const MenuList = () => {
  const [clickedMenuListItem, setClickedMenuListItem] = useState("/");
  const { accessToken, setAccessToken } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const menuList = [
    {
      name: "Home",
      path: "/",
      icon: <AiOutlineHome />,
    },
    {
      name: "TV Shows",
      path: "/tv-shows",
      icon: <RiSlideshow3Line />,
    },
    {
      name: "Music",
      path: "/music",
      icon: <HiOutlineMusicNote />,
    },
  ];
  const libraryList = [
    {
      name: "My Movies",
      path: "/my-movies",
      icon: <MdOutlineLocalMovies />,
    },
    {
      name: "My TvShows",
      path: "/my-tv-shows",
      icon: <MdOutlineSlideshow />,
    },
    {
      name: "My Actors",
      path: "/my-actors",
      icon: <MdOutlineRecentActors />,
    },
    {
      name: "My Artists",
      path: "/my-artists",
      icon: <IoPersonOutline />,
    },
    {
      name: "My Songs",
      path: "/my-songs",
      icon: <GiMusicalNotes />,
    },
    {
      name: "My Albums",
      path: "/my-albums",
      icon: <MdAlbum />,
    },
  ];
  const logoutOrLogin = {
    name: accessToken ? "Logout" : "Login",
    icon: accessToken ? (
      <BiLogOut />
    ) : (
      <BiLogIn />
    ),
  };
  const handleLogOutOrLogin = () => {
    if (accessToken) {
      setAccessToken(null);
    }
    navigate("/login");
  };
  useEffect(() => {
    setClickedMenuListItem(location.pathname);
  }, [location.pathname]);

  return (
    <styled.MenuContainer>
      <styled.MenuLogo>
        <img src={logo} alt="menu-logo" />
      </styled.MenuLogo>
      <styled.MenuHeader>Menu</styled.MenuHeader>
      {menuList.map((item) => (
        <styled.menuItem key={item.name} onClick={() => navigate(item.path)}>
          <styled.menuItemText
            clicked={item.path === clickedMenuListItem ? true : false}
          >
            <div className="menu-icon">{item.icon}</div>
            <p>{item.name}</p>
          </styled.menuItemText>
          <styled.menuItemHighlight
            clicked={item.path === clickedMenuListItem ? true : false}
          ></styled.menuItemHighlight>
        </styled.menuItem>
      ))}
      <styled.divider></styled.divider>
      <styled.MenuHeader>WatchLists</styled.MenuHeader>
      {libraryList.map((item) => (
        <styled.menuItem key={item.name} onClick={() => navigate(item.path)}>
          <styled.menuItemText
            clicked={item.path === clickedMenuListItem ? true : false}
          >
            <div className="menu-icon">{item.icon}</div>
            <p>{item.name}</p>
          </styled.menuItemText>
          <styled.menuItemHighlight
            clicked={item.path === clickedMenuListItem ? true : false}
          ></styled.menuItemHighlight>
        </styled.menuItem>
      ))}
      <styled.divider></styled.divider>
      <styled.logoutWrapper onClick={handleLogOutOrLogin}>
        <styled.menuItemText
          clicked={"/login" === clickedMenuListItem ? true : false}
        >
          <div className="menu-icon">{logoutOrLogin.icon}</div>
          <p>{logoutOrLogin.name}</p>
        </styled.menuItemText>
        <styled.menuItemHighlight
          clicked={"/login" === clickedMenuListItem ? true : false}
        ></styled.menuItemHighlight>
      </styled.logoutWrapper>
    </styled.MenuContainer>
  );
};

export default MenuList;
