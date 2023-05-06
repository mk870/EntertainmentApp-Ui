import { createSlice } from "@reduxjs/toolkit";

export const hipHopPlaylistsSlice = createSlice({
  name: "hipHopPlaylists",
  initialState: {
    value: null,
  },
  reducers: {
    addHipHopPlaylists: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addHipHopPlaylists } = hipHopPlaylistsSlice.actions;
export default hipHopPlaylistsSlice.reducer;