import { createSlice } from "@reduxjs/toolkit";

export const actorsNewsSlice = createSlice({
  name: "actorsNews",
  initialState: {
    value: null,
  },
  reducers: {
    addActorsNews: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addActorsNews } = actorsNewsSlice.actions;
export default actorsNewsSlice.reducer;
