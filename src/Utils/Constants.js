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
import { FaRegNewspaper } from "react-icons/fa";

export const artistsNewsCategory = "musicians";
export const moviesNewsCategory = "movies";
export const tvShowsNewsCategory = "tv shows";
export const albumsNewsCategory = "albums";
export const songsNewsCategory = "songs";
export const actorsNewsCategory = "hollywood actors";
export const entertainmentNewsCategory = "entertainment";

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
const size = 25;
export const menuCardRoutelist = [
  {
    name: "Movies",
    path: "/",
    icon: <MdOutlineLocalMovies color="black" size={size} />,
    text:"Enjoy all kinds of movies",
    btnText:"go to movies"
  },
  {
    name: "TvShows",
    path: "/tv-shows",
    icon: <RiSlideshow3Line color="black" size={size} />,
    text:"Watch all kinds of tv-shows",
    btnText:"go to tv shows"
  },
  {
    name: "Music",
    path: "/music",
    icon: <HiOutlineMusicNote color="black" size={size} />,
    text:"Listen to all types of music",
    btnText:"listen to music"
  },
  {
    name: "News",
    path: "/news/entertainment",
    icon: <FaRegNewspaper color="black" size={size} />,
    text:"Get all the latest news bulletins",
    btnText:"visit the news room"
  },
];
