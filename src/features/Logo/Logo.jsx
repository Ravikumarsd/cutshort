import React from "react";
import { Box } from "@mui/material";
import brandLogo from "../../brandLogo.png";

const Logo = () => {
  return (
    <Box>
      <img width="120px" src={brandLogo} alt="eden-logo" />
    </Box>
  );
};

export default Logo;
