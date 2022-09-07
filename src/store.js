import { configureStore } from "@reduxjs/toolkit";
import formStepperReducer from "./features/FormStepper/FormStepperSlice";
import appReducer from "./AppSlice";
const store = configureStore({
  reducer: { stepper: formStepperReducer, app: appReducer },
});

export default store;
