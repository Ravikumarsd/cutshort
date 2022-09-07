import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  fullName: "",
  displayName: "",
  workspaceName: "",
  workspaceUrl: "",
  selectedPlan: "individual", //individual,team
};

const appSlice = createSlice({
  name: "onBoard",
  initialState: defaultState,
  reducers: {
    updateInputValues: (state, action) => ({ ...state, ...action.payload }),
  },
});

export const { updateInputValues } = appSlice.actions;
export default appSlice.reducer;
