import { configureStore } from "@reduxjs/toolkit";

import { moviesPlayingNowSlice } from "./Slices/Content/Movies/NowPlayingSlice";
import { popularMoviesSlice } from "./Slices/Content/Movies/PopularSlice";
import { topRatedMoviesSlice } from "./Slices/Content/Movies/TopRatedSlice";
import { upComingMoviesSlice } from "./Slices/Content/Movies/UpComingSlice";
import { tvShowsAiringTodaySlice } from "./Slices/Content/TvShows/airingTodaySlice";
import { tvShowsOnAirSlice } from "./Slices/Content/TvShows/onAirSlice";
import { popularTvShowsSlice } from "./Slices/Content/TvShows/popularSlice";
import { topRatedTvShowsSlice } from "./Slices/Content/TvShows/topRatedSlice";
import { movieGenresSlice } from "./Slices/Genres/MovieGenresSlice";
import { tvShowGenresSlice } from "./Slices/Genres/TvShowGenresSlice";
import { screenSizeSlice } from "./Slices/ScreenSizeSlice";
import { userSlice } from "./Slices/UserSlice";
import { musicGenresSlice } from "./Slices/Genres/MusicGenres";
import { spotifyAccessTokenSlice } from "./Slices/Content/Music/Token/SpotifyAccessToken";
import { topArtistsSlice } from "./Slices/Content/Music/Artists/TopArtistsSlice";
import { popPlaylistsSlice } from "./Slices/Content/Music/Playlists/PopSlice";
import { hipHopPlaylistsSlice } from "./Slices/Content/Music/Playlists/HipHopSlice";
import { electroPlaylistsSlice } from "./Slices/Content/Music/Playlists/ElectroSlice";
import { rnbPlaylistsSlice } from "./Slices/Content/Music/Playlists/RNBSlice";
import { topListPlaylistsSlice } from "./Slices/Content/Music/Playlists/TopListSlice";
import { latestAlbumsSlice } from "./Slices/Content/Music/LatestAlbums/LatestAlbumsSlice";

export const reduxStore = configureStore({
  reducer: {
    user: userSlice.reducer,
    movieGenres: movieGenresSlice.reducer,
    tvShowGenres: tvShowGenresSlice.reducer,
    upComingMovies: upComingMoviesSlice.reducer,
    moviesPlayingNow: moviesPlayingNowSlice.reducer,
    tvShowsAiringToday: tvShowsAiringTodaySlice.reducer,
    tvShowsOnAir: tvShowsOnAirSlice.reducer,
    popularTvShows: popularTvShowsSlice.reducer,
    topRatedTvShows: topRatedTvShowsSlice.reducer,
    screenSize: screenSizeSlice.reducer,
    popularMovies: popularMoviesSlice.reducer,
    topRatedMovies: topRatedMoviesSlice.reducer,
    spotifyAccessToken: spotifyAccessTokenSlice.reducer,
    musicGenres: musicGenresSlice.reducer,
    topArtists: topArtistsSlice.reducer,
    popPlaylists: popPlaylistsSlice.reducer,
    hipHopPlaylists: hipHopPlaylistsSlice.reducer,
    electroPlaylists: electroPlaylistsSlice.reducer,
    rnbPlaylists: rnbPlaylistsSlice.reducer,
    topListPlaylists: topListPlaylistsSlice.reducer,
    latestAlbums: latestAlbumsSlice.reducer,
  },
});
