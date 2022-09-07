import React, { Fragment } from "react";
import { Box } from "@mui/material";
import Header from "../Header/Header";
import CustomInput from "../CustomInput/CustomInput";

const WelcomeOnBoard = () => {
  return (
    <Fragment>
      <Box mt={4} mb={4}>
        <Header
          primaryText="Welcome! First things first..."
          secondaryText="You can always change them later."
        />
      </Box>
      <CustomInput name="fullName" label="Full Name" placeholder="Steve Jobs" />
      <CustomInput
        name="displayName"
        label="Display Name"
        placeholder="Steve"
      />
    </Fragment>
  );
};

export default WelcomeOnBoard;
