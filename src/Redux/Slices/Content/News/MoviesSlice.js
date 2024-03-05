import { createSlice } from "@reduxjs/toolkit";

export const moviesNewsSlice = createSlice({
  name: "moviesNews",
  initialState: {
    value: null,
  },
  reducers: {
    addMoviesNews: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addMoviesNews } = moviesNewsSlice.actions;
export default moviesNewsSlice.reducer;