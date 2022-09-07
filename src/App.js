import "./App.css";
import FormStepper from "./features/FormStepper/FormStepper";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import WelcomeOnBoard from "./features/WelcomeOnBoard/WelcomeOnBoard";
import PlansOnBoard from "./features/PlansOnBoard/PlansOnBoard";
import { useDispatch, useSelector } from "react-redux";
import { next } from "./features/FormStepper/FormStepperSlice";
import SetupHomeOnBoard from "./features/SetupHomeOnBoard/SetupHomeOnBoard";
import CompleteOnBoard from "./features/CompleteOnBoard/CompleteOnBoard";

const TransformedBtn = styled(Button)(() => ({
  textTransform: "capitalize",
  width: "300px",
}));

const App = () => {
  const { active } = useSelector((state) => state.stepper);
  const dispatch = useDispatch();

  const renderOnboardContent = () => {
    switch (active) {
      case 1:
        return <WelcomeOnBoard />;
      case 2:
        return <SetupHomeOnBoard />;
      case 3:
        return <PlansOnBoard />;
      case 4:
        return <CompleteOnBoard />;
    }
  };

  const getButtonText = () => {
    switch (active) {
      case 1:
        return "Create Workspace";
      case 2:
        return "Create Workspace";
      case 3:
        return "Create Workspace";
      case 4:
        return "Launch Eden";
    }
  };

  return (
    <Box className="App">
      <Box m={2}>
        <img width="120px" src="./logo.png" alt="eden-logo" />
      </Box>
      <FormStepper />
      {renderOnboardContent()}
      <Box mt={1}>
        <TransformedBtn onClick={() => dispatch(next())} variant="contained">
          {getButtonText()}
        </TransformedBtn>
      </Box>
    </Box>
  );
};

export default App;
