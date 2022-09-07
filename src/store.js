import { configureStore } from "@reduxjs/toolkit";
import formStepperReducer from "./features/FormStepper/FormStepperSlice";
import onBoardReducer from "./onBoardSlice";
const store = configureStore({
  reducer: { stepper: formStepperReducer, onBoard: onBoardReducer },
});

export default store;
