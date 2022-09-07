import React from "react";
import Header from "../Header/Header";
import { Box } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import DoneIcon from "@mui/icons-material/Done";
const CompleteOnBoard = () => {
  const theme = useTheme();
  const { fullName } = useSelector((state) => state.app);
  return (
    <Box mt={4} mb={4}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        mb={4}
        mt={4}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60px",
            width: "60px",
            backgroundColor: theme.palette.primary.main,
            borderRadius: "50px",
          }}
        >
          <DoneIcon sx={{ color: "#fff", fontSize: "22px" }} />
        </Box>
      </Box>
      <Header
        primaryText={`Congratulation, ${fullName}!`}
        secondaryText="you have completed onboarding, you can start using the Eden!"
      />
    </Box>
  );
};

export default CompleteOnBoard;
