import React from "react";
import { Box } from "@mui/material";
import PlanCard from "../PlanCard/PlanCard";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import Header from "../Header/Header";

const PlansOnBoard = () => {
  const theme = useTheme();
  const { selectedPlan } = useSelector((state) => state.app);
  const teamActive = selectedPlan === "team" ? true : false;
  const individualActive = selectedPlan === "individual" ? true : false;
  return (
    <Box>
      <Box mt={4} mb={4}>
        <Header
          primaryText="How are you planning to use Eden?"
          secondaryText="we'll streamline your setup experience accordingly."
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <PlanCard
          id="individual"
          name="selectedPlan"
          active={individualActive}
          primaryText="For myself"
          secondaryText="Write better. Think more clearly. Stay organized."
          icon={
            <PersonIcon
              sx={{
                color: individualActive ? theme.palette.primary.main : "",
                fontSize: "32px",
              }}
            />
          }
        />
        <PlanCard
          id="team"
          name="selectedPlan" //key to store data,name should be same as field in redux state
          primaryText="With my team"
          secondaryText="Wikis, odcs, tasks & projects, all in one place."
          icon={
            <GroupsIcon
              sx={{
                color: teamActive ? theme.palette.primary.main : "",
                fontSize: "32px",
              }}
            />
          }
          active={teamActive}
        />
      </Box>
    </Box>
  );
};

export default PlansOnBoard;
