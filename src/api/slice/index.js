import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRegisterMember } from "../types";

// interface UserInfoState {
//   token: string | null;
//   user: IRegisterMember | null;
// }

const initialState = {
  token: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo")).token
    : null,
  user: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo")).user
    : null,
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    // setToken(state, action: PayloadAction<string | null>) {
    setToken(state, action) {
      state.token = action.payload;
    },
    // setUser(state, action: PayloadAction<IRegisterMember | null>) {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setToken, setUser } = userInfoSlice.actions;
export default userInfoSlice.reducer;
