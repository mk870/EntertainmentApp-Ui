import { createSlice } from "@reduxjs/toolkit";

export const electroPlaylistsSlice = createSlice({
  name: "electroPlaylists",
  initialState: {
    value: null,
  },
  reducers: {
    addElectroPlaylists: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addElectroPlaylists } = electroPlaylistsSlice.actions;
export default electroPlaylistsSlice.reducer;