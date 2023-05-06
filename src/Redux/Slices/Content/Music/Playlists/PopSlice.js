import { createSlice } from "@reduxjs/toolkit";

export const popPlaylistsSlice = createSlice({
  name: "popPlaylists",
  initialState: {
    value: null,
  },
  reducers: {
    addPopPlaylists: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addPopPlaylists } = popPlaylistsSlice.actions;
export default popPlaylistsSlice.reducer;