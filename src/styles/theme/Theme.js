import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5964e0",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#eeeffc",
      contrastText: "#5964E0", //button text white instead of black
    },
  },
  typography: {
    button: {
      fontSize: "16px",
      fontWeight: "700",
      textTransform: "capitalize",
    },
  },
});

export default theme;
