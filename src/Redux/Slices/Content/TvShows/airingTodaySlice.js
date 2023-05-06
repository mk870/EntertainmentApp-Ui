import { createSlice } from "@reduxjs/toolkit";

export const tvShowsAiringTodaySlice = createSlice({
  name: "tvShowsAiringToday",
  initialState: {
    value: null,
  },
  reducers: {
    addTvShowsAiringToday: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addTvShowsAiringToday } = tvShowsAiringTodaySlice.actions;
export default tvShowsAiringTodaySlice.reducer;