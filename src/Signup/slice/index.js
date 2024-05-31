/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
// import { IMemberRegisterState, NewMember } from "./types";
import { registerNewMember } from "../../api";

const initialState = {
  newMember: {},
  loading: false,
  error: null,
};

// Thunk action creator for registering a new Member
export const registerMemberThunk = (memberData) => async (dispatch) => {
  try {
    const newMember = await registerNewMember(memberData);
    dispatch(registerNewMemberSuccess(newMember.member));

    return newMember;
    // } catch (error: any) {
  } catch (error) {
    dispatch(registerNewMemberFailure(error.response.data.message));
    throw error.response.data.message;
  }
};

const registerMember = createSlice({
  name: "registerMember",
  initialState,
  reducers: {
    registerNewMemberRequest(state) {
      state.loading = true;
      state.error = null;
    },
    registerNewMemberSuccess(state, action) {
      state.loading = false;
      state.newMember = action.payload;
      state.error = null;
    },
    registerNewMemberFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  registerNewMemberRequest,
  registerNewMemberSuccess,
  registerNewMemberFailure,
} = registerMember.actions;

export default registerMember.reducer;
