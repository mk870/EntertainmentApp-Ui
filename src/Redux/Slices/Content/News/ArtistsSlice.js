import { createSlice } from "@reduxjs/toolkit";

export const artistsNewsSlice = createSlice({
  name: "artistsNews",
  initialState: {
    value: null,
  },
  reducers: {
    addArtistsNews: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addArtistsNews } = artistsNewsSlice.actions;
export default artistsNewsSlice.reducer;