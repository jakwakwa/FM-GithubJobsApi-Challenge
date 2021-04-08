import { withStyles } from "@material-ui/core/styles";
import { Switch } from "@material-ui/core";

const WhiteSwitch = withStyles({
  switchBase: {
    color: "#ffffff",
    "&$checked": {
      color: "#ffffff",
    },
    "&$checked + $track": {
      backgroundColor: "#ffffff",
    },
  },
  checked: {},
  track: {},
})(Switch);

export default WhiteSwitch;
