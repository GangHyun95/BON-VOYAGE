import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    login: (state, action) => {
      state.miSeq = action.payload.miSeq;
      state.miEmail = action.payload.miEmail;
      state.miNickname = action.payload.miNickname;
      state.miPhone = action.payload.miPhone;
      state.miStatus = action.payload.miStatus;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice;
