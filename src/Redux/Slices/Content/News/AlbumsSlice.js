import { createSlice } from "@reduxjs/toolkit";

export const albumsNewsSlice = createSlice({
  name: "albumsNews",
  initialState: {
    value: null,
  },
  reducers: {
    addAlbumsNews: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addAlbumsNews } = albumsNewsSlice.actions;
export default albumsNewsSlice.reducer;