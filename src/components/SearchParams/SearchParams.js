import React, { useState } from "react";
import clsx from "clsx";
import styled from "styled-components";
//import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { PrimaryButton } from "../Buttons/Buttons";

import { FilterIcon, LocationIcon } from "./Icons/Icons";
import JobContainer from "../Jobs/JobContainer";
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
function StyledCheckbox(props) {
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

const SearchParams = () => {
  //const classes = useStyles();
  const [locationInput, setLocationInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [locationProp, setLocationProp] = useState("");
  const [descriptionProp, setDescriptionProp] = useState("");
  const [fullTimeInput, setFullTimeInput] = React.useState({
    checkedA: false,
  });
  let initCount = 0;

  const [fullTimeProp, setFullTimeProp] = useState("");

  const handleLocationFilter = (e) => {
    setLocationInput(e.target.value);
  };

  const handleDescriptionFilter = (e) => {
    setDescriptionInput(e.target.value);
  };

  const handleFullTimeFilter = (event) => {
    setFullTimeInput({
      ...fullTimeInput,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    initCount = 0;
    event.preventDefault();
    setLocationProp(locationInput);
    setDescriptionProp(descriptionInput);
    setFullTimeProp(fullTimeInput.checkedA);
  };

  return (
    <>
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            <Grid item xs>
              <Label htmlFor="filter">
                <SearchIcon>
                  <FilterIcon />
                </SearchIcon>
                <SearchInput
                  id="filter"
                  value={descriptionInput}
                  placeholder="Filter by description, companies, expertise..."
                  onChange={handleDescriptionFilter}
                />
              </Label>
            </Grid>
            <Grid item xs>
              <Label htmlFor="location">
                <SearchIcon>
                  <LocationIcon />
                </SearchIcon>
                <SearchInput
                  id="location"
                  value={locationInput}
                  placeholder="Filter by location..."
                  onChange={handleLocationFilter}
                />
              </Label>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
              item
              xs
              style={{ height: "80px" }}
            >
              <CheckBoxStyled>
                <FormControlLabel
                  control={
                    <StyledCheckbox
                      checked={fullTimeInput.checkedA}
                      onChange={handleFullTimeFilter}
                      name="checkedA"
                    />
                  }
                  label="Full Time Only"
                />
              </CheckBoxStyled>
              <PrimaryButton type="Submit" value="Submit" variant="contained">
                Search
              </PrimaryButton>
            </Grid>
          </Grid>
        </form>
      </Wrapper>

      <JobContainer
        description={descriptionProp}
        location={locationProp}
        fullTime={fullTimeProp}
        initialCounter={initCount}
      />
    </>
  );
};

export default SearchParams;

const Wrapper = styled.div`
  position: relative;
  top: -40px;
  background: ${({ theme }) => theme.jobcards};
  width: 100%;
  height: 80px;
  overflow: hidden;
  border-radius: 6px;

  & input:first-of-type {
    border-right: 1px solid ${({ theme }) => theme.stroke};
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  top: -5px;
  left: 23px;
`;

const Label = styled.label`
  background-color: #fff;
  height: 80px;
  position: relative;
`;

const SearchInput = styled.input`
  background: ${({ theme }) => theme.jobcards};
  height: 80px;
  width: 100%;
  border: none;
  resize: none;
  outline: none;
  padding: 23px;
  padding-left: 60px;
`;

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
