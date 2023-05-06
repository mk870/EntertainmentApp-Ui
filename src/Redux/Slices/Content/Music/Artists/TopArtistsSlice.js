import { createSlice } from "@reduxjs/toolkit";

export const topArtistsSlice = createSlice({
  name: "topArtists",
  initialState: {
    value: null,
  },
  reducers: {
    addTopArtists: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addTopArtists } = topArtistsSlice.actions;
export default topArtistsSlice.reducer;