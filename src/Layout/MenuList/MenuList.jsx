/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaRegNewspaper } from "react-icons/fa";

import * as styled from "./MenuListStyles";
import logo from "Assets/logo.png";
import { AppContext } from "Context/AppContext";
import { mainThemeColor } from "Css/Variables";
import MenuGroupList from "./MenuGroupList/MenuGroupList";
import {
  menuList,
  moviesAndTvShowsLibraryList,
  musicLibraryList,
  newsList,
} from "Utils/Constants";
import MenuCard from "./MenuCard/MenuCard";

const MenuList = () => {
  const [clickedMenuListItem, setClickedMenuListItem] = useState("/");
  const [openMenuGroupList, setOpenMenuGroupList] = useState(null);
  const [menuGroupToClose, setMenuGroupToClose] = useState(null);
  const { accessToken, setAccessToken } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const moviesAndTVShowsMenuGroupName = "movies/shows";
  const musicMenuGroupName = "music";
  const newsMenuGroupName = "news";
  const delayTime = 795;
  const logoutOrLogin = {
    name: accessToken ? "Logout" : "Login",
    icon: accessToken ? <BiLogOut /> : <BiLogIn />,
  };
  const handleLogOutOrLogin = () => {
    if (accessToken) {
      setAccessToken(null);
    }
    navigate("/login");
  };
  const toggleMenuGroup = (menuGroupName) => {
    if (openMenuGroupList === null) {
      setOpenMenuGroupList(menuGroupName);
    } else if (openMenuGroupList === menuGroupName) {
      setMenuGroupToClose(menuGroupName);
      setTimeout(() => {
        setOpenMenuGroupList(null);
        setMenuGroupToClose(null);
      }, delayTime);
    } else {
      setMenuGroupToClose(openMenuGroupList);
      setTimeout(() => {
        setOpenMenuGroupList(menuGroupName);
        setMenuGroupToClose(null);
      }, delayTime);
    }
  };
  useEffect(() => {
    setClickedMenuListItem(location.pathname);
  }, [location.pathname]);
  return (
    <styled.MenuContainer>
      <styled.InnerWrapper>
        <styled.MenuLogo>
          <img src={logo} alt="menu-logo" />
        </styled.MenuLogo>
        {menuList.map((item) => (
          <styled.menuItem key={item.name} onClick={() => navigate(item.path)}>
            <styled.menuItemText
              clicked={item.path === clickedMenuListItem ? true : false}
            >
              <div className="menu-icon">{item.icon}</div>
              <p>{item.name}</p>
            </styled.menuItemText>
          </styled.menuItem>
        ))}
        <styled.MenuGroup onClick={() => toggleMenuGroup(newsMenuGroupName)}>
          <styled.menuItemText>
            <div className="icon">
              <FaRegNewspaper size={22} />
            </div>
            <p>News</p>
          </styled.menuItemText>
          {openMenuGroupList === null ||
          openMenuGroupList === musicMenuGroupName ||
          openMenuGroupList === moviesAndTVShowsMenuGroupName ? (
            <IoIosArrowUp size={18} />
          ) : (
            <IoIosArrowDown size={18} color={mainThemeColor} />
          )}
        </styled.MenuGroup>
        {openMenuGroupList === newsMenuGroupName && (
          <MenuGroupList
            menuGroupList={newsList}
            clickedMenuListItem={clickedMenuListItem}
            isClosed={menuGroupToClose === newsMenuGroupName ? true : false}
          />
        )}
        <styled.header>My Library</styled.header>
        <styled.divider></styled.divider>
        <styled.MenuGroup
          onClick={() => toggleMenuGroup(moviesAndTVShowsMenuGroupName)}
        >
          <styled.menuItemText>Movies/Shows</styled.menuItemText>
          {openMenuGroupList === null ||
          openMenuGroupList === musicMenuGroupName ||
          openMenuGroupList === newsMenuGroupName ? (
            <IoIosArrowUp size={18} />
          ) : (
            <IoIosArrowDown size={18} color={mainThemeColor} />
          )}
        </styled.MenuGroup>
        {openMenuGroupList === moviesAndTVShowsMenuGroupName && (
          <MenuGroupList
            menuGroupList={moviesAndTvShowsLibraryList}
            clickedMenuListItem={clickedMenuListItem}
            isClosed={
              menuGroupToClose === moviesAndTVShowsMenuGroupName ? true : false
            }
          />
        )}
        <styled.MenuGroup onClick={() => toggleMenuGroup(musicMenuGroupName)}>
          <styled.menuItemText>Music</styled.menuItemText>
          {openMenuGroupList === null ||
          openMenuGroupList === moviesAndTVShowsMenuGroupName ||
          openMenuGroupList === newsMenuGroupName ? (
            <IoIosArrowUp size={18} />
          ) : (
            <IoIosArrowDown size={18} color={mainThemeColor} />
          )}
        </styled.MenuGroup>
        {openMenuGroupList === musicMenuGroupName && (
          <MenuGroupList
            menuGroupList={musicLibraryList}
            clickedMenuListItem={clickedMenuListItem}
            isClosed={menuGroupToClose === musicMenuGroupName ? true : false}
          />
        )}
      </styled.InnerWrapper>
      <MenuCard/>
      <styled.logoutWrapper onClick={handleLogOutOrLogin}>
        <styled.menuItemText
          clicked={"/login" === clickedMenuListItem ? true : false}
        >
          <div className="menu-icon">{logoutOrLogin.icon}</div>
          <p>{logoutOrLogin.name}</p>
        </styled.menuItemText>
      </styled.logoutWrapper>
    </styled.MenuContainer>
  );
};

export default MenuList;
