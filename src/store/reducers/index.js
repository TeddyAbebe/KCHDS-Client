import { combineReducers } from "@reduxjs/toolkit";
import members from "../../Signup/slice";
// import user from "../../Page/Login/slice";
import userInfoReducer from "../../api/slice";
// import Groups from "../../app/pages/Admin/Groups/slice";

const rootReducer = combineReducers({
  // Add Reducers here
  // user: user,
  userInfo: userInfoReducer,
  member: members,
  // groups: Groups,
});

export default rootReducer;
