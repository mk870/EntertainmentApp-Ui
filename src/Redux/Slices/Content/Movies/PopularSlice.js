import { createSlice } from "@reduxjs/toolkit";

export const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: {
    value: null,
  },
  reducers: {
    addPopularMovies: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addPopularMovies } = popularMoviesSlice.actions;
export default popularMoviesSlice.reducer;