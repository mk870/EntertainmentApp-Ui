import { createSlice } from "@reduxjs/toolkit";

export const upComingMoviesSlice = createSlice({
  name: "upComingMovies",
  initialState: {
    value: null,
  },
  reducers: {
    addUpComingMovies: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addUpComingMovies } = upComingMoviesSlice.actions;
export default upComingMoviesSlice.reducer;
