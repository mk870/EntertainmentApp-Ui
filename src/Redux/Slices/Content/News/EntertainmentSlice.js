import { createSlice } from "@reduxjs/toolkit";

export const entertainmentSlice = createSlice({
  name: "entertainmentNews",
  initialState: {
    value: null,
  },
  reducers: {
    addEntertainmentNews: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addEntertainmentNews } = entertainmentSlice.actions;
export default entertainmentSlice.reducer;