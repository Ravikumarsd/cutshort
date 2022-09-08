import { Box } from "@mui/material";
import React from "react";
import "./FormStepper.css";
import { useDispatch, useSelector } from "react-redux";
import { jump } from "./FormStepperSlice";

export default function FormStepper() {
  const { steps, active, stepsCompleted } = useSelector(
    (state) => state.stepper
  );
  const dispatch = useDispatch();
  const getProgressFillWidth = () => {
    return `${
      (steps.findIndex((item) => item === active) / steps.length) * (100 + 20)
    }%`;
  };
  return (
    <Box className="container">
      <Box className="progress-container">
        <Box
          id="progress"
          className="progress"
          style={{ width: getProgressFillWidth() }}
        ></Box>
        {steps.map((step, i) => {
          const currentIndex = steps.findIndex((item) => item === active);
          const value = i + 1;
          return (
            <Box
              key={i}
              className={`${i <= currentIndex ? "active circle" : "circle"}`}
              onClick={() => {
                if (value <= stepsCompleted) {
                  dispatch(jump(value));
                }
              }}
            >
              {value}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
