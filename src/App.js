import "./App.css";
import FormStepper from "./features/FormStepper/FormStepper";
import { Box } from "@mui/material";
import React from "react";
import WelcomeOnBoard from "./features/WelcomeOnBoard/WelcomeOnBoard";
import PlansOnBoard from "./features/PlansOnBoard/PlansOnBoard";
import { useSelector } from "react-redux";
import SetupHomeOnBoard from "./features/SetupHomeOnBoard/SetupHomeOnBoard";
import CompleteOnBoard from "./features/CompleteOnBoard/CompleteOnBoard";
import Logo from "./features/Logo/Logo";

const App = () => {
  const { active } = useSelector((state) => state.stepper);
  
  const renderOnboardContent = () => {
    switch (active) {
      default:
        return <WelcomeOnBoard />;
      case 2:
        return <SetupHomeOnBoard />;
      case 3:
        return <PlansOnBoard />;
      case 4:
        return <CompleteOnBoard />;
    }
  };

  return (
    <Box className="App">
      <Box sx={{ textAlign: "center" }} mb={2}>
        <Logo />
      </Box>
      <Box>
        <FormStepper />
        {renderOnboardContent()}
      </Box>
    </Box>
  );
};

export default App;
