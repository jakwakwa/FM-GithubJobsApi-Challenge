import React, { useState } from "react";

import styled from "styled-components";
import { Container, Grid, Hidden, Button } from "@material-ui/core/";

import { PrimaryButton } from "../../components/Buttons/Buttons";
import { FilterIcon, LocationIcon, SearchIcon } from "./Icons/Icons";
import FilterCheckbox from "../../components/Checkbox/CustomCheckbox";
import MobileSearchButton from "../../components/Buttons/MobileSearchButton";

import JobCardContainer from "../JobCardContainer/JobCardContainer";
import MobileFilterDialog from "./MobileFilterDialog";

import { navigate } from "@reach/router";

const SearchParams = () => {
  const [open, setOpen] = useState(false);
  const [locationInput, setLocationInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [counter, setCounter] = useState(1);

  const [fullTimeInput, setFullTimeInput] = React.useState({
    checkedA: false,
  });
  //  const [fullTimeProp, setFullTimeProp] = useState("");
  let inval;
  let descInval;

  let persistDescr = "";

  if (locationInput !== "" && location.pathname === "/home") {
    setLocationInput("");
    setCounter(1);
    setFullTimeInput({
      ...fullTimeInput,
      checkedA: false,
    });
  } else if (descriptionInput !== "" && location.pathname === "/home") {
    setDescriptionInput("");
    setCounter(1);
    setFullTimeInput({
      ...fullTimeInput,
      checkedA: false,
    });
  }
  if (descriptionInput.length > 0) {
    persistDescr += `${descriptionInput}`;
  } else {
    persistDescr = "";
  }

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

  const [limitTo, setLimitTo] = useState(12);

  const handleOnLoadMoreCurrent = (e) => {
    e.preventDefault();
    setLimitTo(limitTo + 12);
  };

  const handleLoadNextPage = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    setLimitTo(12);
    setCounter(counter + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCounter(1);
    inval = e.target.elements.locationFormInput.value;
    descInval = e.target.elements.descFormInput.value;

    if (inval.length > 0 && descInval.length === 0) {
      setLocationInput(inval);
      navigate(`/${inval}`);
      e.target.elements.locationFormInput.value = "";
    } else if (descInval.length > 0 && inval.length === 0) {
      setDescriptionInput(descInval);
      navigate(`/${descInval}`);
      e.target.elements.descFormInput.value = "";
    } else if (descInval.length > 0 && inval.length > 0) {
      setLocationInput(inval);
      setDescriptionInput(descInval);
      navigate(`/${descInval}+${inval}`);
      e.target.elements.locationFormInput.value = "";
      e.target.elements.descFormInput.value = "";
    }
    setFullTimeInput({
      ...fullTimeInput,
      checkedA: false,
    });
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
                <Label htmlFor="descFormInput">
                  <Hidden xsDown>
                    <IconWrapperLeft>
                      <SearchIcon />
                    </IconWrapperLeft>
                    <SearchInput
                      id="descFormInput"
                      placeholder="Filter by description, companies, expertise..."
                    />
                  </Hidden>

                  <Hidden smUp>
                    <SearchInput id="filter" placeholder="Filter by title..." />
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
                  <Label htmlFor="locationFormInput">
                    <IconWrapperLeft>
                      <LocationIcon />
                    </IconWrapperLeft>

                    <SearchInput
                      id="locationFormInput"
                      placeholder="Filter by location..."
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
                  filterchecked={fullTimeInput.checkedA}
                  checkboxhandler={handleFullTimeFilter}
                />
              </Hidden>
            </Grid>
          </form>
        </Wrapper>

        <JobCardContainer
          description={descriptionInput}
          location={locationInput}
          fullTime={fullTimeInput}
          counter={counter}
          limit={limitTo}
          nextPageHandler={handleLoadNextPage}
          currentPageHandler={handleOnLoadMoreCurrent}
          descriptionInit={persistDescr}
        />
      </Container>
    </>
  );
};

export default SearchParams;

const Wrapper = styled.div`
  position: relative;
  top: -42px;
  background: ${({ theme }) => theme.jobcards};
  width: 100%;
  height: 80px;
  overflow: hidden;
  border-radius: 6px;
  margin-bottom: 65px;

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
