import { tmdbKey } from "../../../../../Utils/utils";

export const tvShowsAiringTodayURL = `https://api.themoviedb.org/3/tv/airing_today?api_key=${tmdbKey}&language=en-US`;
export const tvShowsOnAirURL = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${tmdbKey}&language=en-US`;
export const moviesPlayingNowURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${tmdbKey}&language=en-US`;
export const upComingMoviesURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${tmdbKey}&language=en-US`;
