import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AppContext } from "../Context/AppContext";
import Login from "../Pages/Login/Login";
import MovieType from "../Pages/Movies/ContentType/MovieType";
import Movie from "../Pages/Movies/Movie/Movie";
import Movies from "../Pages/Movies/Movies";
import Music from "../Pages/Music/Music";
import MyActors from "../Pages/MyActors/MyActors";
import MyArtists from "../Pages/MyArtists/MyArtists";
import MyMovies from "../Pages/MyMovies/MyMovies";
import MySongs from "../Pages/MySongs/MySongs";
import MyTvShows from "../Pages/MyTvShows/MyTvShows";
import SignUp from "../Pages/Signup/SignUp";
import TvShowType from "../Pages/TvShows/ContentType/TvShowType";
import TvShow from "../Pages/TvShows/TvShow/TvShow";
import TvShows from "../Pages/TvShows/TvShows";
import Season from "../Pages/TvShows/TvShow/Season/Season";
import Episode from "../Pages/TvShows/TvShow/Season/Episode/Episode";
import Actors from "../Pages/Actors/Actors";
import Actor from "../Pages/Actor/Actor";
import Video from "../Pages/Videos/Video";
import Playlists from "../Pages/Music/Playlists/Playlists";
import Artist from "../Pages/Music/Artist/Artist";
import Artists from "../Pages/Music/Artists/Artists";
import MyAlbums from "../Pages/MyAlbums/MyAlbums";
import Playlist from "../Pages/Music/Playlists/Playlist/Playlist";
import Track from "../Pages/Music/Track/Track";
import Album from "../Pages/Music/Album/Album";
import NewAlbums from "../Pages/Music/Albums/NewAlbums";
import SearchResults from "../Pages/Music/Search/SearchResults";
import Verification from "../Pages/Verification/Verification";

const RoutesList = () => {
  const { accessToken } = useContext(AppContext);
  const routes = [
    {
      path: "/",
      element: <Movies />,
    },
    {
      path: "/movie/:id",
      element: <Movie />,
    },
    {
      path: "/movies/:type",
      element: <MovieType />,
    },
    {
      path: "/tv-shows",
      element: <TvShows />,
    },
    {
      path: "/tv-shows/:type",
      element: <TvShowType />,
    },
    {
      path: "/tv-show/:id",
      element: <TvShow/>,
    },
    {
      path: "/tv-show/season/:seasonNumber",
      element: <Season/>,
    },
    {
      path: "/tv-show/season/episode/:episodeNumber",
      element: <Episode/>,
    },
    {
      path: "/music",
      element: <Music />,
    },
    {
      path: "/music/playlists/:genreId",
      element: <Playlists />,
    },
    {
      path: "/music/playlist/:playlistId",
      element: <Playlist />,
    },
    {
      path: "/music/track/:trackId",
      element: <Track />,
    },
    {
      path: "/music/album/:albumId",
      element: <Album />,
    },
    {
      path: "/music/albums/new-releases",
      element: <NewAlbums />,
    },
    {
      path: "/music/artist/:artistId",
      element: <Artist />,
    },
    {
      path: "/music/artists",
      element: <Artists />,
    },
    {
      path: "/music/search/:queryString",
      element: <SearchResults />,
    },
    {
      path: "/my-albums",
      element: accessToken !== null ? <MyAlbums /> : <Navigate to={"/login"} />,
    },
    {
      path: "/my-movies",
      element: accessToken !== null ? <MyMovies /> : <Navigate to={"/login"} />,
    },
    {
      path: "/my-tv-shows",
      element: accessToken !== null ? <MyTvShows /> : <Navigate to={"/login"} />,
    },
    {
      path: "/my-actors",
      element: accessToken !== null ? <MyActors /> : <Navigate to={"/login"} />,
    },
    {
      path: "/my-artists",
      element:
        accessToken !== null ? <MyArtists /> : <Navigate to={"/login"} />,
    },
    {
      path: "/my-songs",
      element: accessToken !== null ? <MySongs /> : <Navigate to={"/login"} />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/actors",
      element: <Actors />,
    },
    {
      path: "/actor/:id",
      element: <Actor />,
    },
    {
      path: "/video/:type",
      element: <Video />,
    },
    {
      path: "/verification/:token",
      element: <Verification />,
    },
  ];
  return { routes };
};

export default RoutesList;
