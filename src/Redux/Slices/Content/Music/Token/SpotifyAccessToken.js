import { createSlice } from "@reduxjs/toolkit";

export const spotifyAccessTokenSlice = createSlice({
  name: "spotifyAccessToken",
  initialState: {
    value: null,
  },
  reducers: {
    addSpotifyAccessToken: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addSpotifyAccessToken } = spotifyAccessTokenSlice.actions;
export default spotifyAccessTokenSlice.reducer;