import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
  name: "texts",
  initialState: () => (localStorage.getItem("texts") ? JSON.parse(localStorage.getItem("texts")) : []),
  reducers: {
    addText: (state, action) => {
      return [action.payload, ...state];
    },
  },
});

export const { addText } = textSlice.actions;
export default textSlice.reducer;
