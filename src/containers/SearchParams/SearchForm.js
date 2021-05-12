import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core/";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import { LocationIcon, SearchIcon } from "./Icons/Icons";
import FilterCheckbox from "../../components/Checkbox/CustomCheckbox";
const LOCATION_INPUT_ID = "location";
const DESCRIPTION_INPUT_ID = "description";
export const SearchForm = ({
  queryHandler,
  fulltimeHandler,
  fullTimeInput,
}) => {
  return (
    <Wrapper>
      <form onSubmit={queryHandler}>
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
              checked={fullTimeInput}
              handler={fulltimeHandler}
            />

            <div>
              <PrimaryButton type="Submit" value="Submit" variant="contained">
                Search
              </PrimaryButton>
            </div>
          </Grid>
        </Grid>
      </form>
    </Wrapper>
  );
};

export default SearchForm;

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
