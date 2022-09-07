import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  active: 1,
  steps: [1, 2, 3, 4],
};

const formStepperSlice = createSlice({
  name: "stepper",
  initialState: defaultState,
  reducers: {
    next: (state) => {
      if (state.active >= 4) {
        return;
      }
      state.active += 1;
    },
    jump: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { next, jump } = formStepperSlice.actions;
export default formStepperSlice.reducer;
