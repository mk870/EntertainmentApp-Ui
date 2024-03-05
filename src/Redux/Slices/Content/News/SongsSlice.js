import { createSlice } from "@reduxjs/toolkit";

export const songsNewsSlice = createSlice({
  name: "songsNews",
  initialState: {
    value: null,
  },
  reducers: {
    addSongsNews: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addSongsNews } = songsNewsSlice.actions;
export default songsNewsSlice.reducer;
