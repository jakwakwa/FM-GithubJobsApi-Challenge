import { withStyles } from "@material-ui/core/styles";
import { Switch } from "@material-ui/core";

const WhiteSwitch = withStyles({
  root: {
    top: "-4px",
    width: "68px",
    marginRight: "2px",
  },
  switchBase: {
    color: "#5964E0",
    top: "8px",
    left: "8px",

    "&$checked": {
      color: "#5964E0",
    },
    "&:hover": {
      color: "#939BF4",
    },
    "&$checked + $track": {
      backgroundColor: "#ffffff",
      width: "90px",
      opacity: "1",
    },
  },

  checked: {
    width: "33px",
    opacity: "1",
    track: {
      opacity: "1",
    },
  },
  track: {
    color: "#ffffff",
    backgroundColor: "#ffffff",
    opacity: "1",
    height: "24px",

    top: "-7px",
    borderRadius: "12px",
  },
  thumb: {
    boxShadow: "none",

    width: "14px",
    height: "14px",
  },
})(Switch);

export default WhiteSwitch;
