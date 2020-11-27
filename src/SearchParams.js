import React, { useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import SvgIcon from "@material-ui/core/SvgIcon";

import FormControlLabel from "@material-ui/core/FormControlLabel";

function FilterIcon(props) {
  return (
    <SvgIcon {...props}>
      <path
        d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
        fill="#5964E0"
        fillRule="nonzero"
      />
    </SvgIcon>
  );
}

function LocationIcon(props) {
  return (
    <SvgIcon {...props}>
      <path
        d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
        fill="#5964E0"
        fillRule="nonzero"
      />
    </SvgIcon>
  );
}
const SearchParams = () => {
  const [location, setLocation] = useState("Filter by location...");

  const Wrapper = styled.div`
    position: relative;
    top: -40px;
    background-color: #fff;
    width: 100%;
    height: 80px;
    border-radius: 6px;
    margin-bottom: 80px;
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

  const SearchBox = styled.input`
    background-color: #fff;
    height: 80px;
    width: 100%;
    border: none;
    resize: none;
    outline: none;
    padding: 23px;
    padding-left: 60px;
  `;

  return (
    <Wrapper>
      <form>
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
              <SearchBox
                id="filter"
                value="Filter by title, companies, expertise..."
                placeholder="Filter by title, companies, expertise..."
              />
            </Label>
          </Grid>
          <Grid item xs>
            <Label htmlFor="location">
              <SearchIcon>
                <LocationIcon />
              </SearchIcon>
              <SearchBox
                style={{
                  borderRight: "1px solid #E7E8E9",
                  borderLeft: "1px solid #E7E8E9",
                }}
                id="location"
                value={location}
                placeholder="Location"
                onChange={(e) => setLocation(e.target.value)}
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
            <FormControlLabel
              control={<Checkbox checked={false} name="gilad" />}
              label="Full time only"
            />
            <Button variant="contained" size="large" color="primary">
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </Wrapper>
  );
};

export default SearchParams;
