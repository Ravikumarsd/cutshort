import React from "react";
import { Box, Typography } from "@mui/material";

const Header = ({ primaryText, secondaryText }) => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "0 2rem",
      }}
    >
      <Typography
        variant="h4"
        style={{ fontWeight: "bold", textAlign: "center" }}
      >
        {primaryText}
      </Typography>
      <Typography mt={1} style={{ textAlign: "center" }} color="text.secondary">
        {secondaryText}
      </Typography>
    </Box>
  );
};

export default Header;
