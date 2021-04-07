import React, { useState } from "react";

import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { FilterIcon, LocationIcon } from "./Icons/Icons";
import JobContainer from "../Jobs/JobContainer";

const SearchParams = () => {
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
                style={{
                  borderRight: "1px solid #E7E8E9",
                  borderLeft: "1px solid #E7E8E9",
                }}
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
            {/*<FormControlLabel
              control={<Checkbox checked={false} name="gilad" />}
              label="Full time only"
            />*/}
            <FormControlLabel
              control={
                <Checkbox
                  checked={fullTimeInput.checkedA}
                  onChange={handleFullTimeFilter}
                  name="checkedA"
                  color="primary"
                />
              }
              label="Full Time Only"
            />
            <Button
              type="Submit"
              color="primary"
              variant="contained"
              value="Submit"
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </form>

      <JobContainer
        description={descriptionProp}
        location={locationProp}
        fullTime={fullTimeProp}
        initialCounter={initCount}
      />
    </Wrapper>
  );
};

export default SearchParams;

const Wrapper = styled.div`
  position: relative;
  top: -40px;
  background-color: #fff;
  width: 100%;
  height: 80px;
  border-radius: 6px;
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
  background-color: #fff;
  height: 80px;
  width: 100%;
  border: none;
  resize: none;
  outline: none;
  padding: 23px;
  padding-left: 60px;
`;
