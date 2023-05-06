import { createSlice } from "@reduxjs/toolkit";

export const tvShowsOnAirSlice = createSlice({
  name: "tvShowsOnAir",
  initialState: {
    value: null,
  },
  reducers: {
    addTvShowsOnAir: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addTvShowsOnAir } = tvShowsOnAirSlice.actions;
export default tvShowsOnAirSlice.reducer;