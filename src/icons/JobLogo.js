import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

let JobLogo = (props) => (
  <SvgIcon {...props}>
    <rect width="50" height="50" rx="15" fill="#DF6DAE" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29 16H16V29H29V35H35V29H29V16Z"
      fill="white"
    />
  </SvgIcon>
);

JobLogo.displayName = "JobLogo";
JobLogo.muiName = "SvgIcon";

export default JobLogo;
