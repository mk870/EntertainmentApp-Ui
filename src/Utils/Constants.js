import {
  MdAlbum,
  MdOutlineLocalMovies,
  MdOutlineRecentActors,
  MdOutlineSlideshow,
} from "react-icons/md";
import { GiMusicalNotes } from "react-icons/gi";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { RiSlideshow3Line } from "react-icons/ri";
import { HiOutlineMusicNote } from "react-icons/hi";

export const menuList = [
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
export const musicLibraryList = [
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
export const newsList = [
  {
    name: "Artists",
    path: "/news/musicians",
    icon: <IoPersonOutline />,
  },
  {
    name: "Songs",
    path: "/news/songs",
    icon: <GiMusicalNotes />,
  },
  {
    name: "Albums",
    path: "/news/albums",
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
export const moviesAndTvShowsLibraryList = [
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
