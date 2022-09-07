import { TextField, Typography, Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInputValues } from "../../onBoardSlice";
import { styled } from "@mui/material/styles";

const InputForAdornment = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
    },
  },
}));

const CustomInput = ({
  label,
  secondaryLable,
  placeholder,
  name,
  startAdornment,
}) => {
  const dispatch = useDispatch();
  const onBoard = useSelector((state) => state.onBoard);

  return (
    <Box mt={1} mb={1}>
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
        {startAdornment ? (
          <Box sx={{ display: "flex", width: "320px" }}>
            {startAdornment}
            <InputForAdornment
              value={onBoard[name]}
              placeholder={placeholder}
              size="small"
              sx={{ width: "220px" }}
              onChange={(e) =>
                dispatch(updateInputValues({ [name]: e.target.value }))
              }
            />
          </Box>
        ) : (
          <TextField
            placeholder={placeholder}
            size="small"
            sx={{ width: "320px" }}
            value={onBoard[name]}
            onChange={(e) =>
              dispatch(updateInputValues({ [name]: e.target.value }))
            }
          />
        )}
      </Box>
    </Box>
  );
};

export default CustomInput;
