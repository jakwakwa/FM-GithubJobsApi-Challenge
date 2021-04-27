import React, { useState } from "react";
import { navigate } from "@reach/router";
import { Container, Grid } from "@material-ui/core/";
import styled from "styled-components";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import { LocationIcon, SearchIcon } from "./Icons/Icons";
import FilterCheckbox from "../../components/Checkbox/CustomCheckbox";
// Child Component
import JobCardContainer from "../JobCardContainer/JobCardContainer";
// CONSTANTS
const LOCATION_INPUT_ID = "locationFormInput";
const DESCRIPTION_INPUT_ID = "descFormInput";

const SearchParams = () => {
  let initialCountVal = 1;
  let initialCheckboxState = false;
  let locationInputSubmitted;
  let descriptionInputSubmitted;

  const [counter, setCounter] = useState(initialCountVal);
  const [limitTo, setLimitTo] = useState(12);
  const [locationInput, setLocationInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [fullTimeInput, setFullTimeInput] = React.useState({
    checkedState: initialCheckboxState,
  });
  const [fullTimeProp, setFullTimeProp] = useState(false);

  // For Routing
  if (locationInput !== "" && location.pathname === "/devjob_search") {
    setLocationInput("");
    setCounter(1);
  } else if (
    descriptionInput !== "" &&
    location.pathname === "/devjob_search"
  ) {
    setDescriptionInput("");
    setCounter(1);
  }

  const handleFullTimeFilter = (event) => {
    setFullTimeInput({
      ...fullTimeInput,
      [event.target.name]: event.target.checked,
    });
  };

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
    //  TODO Object destructuring for more elegant code
    e.preventDefault();

    const setInputAfterSubmit = (locationObj, descriptionObj) => {
      if (locationObj.queried === true && !descriptionObj.queried) {
        setLocationInput(locationObj.inputQuerySubmitted);
        e.target.elements[locationObj.inputId].value = "";
        //
      } else if (!locationObj.queried && descriptionObj.queried === true) {
        setDescriptionInput(descriptionObj.inputQuerySubmitted);
        e.target.elements[descriptionObj.inputId].value = "";
        //
      } else if (
        locationObj.queried === true &&
        descriptionObj.queried === true
      ) {
        setDescriptionInput(descriptionObj.inputQuerySubmitted);
        setLocationInput(locationObj.inputQuerySubmitted);
        e.target.elements[locationObj.inputId].value = "";
        e.target.elements[descriptionObj.inputId].value = "";
        //
      } else {
        // eslint-disable-next-line no-console
        console.log("error: no query logged");
      }
      navigate(
        `/devjob_search=${locationObj.inputQuerySubmitted}${descriptionObj.inputQuerySubmitted}`
      );
    };

    setCounter(1);
    locationInputSubmitted = e.target.elements.locationFormInput.value;
    descriptionInputSubmitted = e.target.elements.descFormInput.value;

    const queryObject = {
      location: {
        queried: true,
        inputId: LOCATION_INPUT_ID,
        inputQuerySubmitted: locationInputSubmitted,
      },
      description: {
        queried: true,
        inputId: DESCRIPTION_INPUT_ID,
        inputQuerySubmitted: descriptionInputSubmitted,
      },
    };

    if (
      locationInputSubmitted.length > 0 &&
      descriptionInputSubmitted.length === 0
    ) {
      setInputAfterSubmit(queryObject.location, queryObject.description);
    } else if (
      descriptionInputSubmitted.length > 0 &&
      locationInputSubmitted.length === 0
    ) {
      setInputAfterSubmit(queryObject.location, queryObject.description);
    } else if (
      descriptionInputSubmitted.length > 0 &&
      locationInputSubmitted.length > 0
    ) {
      setInputAfterSubmit(queryObject.location, queryObject.description);
    }
    setFullTimeProp(fullTimeInput.checkedState);
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
              {/* DESCRIPTION */}
              <Grid item xs sm={3} md={4}>
                <Label htmlFor={DESCRIPTION_INPUT_ID}>
                  <IconWrapperLeft>
                    <SearchIcon />
                  </IconWrapperLeft>
                  <SearchInput
                    id={DESCRIPTION_INPUT_ID}
                    placeholder="Filter by description, companies, expertise..."
                  />
                </Label>
              </Grid>

              {/* LOCATION */}
              <Grid item xs sm={3} md={4}>
                <Label htmlFor={LOCATION_INPUT_ID}>
                  <IconWrapperLeft>
                    <LocationIcon />
                  </IconWrapperLeft>

                  <SearchInput
                    id={LOCATION_INPUT_ID}
                    placeholder="Filter by location..."
                  />
                </Label>
              </Grid>

              {/* CHECKBOX  and SEARCH */}
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
                <FilterCheckbox
                  label="Full Time Only"
                  checked={fullTimeInput.checkedState}
                  handler={handleFullTimeFilter}
                />

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
            </Grid>
          </form>
        </Wrapper>

        <JobCardContainer
          description={descriptionInput}
          location={locationInput}
          fullTimeCb={fullTimeProp}
          counter={counter}
          limit={limitTo}
          nextPageHandler={handleLoadNextPage}
          currentPageHandler={handleOnLoadMoreCurrent}
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
