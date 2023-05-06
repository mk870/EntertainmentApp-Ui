import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import InputField from "../../../../InputField/InputField";
import * as styled from "./SearchBarStyles";
import { useSelector } from "react-redux";

const SearchBar = () => {
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
          contentType: "search",
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
  const onChangeFunc = (value) => setSearchInputValue(value);
  return (
    <styled.SearchBarWrapper>
      <InputField
        label={inputLabel()}
        inputValue={searchInputValue}
        onChangeFunc={(value) => onChangeFunc(value)}
        isSearch={true}
        handleOnKeyEnter={onNavigate}
        backgroundColor={"black"}
        hasFloatingLabel={false}
      />
    </styled.SearchBarWrapper>
  );
};

export default SearchBar;
