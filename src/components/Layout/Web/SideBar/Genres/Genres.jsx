import React from "react";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { toggleMovieGenre } from "../../../../../Redux/Slices/Genres/MovieGenresSlice";
import { toggleTvShowGenre } from "../../../../../Redux/Slices/Genres/TvShowGenresSlice";
import * as styled from "./GenresStyles";
import { toggleMusicGenres } from "../../../../../Redux/Slices/Genres/MusicGenres";

const Genres = ({ showMoreGenres, setShowMoreGenres }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const movieGenres = useSelector((state) => state.movieGenres.value);
  const tvShowGenres = useSelector((state) => state.tvShowGenres.value);
  const musicGenres = useSelector((state) => state.musicGenres.value);
  const iconSize = 15;
  const handleSelectGenre = (genre, path) => {
    if (path === "/") {
      dispatch(toggleMovieGenre(genre.id));
    } else if (path === "/tv-shows") {
      dispatch(toggleTvShowGenre(genre.id));
    }else if (path === "/music") {
      dispatch(toggleMusicGenres(genre.id));
      navigate(`/music/playlists/${genre.id}`)
    }
  };
  const toggleShowMoreGenres = () => {
    setShowMoreGenres((value) => !value);
  };
  const genresShown = () => {
    if (pathname === "/") {
      if (showMoreGenres) return movieGenres;
      else return movieGenres.slice(0, 2);
    } else if (pathname === "/tv-shows") {
      if (showMoreGenres) return tvShowGenres;
      else return tvShowGenres.slice(0, 2);
    }else if (pathname === "/music") {
      if (showMoreGenres) return musicGenres;
      else return musicGenres.slice(0, 2);
    }
  };
  return (
    <styled.GenresWrapper>
      <styled.Header>
        <styled.HeaderText>Genres</styled.HeaderText>
        <styled.toggleContainer>
          <styled.HeaderText2 onClick={toggleShowMoreGenres}>
            {showMoreGenres ? "show less" : "show more"}
          </styled.HeaderText2>
          {showMoreGenres ? (
            <IoIosArrowUp size={iconSize} onClick={toggleShowMoreGenres}/>
          ) : (
            <IoIosArrowDown size={iconSize} onClick={toggleShowMoreGenres}/>
          )}
        </styled.toggleContainer>
      </styled.Header>
      {pathname === "/" && (
        <styled.Grid showMore={showMoreGenres}>
          {genresShown().map((genre) => (
            <styled.Genre
              showMore={showMoreGenres}
              key={genre.id}
              isGenreSelected={genre.selected}
              onClick={() => handleSelectGenre(genre, pathname)}
            >
              <styled.GenreText>{genre.name}</styled.GenreText>
              {genre.selected ? (
                <AiOutlineCheck size={iconSize} />
              ) : (
                <AiOutlinePlus size={iconSize} />
              )}
            </styled.Genre>
          ))}
        </styled.Grid>
      )}
      {pathname === "/tv-shows" && (
        <styled.Grid showMore={showMoreGenres}>
          {genresShown().map((genre) => (
            <styled.Genre
              showMore={showMoreGenres}
              key={genre.id}
              isGenreSelected={genre.selected}
              onClick={() => handleSelectGenre(genre, pathname)}
            >
              <styled.GenreText>{genre.name}</styled.GenreText>
              {genre.selected ? (
                <AiOutlineCheck size={iconSize} />
              ) : (
                <AiOutlinePlus size={iconSize} />
              )}
            </styled.Genre>
          ))}
        </styled.Grid>
      )}
      {pathname === "/music" && (
        <styled.Grid showMore={showMoreGenres}>
          {genresShown().map((genre) => (
            <styled.Genre
              showMore={showMoreGenres}
              key={genre.id}
              onClick={() => handleSelectGenre(genre, pathname)}
            >
              <styled.GenreText>{genre.name}</styled.GenreText>
            </styled.Genre>
          ))}
        </styled.Grid>
      )}
    </styled.GenresWrapper>
  );
};

export default Genres;
