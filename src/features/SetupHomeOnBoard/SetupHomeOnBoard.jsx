import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import Header from "../Header/Header";
import CustomInput from "../CustomInput/CustomInput";

const SetupHomeOnBoard = () => {
  return (
    <Fragment>
      <Box mt={4} mb={4}>
        <Header
          primaryText="Let's set up a home for all your work"
          secondaryText="You can always create another workspace later."
        />
      </Box>
      <CustomInput
        label="Workspace Name"
        name="workspaceName"
        placeholder="Eden"
      />
      <CustomInput
        label="Workspace URL"
        name="workspaceUrl"
        secondaryLable="(optional)"
        placeholder="Example"
        startAdornment={
          <Box
            sx={{
              width: "100px",
              padding: "0 1rem",
              backgroundColor: "#f2f2f2",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #e0e0e0",
              borderRight: "none",
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
            }}
          >
            <Typography
              sx={{
                color: "text.secondary",
                opacity: 0.8,
                fontSize: "14px",
              }}
            >
              www.eden.com/
            </Typography>
          </Box>
        }
      />
    </Fragment>
  );
};

export default SetupHomeOnBoard;
