import React from "react";
import clsx from "clsx";
import styled from "styled-components";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: 3,
    width: 24,
    height: 24,
    backgroundColor: "#E7E8E9",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#D5D8F7",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#5964e0",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 24,
      height: 24,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#5964e0",
      opacity: "0.9",
    },
  },
});

// Inspired by blueprintjs
function CustomCheckbox(props) {
  const classes = useStyles();

  return (
    <Checkbox
      className={classes.root}
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ "aria-label": "decorative checkbox" }}
      {...props}
    />
  );
}

const FilterCheckbox = ({ label, checked, handler }) => {
  return (
    <CheckBoxStyled>
      <FormControlLabel
        control={
          <CustomCheckbox checked={checked} onChange={handler} name={label} />
        }
        label={label}
      />
    </CheckBoxStyled>
  );
};

export default FilterCheckbox;

const CheckBoxStyled = styled.div`
  & .MuiTypography-body1 {
    font-family: "Kumbh Sans", sans-serif;
    font-weight: 700;
    margin-top: 4px;
    margin-left: 7px;
    font-size: 15px;
  }
  & label span span span {
    opacity: ${({ theme }) => theme.checkboxBg};
  }
`;
