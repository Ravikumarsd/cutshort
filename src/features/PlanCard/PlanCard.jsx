import React from "react";
import { Box, Typography } from "@mui/material";
import "./PlanCard.css";
import { useDispatch } from "react-redux";
import { updateInputValues } from "../../AppSlice";
const PlanCard = ({ id, icon, primaryText, secondaryText, name, active }) => {
  const dispatch = useDispatch();
  return (
    <Box
      className={`plan-card ${active ? "active" : ""}`}
      onClick={() => dispatch(updateInputValues({ [name]: id }))}
    >
      {icon}
      <Typography fontSize="14px">{primaryText}</Typography>
      <Typography color="text.secondary" fontSize="12px">
        {secondaryText}
      </Typography>
    </Box>
  );
};

export default PlanCard;
