import React from "react";
import DoneIcon  from "@mui/icons-material/Done";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CongratsIcon = () => {
  const theme = useTheme();
  return (
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
  );
};

export default CongratsIcon;
