import React from "react";
import Header from "../Header/Header";
import { Box, Button, Slide } from "@mui/material";
import { useSelector } from "react-redux";
import CongratsIcon from "../CongratsIcon/CongratsIcon";

const CompleteOnBoard = () => {
  const onBoard = useSelector((state) => state.onBoard);
  const { fullName } = onBoard;

  return (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <Box
        mt={4}
        mb={4}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <CongratsIcon />
        <Header
          primaryText={`Congratulations, ${fullName}!`}
          secondaryText="You have completed onboarding, you can start using the Eden!"
        />
        <Box mt={4} mb={4}>
          <Button
            sx={{ width: "320px" }}
            size="large"
            onClick={() => alert(JSON.stringify(onBoard, null, 4))}
            variant="contained"
          >
            Launch Eden
          </Button>
        </Box>
      </Box>
    </Slide>
  );
};

export default CompleteOnBoard;
