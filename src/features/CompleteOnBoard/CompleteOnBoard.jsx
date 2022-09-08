import React from "react";
import Header from "../Header/Header";
import { Box, Slide } from "@mui/material";
import { useSelector } from "react-redux";
import CongratsIcon from "../CongratsIcon/CongratsIcon";
const CompleteOnBoard = () => {
  const { fullName } = useSelector((state) => state.onBoard);
  return (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <Box mt={4} mb={4}>
        <CongratsIcon />
        <Header
          primaryText={`Congratulations, ${fullName}!`}
          secondaryText="You have completed onboarding, you can start using the Eden!"
        />
      </Box>
    </Slide>
  );
};

export default CompleteOnBoard;
