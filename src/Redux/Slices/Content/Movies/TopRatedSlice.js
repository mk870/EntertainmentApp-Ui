import { createSlice } from "@reduxjs/toolkit";

export const topRatedMoviesSlice = createSlice({
  name: "topRatedMovies",
  initialState: {
    value: null,
  },
  reducers: {
    addTopRatedMovies: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addTopRatedMovies } = topRatedMoviesSlice.actions;
export default topRatedMoviesSlice.reducer;