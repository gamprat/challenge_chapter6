import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataUser: [],
};

const authMeSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setDataUser: (state, action) => {
      state.dataUser = action.payload;
    },
  },
});

export const { setSearchMovie } = authMeSlice.actions;

export default authMeSlice.reducer;
