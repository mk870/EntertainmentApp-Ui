/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { RiSlideshow3Line } from "react-icons/ri";
import { HiOutlineMusicNote } from "react-icons/hi";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GiMusicalNotes } from "react-icons/gi";
import {
  MdAlbum,
  MdOutlineLocalMovies,
  MdOutlineRecentActors,
  MdOutlineSlideshow,
} from "react-icons/md";

import * as styled from "./MenuListStyles";
import logo from "Assets/logo.png";
import { AppContext } from "Context/AppContext";
import { mainThemeColor } from "Css/Variables";
import MenuGroupList from "./MenuGroupList/MenuGroupList";
import { FaRegNewspaper } from "react-icons/fa";

const MenuList = () => {
  const [clickedMenuListItem, setClickedMenuListItem] = useState("/");
  const [openMenuGroupList, setOpenMenuGroupList] = useState(null);
  const { accessToken, setAccessToken } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const moviesAndTVShowsMenuGroupName = "movies/shows";
  const musicMenuGroupName = "music";
  const newsMenuGroupName = "news";
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
  const musicLibraryList = [
    {
      name: "Artists",
      path: "/my-artists",
      icon: <IoPersonOutline />,
    },
    {
      name: "Songs",
      path: "/my-songs",
      icon: <GiMusicalNotes />,
    },
    {
      name: "Albums",
      path: "/my-albums",
      icon: <MdAlbum />,
    },
  ];
  const newsList = [
    {
      name: "Artists",
      path: "/news/music celebs",
      icon: <IoPersonOutline />,
    },
    {
      name: "Songs",
      path: "/news/new songs",
      icon: <GiMusicalNotes />,
    },
    {
      name: "Albums",
      path: "/news/new albums",
      icon: <MdAlbum />,
    },
    {
      name: "Movies",
      path: "/news/movies",
      icon: <MdOutlineLocalMovies />,
    },
    {
      name: "TvShows",
      path: "/news/tv-shows",
      icon: <MdOutlineSlideshow />,
    },
    {
      name: "Actors",
      path: "/news/actors",
      icon: <MdOutlineRecentActors />,
    },
  ];
  const moviesAndTvShowsLibraryList = [
    {
      name: "Movies",
      path: "/my-movies",
      icon: <MdOutlineLocalMovies />,
    },
    {
      name: "TvShows",
      path: "/my-tv-shows",
      icon: <MdOutlineSlideshow />,
    },
    {
      name: "Actors",
      path: "/my-actors",
      icon: <MdOutlineRecentActors />,
    },
  ];
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
    if (openMenuGroupList === menuGroupName) {
      setOpenMenuGroupList(null);
    } else setOpenMenuGroupList(menuGroupName);
  };
  useEffect(() => {
    setClickedMenuListItem(location.pathname);
  }, [location.pathname]);
  return (
    <styled.MenuContainer>
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
          <FaRegNewspaper size={22}/>
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
        />
      )}
      <styled.divider></styled.divider>
      <styled.header>My Library</styled.header>
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
        />
      )}
      <styled.divider></styled.divider>
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
