import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataUser: [],
};

const authMeSlice = createSlice({
  name: "dataUser",
  initialState,
  reducers: {
    setDataUser: (state, action) => {
      state.dataUser = action.payload;
    },
  },
});

export const { setDataUser } = authMeSlice.actions;

export default authMeSlice.reducer;
