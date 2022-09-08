import React from "react";
import { Box, Slide } from "@mui/material";
import Header from "../Header/Header";
import CustomInput from "../CustomInput/CustomInput";
const WelcomeOnBoard = () => {
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
      </Box>
    </Slide>
  );
};

export default WelcomeOnBoard;
