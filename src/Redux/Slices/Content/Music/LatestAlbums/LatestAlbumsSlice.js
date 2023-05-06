import { createSlice } from "@reduxjs/toolkit";

export const latestAlbumsSlice = createSlice({
  name: "latestAlbums",
  initialState: {
    value: null,
  },
  reducers: {
    addLatestAlbums: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addLatestAlbums } = latestAlbumsSlice.actions;
export default latestAlbumsSlice.reducer;