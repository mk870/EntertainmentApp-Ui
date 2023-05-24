import { createSlice } from "@reduxjs/toolkit";

const generateRandomColor = () => {
  let maxVal = 0xffffff;
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
};

const user = {
  emailAddress: "",
  firstName: "",
  userTheme: generateRandomColor(),
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: user,
  },
  reducers: {
    addFirstName: (state, action) => {
      state.value = {
        ...state.value,
        firstName: action.payload,
      };
    },
    addEmailAddress: (state, action) => {
      state.value = {
        ...state.value,
        emailAddress: action.payload,
      };
    },
  },
});
export const { addFirstName, addEmailAddress } = userSlice.actions;
export default userSlice.reducer;
