import { createSlice } from "@reduxjs/toolkit";

export const popularTvShowsSlice = createSlice({
  name: "popularTvShows",
  initialState: {
    value: null,
  },
  reducers: {
    addPopularTvShows: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addPopularTvShows } = popularTvShowsSlice.actions;
export default popularTvShowsSlice.reducer;