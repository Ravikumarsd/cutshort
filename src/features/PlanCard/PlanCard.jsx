import React from "react";
import { Box, Typography } from "@mui/material";
import "./PlanCard.css";
import { useDispatch } from "react-redux";
import { updateInputValues } from "../../onBoardSlice";

const PlanCard = ({ id, icon, primaryText, secondaryText, name, active }) => {
  const dispatch = useDispatch();
  return (
    <Box
      className={`plan-card ${active ? "active" : ""}`}
      onClick={() => dispatch(updateInputValues({ [name]: id }))}
    >
      {icon}
      <Typography
        fontSize="14px"
        sx={{ fontWeight: "bold", opacity: 0.8 }}
        mb={0.5}
      >
        {primaryText}
      </Typography>
      <Typography color="text.secondary" fontSize="12px">
        {secondaryText}
      </Typography>
    </Box>
  );
};

export default PlanCard;
