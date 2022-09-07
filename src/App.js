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
import Logo from "./features/Logo/Logo";
const TransformedBtn = styled(Button)(() => ({
  textTransform: "capitalize",
  width: "300px",
}));

const App = () => {
  const { active } = useSelector((state) => state.stepper);
  const onBoard = useSelector((state) => state.onBoard);
  const dispatch = useDispatch();

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

  const getButtonText = () => {
    switch (active) {
      default:
        return "Next";
      case 2:
        return "Next";
      case 3:
        return "Create Workspace";
      case 4:
        return "Launch Eden";
    }
  };

  const getButtonDisabled = () => {
    const { fullName, displayName, workspaceName, workspaceUrl, selectedPlan } =
    onBoard;
    switch (active) {
      case 2:
        return !workspaceName.length;
      case 3:
        return !selectedPlan.length;
      case 4:
        return (
          !fullName.length ||
          !displayName.length ||
          !workspaceName.length ||
          !selectedPlan.length
        );
      default:
        return !fullName.length || !displayName.length;
    }
  };

  const handleNextClick = () => {
    active === 4 ? alert(JSON.stringify(onBoard, "", " ")) : dispatch(next());
  };
  return (
    <Box className="App">
      <Box sx={{ textAlign: "center" }} mb={2}>
        <Logo />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <FormStepper />
        {renderOnboardContent()}
        <Box mt={2}>
          <TransformedBtn
            size="large"
            disabled={getButtonDisabled()}
            onClick={handleNextClick}
            variant="contained"
          >
            {getButtonText()}
          </TransformedBtn>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
