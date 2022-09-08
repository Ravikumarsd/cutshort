import React from "react";
import { Box, Slide } from "@mui/material";
import PlanCard from "../PlanCard/PlanCard";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import Header from "../Header/Header";

const PlansOnBoard = () => {
  const { selectedPlan } = useSelector((state) => state.onBoard);
  const isTeamActive = selectedPlan === "team" ? true : false;
  const isIndividualActive = selectedPlan === "individual" ? true : false;
  const theme = useTheme();
  return (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
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
            icon={
              <PersonIcon
                sx={{
                  color: isIndividualActive ? theme.palette.primary.main : "",
                  fontSize: "32px",
                }}
              />
            }
            primaryText="For myself"
            secondaryText="Write better. Think more clearly. Stay organized."
            active={isIndividualActive}
          />
          <PlanCard
            id="team"
            name="selectedPlan" //key to store data,name should be same as field in redux state
            primaryText="With my team"
            icon={
              <GroupsIcon
                sx={{
                  color: isTeamActive ? theme.palette.primary.main : "",
                  fontSize: "32px",
                }}
              />
            }
            secondaryText="Wikis, odcs, tasks & projects, all in one place."
            active={isTeamActive}
          />
        </Box>
      </Box>
    </Slide>
  );
};

export default PlansOnBoard;
