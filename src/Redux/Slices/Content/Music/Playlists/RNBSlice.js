import { createSlice } from "@reduxjs/toolkit";

export const rnbPlaylistsSlice = createSlice({
  name: "rnbPlaylists",
  initialState: {
    value: null,
  },
  reducers: {
    addRnBPlaylists: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addRnBPlaylists } = rnbPlaylistsSlice.actions;
export default rnbPlaylistsSlice.reducer;