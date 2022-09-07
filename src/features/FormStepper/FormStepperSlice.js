import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  active: 1,
  steps: [1, 2, 3, 4],
  stepsCompleted: 1,
};

const formStepperSlice = createSlice({
  name: "stepper",
  initialState: defaultState,
  reducers: {
    next: (state) => {
      if (state.active >= state.steps.length) {
        return;
      }
      const incrementByOne = 1;
      state.active += incrementByOne;
      state.stepsCompleted += incrementByOne;
    },
    jump: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { next, jump } = formStepperSlice.actions;
export default formStepperSlice.reducer;
