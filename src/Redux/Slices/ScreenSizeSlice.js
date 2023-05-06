import { createSlice } from "@reduxjs/toolkit";

export const screenSizeSlice = createSlice({
  name: "screenSize",
  initialState: {
    value: null,
  },
  reducers: {
    setScreenSize: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setScreenSize } = screenSizeSlice.actions;
export default screenSizeSlice.reducer;