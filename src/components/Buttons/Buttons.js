import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export const PrimaryButton = withStyles(() => ({
  root: {
    color: "#fff",
    fontSize: "16px",
    fontWeight: "700",
    textTransform: "capitalize",
    backgroundColor: "#5964E0",
    padding: "10px 27px",
    width: "100%",
    minWidth: "100%",
    "&:hover": {
      backgroundColor: "#939BF4",
    },
  },
}))(Button);

export const IconButton = withStyles(() => ({
  root: {
    textTransform: "capitalize",
    backgroundColor: "#5964E0",
    padding: "15px 5px",
    width: "100%",
    minWidth: "100%",
    "&:hover": {
      backgroundColor: "#939BF4",
    },
  },
}))(Button);

export const SecondaryButton = withStyles(() => ({
  root: {
    color: "#5964E0",
    fontSize: "16px",
    fontWeight: "700",
    textTransform: "capitalize",
    backgroundColor: "#eeeffc",
    padding: "10px 27px",
    "&:hover": {
      backgroundColor: "#C5C9F4",
    },
  },
}))(Button);
