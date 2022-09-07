import {
  TextField,
  Typography,
  Box,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInputValues } from "../../AppSlice";

const CustomInput = ({
  label,
  secondaryLable,
  placeholder,
  name,
  startAdornment,
}) => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  console.log(app)
  return (
    <Box mt={2} mb={2}>
      <Box display="flex">
        <Typography
          sx={{ fontWeight: 600, fontSize: "14px" }}
          mb={1}
          color="text.secondary"
        >
          {label}
        </Typography>
        {secondaryLable ? (
          <Typography
            sx={{
              opacity: 0.6,
              fontWeight: 600,
              color: "text.secondary",
              fontSize: "12px",
            }}
            ml={0.5}
            mt={0.1}
          >
            {secondaryLable}
          </Typography>
        ) : null}
      </Box>
      <Box>
        {/* <OutlinedInput
          startAdornment={
            startAdornment ? (
              <InputAdornment position="start">
                <Box sx={{ backgroundColor: "#f2f2f2" }}>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      opacity: 0.8,
                    }}
                  >
                    www.eden.com/
                  </Typography>
                </Box>
              </InputAdornment>
            ) : null
          }
          inputProps={{
            placeholder: placeholder,
            sx: { width: startAdornment ? "150px" : "270px" },
          }}
        /> */}
        <TextField
          placeholder={placeholder}
          size="small"
          sx={{ width: "300px" }}
          value={app[name]}
          onChange={(e) =>
            dispatch(updateInputValues({ [name]: e.target.value }))
          }
        />
      </Box>
    </Box>
  );
};

export default CustomInput;
