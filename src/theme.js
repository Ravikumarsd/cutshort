import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#664de5",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
  },
});
export default theme;
