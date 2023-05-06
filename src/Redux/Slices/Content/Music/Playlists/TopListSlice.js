import { createSlice } from "@reduxjs/toolkit";

export const topListPlaylistsSlice = createSlice({
  name: "topListPlaylists",
  initialState: {
    value: null,
  },
  reducers: {
    addTopListPlaylists: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addTopListPlaylists } = topListPlaylistsSlice.actions;
export default topListPlaylistsSlice.reducer;