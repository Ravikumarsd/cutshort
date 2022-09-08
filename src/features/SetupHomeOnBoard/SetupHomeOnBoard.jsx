import React from "react";
import { Box, Typography, Slide, Button } from "@mui/material";
import Header from "../Header/Header";
import CustomInput from "../CustomInput/CustomInput";
import { next } from "../FormStepper/FormStepperSlice";
import { useDispatch, useSelector } from "react-redux";

const SetupHomeOnBoard = () => {
  const dispatch = useDispatch();
  const { workspaceName } = useSelector((state) => state.onBoard);
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
        <Box mt={2} mb={4}>
          <Button
            sx={{ width: "320px" }}
            size="large"
            disabled={!workspaceName.length}
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

export default SetupHomeOnBoard;
