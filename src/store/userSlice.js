import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    login: (state, action) => {
      state.miSeq = action.payload.miSeq;
      state.miEmail = action.payload.miEmail;
      state.miName = action.payload.miName;
      state.miNickname = action.payload.miNickname;
      state.miPhone = action.payload.miPhone;
      state.miStatus = action.payload.miStatus;
    },
    logout: (state, action) => {
      state.miSeq = "";
      state.miEmail = "";
      state.miName = "";
      state.miNickname = "";
      state.miPhone = "";
      state.miStatus = "";
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice;
