import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core/";
import { themeColors } from "../../styles/theme/ThemeStyled";
// import { PrimaryButton } from "../../components/Buttons/Buttons";
import { LocationIcon, SearchIcon } from "./Icons/Icons";
import FilterCheckbox from "../../components/Checkbox/CustomCheckbox";
const LOCATION_INPUT_ID = "location";
const DESCRIPTION_INPUT_ID = "description";
export const SearchForm = ({
  descriptionQuery,
  descriptionQueryHandler,
  locationQueryHandler,
  fullTimeInput,
  searchSubmitHandler,
  fulltimeHandler,
}) => {
  return (
    <Wrapper>
      <form onSubmit={searchSubmitHandler}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {/* DESCRIPTION */}
          <Grid item xs sm={3} md={5}>
            <Label htmlFor={DESCRIPTION_INPUT_ID}>
              <IconWrapperLeft>
                <SearchIcon />
              </IconWrapperLeft>
              <SearchInput
                id={DESCRIPTION_INPUT_ID}
                name="description"
                placeholder="Filter by description, companies, expertise..."
                onChange={descriptionQueryHandler}
                value={descriptionQuery}
              />
            </Label>
          </Grid>
          {/* LOCATION */}
          <Grid item xs sm={3} md={3} style={{ minWidth: "310px" }}>
            <Label htmlFor={LOCATION_INPUT_ID}>
              <IconWrapperLeft>
                <LocationIcon />
              </IconWrapperLeft>

              <SearchInput
                id={LOCATION_INPUT_ID}
                name="location"
                placeholder="Filter by location..."
                onChange={locationQueryHandler}
                // value={location}
              />
            </Label>
          </Grid>
          {/* CHECKBOX  and SEARCH */}
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
            style={{ padding: "0 0px 0 0px", minWidth: "310px" }}
            item
            xs
            sm={6}
            md={3}
          >
            <FilterCheckbox
              label="Full Time Only"
              name="contract"
              fullTimeInput={fullTimeInput}
              handler={fulltimeHandler}
            />
            <div>
              <SearchButton type="submit">Search</SearchButton>
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

const SearchButton = styled.button`
  appearance: none !important;
  outline: none;
  border: 1px solid ${themeColors.primary.violet};
  border-radius: 6px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  letter-spacing  0.8px;
  background-color: ${themeColors.primary.violet};
  padding: 15px 27px;
  width: 100%;
  min-width: 100%;

  &:hover {
    background-color: ${themeColors.primary.lightViolet};
    border: 1px solid ${themeColors.primary.lightViolet};
  }
`;
