import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { themeColors } from "../../styles/theme/ThemeStyled";

export const PrimaryButton = withStyles(() => ({
  root: {
    color: "#fff",
    fontSize: "16px",
    fontWeight: "700",
    textTransform: "capitalize",
    backgroundColor: themeColors.primary.violet,
    padding: "10px 27px",
    width: "100%",
    minWidth: "100%",
    "&:hover": {
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
    "&:hover": {
      backgroundColor: themeColors.primary.lightViolet,
    },
  },
}))(Button);

export const SecondaryButton = withStyles(() => ({
  root: {
    color: themeColors.primary.violet,
    fontSize: "16px",
    fontWeight: "700",
    textTransform: "capitalize",
    backgroundColor: themeColors.secondary.secondaryButton,
    padding: "10px 27px",
    "&:hover": {
      backgroundColor: themeColors.secondary.secondaryButtonHover,
    },
  },
}))(Button);
