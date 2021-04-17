import React, { useState } from "react";

import styled from "styled-components";
import { Container, Grid, Hidden, Button } from "@material-ui/core/";

import { PrimaryButton } from "../../components/Buttons/Buttons";
import { FilterIcon, LocationIcon, SearchIcon } from "./Icons/Icons";
import FilterCheckbox from "../../components/Checkbox/CustomCheckbox";
import MobileSearchButton from "../../components/Buttons/MobileSearchButton";

import JobCardContainer from "../JobCardContainer/JobCardContainer";
import MobileFilterDialog from "./MobileFilterDialog";

const SearchParams = () => {
  const [open, setOpen] = useState(false);
  const [locationInput, setLocationInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [locationProp, setLocationProp] = useState("");
  const [descriptionProp, setDescriptionProp] = useState("");

  const [fullTimeInput, setFullTimeInput] = React.useState({
    checkedA: false,
  });
  const [fullTimeProp, setFullTimeProp] = useState("");
  let [counter, setCounter] = useState(1);

  //  const [selectedValue, setSelectedValue] = useState("");

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
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCounter(1);
    setLocationProp(locationInput);
    setDescriptionProp(descriptionInput);
    setFullTimeProp(fullTimeInput.checkedA);
  };

  const handleLoadMoreSubmit = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
  };

  return (
    <>
      <Container maxWidth="lg" style={{ marginBottom: "100px" }}>
        <Wrapper>
          <form onSubmit={handleSubmit}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
            >
              <Grid item xs sm={3} md={4}>
                <Label htmlFor="filter">
                  <Hidden xsDown>
                    <IconWrapperLeft>
                      <SearchIcon />
                    </IconWrapperLeft>
                    <SearchInput
                      id="filter"
                      value={descriptionInput}
                      placeholder="Filter by description, companies, expertise..."
                      onChange={handleDescriptionFilter}
                    />
                  </Hidden>

                  <Hidden smUp>
                    <SearchInput
                      id="filter"
                      value={descriptionInput}
                      placeholder="Filter by title..."
                      onChange={handleDescriptionFilter}
                    />
                    <IconWrapperRight>
                      <Button color="primary" onClick={handleClickOpen}>
                        <FilterIcon />
                      </Button>
                    </IconWrapperRight>
                  </Hidden>
                </Label>
              </Grid>
              <Hidden xsDown>
                <Grid item xs sm={3} md={4}>
                  <Label htmlFor="location">
                    <IconWrapperLeft>
                      <LocationIcon />
                    </IconWrapperLeft>

                    <SearchInput
                      id="location"
                      value={locationInput}
                      placeholder="Filter by location..."
                      onChange={handleLocationFilter}
                    />
                  </Label>
                </Grid>
              </Hidden>

              {/*Search Button Destop & Tablet  */}
              <Hidden xsDown>
                <Grid
                  container
                  direction="row"
                  justify="space-around"
                  alignItems="center"
                  item
                  xs
                  sm={6}
                  md={4}
                  style={{ height: "80px" }}
                >
                  {/* Fulltime Checkebox Desktop */}
                  <Hidden smDown>
                    <FilterCheckbox
                      label="Full Time Only"
                      checked={fullTimeInput.checkedA}
                      handler={handleFullTimeFilter}
                    />
                  </Hidden>
                  {/* Fulltime Checkebox Tablet */}
                  <Hidden mdUp>
                    <FilterCheckbox
                      label="Full Time"
                      checked={fullTimeInput.checkedA}
                      handler={handleFullTimeFilter}
                    />
                  </Hidden>

                  <div>
                    <PrimaryButton
                      type="Submit"
                      value="Submit"
                      variant="contained"
                    >
                      Search
                    </PrimaryButton>
                  </div>
                </Grid>
              </Hidden>

              {/*  Search Button Mobile  */}
              <Hidden smUp>
                <MobileSearchButton type={"Submit"} value={"Submit"} />
                <MobileFilterDialog
                  open={open}
                  onClose={handleClose}
                  SearchInput={locationInput}
                  inputFilterHandler={handleLocationFilter}
                  filterchecked={fullTimeInput.checkedA}
                  checkboxhandler={handleFullTimeFilter}
                />
              </Hidden>
            </Grid>
          </form>
        </Wrapper>

        <JobCardContainer
          description={descriptionProp}
          location={locationProp}
          fullTime={fullTimeProp}
          counter={counter}
          handler={handleLoadMoreSubmit}
        />
      </Container>
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
  margin-bottom: 20px;

  & input:first-of-type {
    border-right: 1px solid ${({ theme }) => theme.stroke};
    @media screen and (max-width: 600px) {
      border-right: none;
    }
  }
`;

const IconWrapperLeft = styled.span`
  position: absolute;
  top: -5px;
  left: 23px;
`;
const IconWrapperRight = styled.span`
  position: absolute;
  top: -9px;
  right: 4px;
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
  @media screen and (max-width: 600px) {
    padding-left: 24px;
  }
`;
