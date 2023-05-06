import { createSlice } from "@reduxjs/toolkit";

export const moviesPlayingNowSlice = createSlice({
  name: "moviesPlayingNow",
  initialState: {
    value: null,
  },
  reducers: {
    addMoviesPlayingNow: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addMoviesPlayingNow } = moviesPlayingNowSlice.actions;
export default moviesPlayingNowSlice.reducer;
