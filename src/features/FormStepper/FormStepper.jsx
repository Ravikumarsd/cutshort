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
  const getWidth = () => {
    return `${
      (steps.findIndex((item) => item === active) / steps.length) * (100 + 20)
    }%`;
  };
  return (
    <Box className="container">
      <Box className="progress-container">
        <Box
          className="progress"
          style={{ width: getWidth() }}
          id="progress"
        ></Box>
        {steps.map((step, i) => {
          const currentIndex = steps.findIndex((item) => item === active);
          const value = i + 1;
          return (
            <Box
              onClick={() => {
                if (value <= stepsCompleted) {
                  dispatch(jump(value));
                } else {
                  return;
                }
              }}
              key={i}
              className={`${i <= currentIndex ? "active circle" : "circle"}`}
            >
              {value}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
