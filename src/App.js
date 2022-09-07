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
import brandLogo from "./brandLogo.png";
const TransformedBtn = styled(Button)(() => ({
  textTransform: "capitalize",
  width: "300px",
}));

const App = () => {
  const { active } = useSelector((state) => state.stepper);
  const app = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const renderOnboardContent = () => {
    switch (active) {
      case 2:
        return <SetupHomeOnBoard />;
      case 3:
        return <PlansOnBoard />;
      case 4:
        return <CompleteOnBoard />;
      default:
        return <WelcomeOnBoard />;
    }
  };

  const getButtonText = () => {
    switch (active) {
      case 2:
        return "Create Workspace";
      case 3:
        return "Create Workspace";
      case 4:
        return "Launch Eden";
      default:
        return "Create Workspace";
    }
  };
  const getButtonDisabled = () => {
    const { fullName, displayName, workspaceName, workspaceUrl, selectedPlan } =
      app;
    switch (active) {
      case 2:
        return !workspaceName.length;
      case 3:
        return !selectedPlan.length;
      case 4:
        return false;
      default:
        return !fullName.length || !displayName.length;
    }
  };

  return (
    <Box className="App">
      <Box m={2} mt={3}>
        <img width="120px" src={brandLogo} alt="eden-logo" />
      </Box>
      <FormStepper />
      {renderOnboardContent()}
      <Box mt={1}>
        <TransformedBtn
          disabled={getButtonDisabled()}
          onClick={() => {
            if (active === 4) {
              alert(JSON.stringify(app, "", " "));
            } else {
              dispatch(next());
            }
          }}
          variant="contained"
        >
          {getButtonText()}
        </TransformedBtn>
      </Box>
    </Box>
  );
};

export default App;
