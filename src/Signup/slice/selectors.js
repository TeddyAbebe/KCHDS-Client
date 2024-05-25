import { RootState } from "../../../store/store";

// Selectors
// export const selectRegisterLoading = (state: RootState) => state.member.loading;
export const selectRegisterLoading = (state) => state.member.loading;


// export const selectRegisterError = (state: RootState) => state.member.error;
export const selectRegisterError = (state) => state.member.error;


// export const selectCreateNewMemberAccount = (state: RootState) =>
export const selectCreateNewMemberAccount = (state) =>

  state.member.newMember;
