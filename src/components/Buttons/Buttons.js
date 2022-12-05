import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { themeColors } from "../../styles/theme/ThemeStyled";

export const PrimaryButton = withStyles(() => ({
  root: {
    color: "#fff",
    fontSize: "14px",
    fontWeight: "700",
    textTransform: "capitalize",
    backgroundColor: themeColors.primary.violet,
    padding: "10px 32px",
    marginBottom: "20px",
    width: "100%",
    minWidth: "100%",
    "& > span": {
      fontSize: "14px",
      fontWeight: "700",
    },
    "&:hover": {
      color: "#ffffff",
      backgroundColor: themeColors.primary.lightViolet,
    },
  },
}))(Button);

export const IconButton = withStyles(() => ({
  root: {
    textTransform: "capitalize",
    backgroundColor: themeColors.primary.violet,
    padding: "15px 5px",

    width: "100%",

    minWidth: "100%",
    "& > span": {
      fontSize: "14px",
      fontWeight: "700",
    },
    "&:hover": {
      backgroundColor: themeColors.primary.lightViolet,
    },
  },
}))(Button);

export const SecondaryButton = withStyles(() => ({
  root: {
    color: themeColors.primary.violet,
    fontSize: "14px",
    fontWeight: "700",
    textTransform: "capitalize",
    backgroundColor: themeColors.secondary.secondaryButton,
    padding: "10px 27px",
    marginBottom: "5px",

    "&:hover": {
      color: themeColors.primary.violet,
      backgroundColor: themeColors.secondary.secondaryButtonHover,
    },
  },
}))(Button);
