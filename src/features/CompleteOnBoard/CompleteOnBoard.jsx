import React from "react";
import Header from "../Header/Header";
import { Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
const CompleteOnBoard = () => {
  const theme = useTheme();
  const { fullName } = useSelector((state) => state.app);
  return (
    <Box mt={4} mb={4}>
      <Box sx={{ textAlign: "center" }}>
        <CheckCircleIcon
          sx={{ fontSize: "40px", color: theme.palette.primary.main }}
        />
      </Box>
      <Header
        primaryText={`Congratulation, ${fullName}!`}
        secondaryText="you have completed onboarding, you can start using the Eden!"
      />
    </Box>
  );
};

export default CompleteOnBoard;
