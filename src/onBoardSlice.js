import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  fullName: "",
  displayName: "",
  workspaceName: "",
  workspaceUrl: "",
  selectedPlan: "", //individual,team
};

const appSlice = createSlice({
  name: "app",
  initialState: defaultState,
  reducers: {
    updateInputValues: (state, action) => ({ ...state, ...action.payload }),
  },
});

export const { updateInputValues } = appSlice.actions;
export default appSlice.reducer;
