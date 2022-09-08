import React from "react";
import { Box, Slide, Button } from "@mui/material";
import Header from "../Header/Header";
import CustomInput from "../CustomInput/CustomInput";
import { next } from "../FormStepper/FormStepperSlice";
import { useDispatch, useSelector } from "react-redux";
const WelcomeOnBoard = () => {
  const dispatch = useDispatch();
  const { fullName, displayName } = useSelector((state) => state.onBoard);
  return (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <Box mt={4} mb={4}>
          <Header
            primaryText="Welcome! First things first..."
            secondaryText="You can always change them later."
          />
        </Box>
        <CustomInput
          name="fullName"
          label="Full Name"
          placeholder="Steve Jobs"
        />
        <CustomInput
          name="displayName"
          label="Display Name"
          placeholder="Steve"
        />
        <Box mt={2} mb={4}>
          <Button
            sx={{ width: "320px" }}
            size="large"
            disabled={!fullName.length || !displayName.length}
            onClick={() => dispatch(next())}
            variant="contained"
          >
            Next
          </Button>
        </Box>
      </Box>
    </Slide>
  );
};

export default WelcomeOnBoard;
