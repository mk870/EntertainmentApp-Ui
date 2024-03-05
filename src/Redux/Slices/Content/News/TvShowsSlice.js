import { createSlice } from "@reduxjs/toolkit";

export const tvShowsNewsSlice = createSlice({
  name: "tvShowsNews",
  initialState: {
    value: null,
  },
  reducers: {
    addTvShowsNews: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addTvShowsNews } = tvShowsNewsSlice.actions;
export default tvShowsNewsSlice.reducer;