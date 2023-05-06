import { createSlice } from "@reduxjs/toolkit";

export const topRatedTvShowsSlice = createSlice({
  name: "topRatedTvShows",
  initialState: {
    value: null,
  },
  reducers: {
    addTopRatedTvShows: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addTopRatedTvShows } = topRatedTvShowsSlice.actions;
export default topRatedTvShowsSlice.reducer;