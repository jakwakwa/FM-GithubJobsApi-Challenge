import React from "react";
import styled from "styled-components";
import { Dialog, Container } from "@material-ui/core/";
import { LocationIcon } from "./Icons/Icons";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../components/Buttons/Buttons";
import FilterCheckbox from "../../components/Checkbox/CustomCheckbox";
import { makeStyles } from "@material-ui/core/styles";
import { SearchIcon } from "./Icons/Icons";

const useStyles = makeStyles({
  root: {
    padding: "0 24px 24px",
  },
  paper: {
    maxWidth: "90%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0)",
  },
  container: {
    padding: "0",
  },
});

function MobileSearchDialog(props) {
  const classes = useStyles();
  const {
    open,
    setMobileSearch,
    searchSubmitHandler,
    locationQueryHandler,
    LOCATION_INPUT_ID,
    DESCRIPTION_INPUT_ID,
    filterchecked,
    checkboxhandler,
    descriptionQuery,
    descriptionQueryHandler,
  } = props;

  return (
    <Dialog
      classes={classes}
      aria-labelledby="simple-dialog-title"
      open={open}
      style={{ padding: "0" }}
    >
      <DialogWrapper>
        <Container classes={classes} maxWidth="md">
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
          <Label htmlFor="location">
            <IconWrapperLeftLocation>
              <LocationIcon />
            </IconWrapperLeftLocation>
            <SearchInput
              id={LOCATION_INPUT_ID}
              name="location"
              placeholder="Filter by location..."
              onChange={locationQueryHandler}
              // value={location}
            />
          </Label>
          <div style={{ marginLeft: "10px", marginBottom: "13px" }}>
            <FilterCheckbox
              label="Full Time Only"
              checked={filterchecked}
              handler={checkboxhandler}
            />
          </div>
          <div>
            <PrimaryButton onClick={searchSubmitHandler} variant="contained">
              Search
            </PrimaryButton>
          </div>
          <div>
            <SecondaryButton
              onClick={() => setMobileSearch(false)}
              variant="contained"
            >
              Cancel
            </SecondaryButton>
          </div>
        </Container>
      </DialogWrapper>
    </Dialog>
  );
}
export default MobileSearchDialog;

const DialogWrapper = styled.div`
  border-radius: 6px;
  background: ${({ theme }) => theme.jobcards};
`;

const SearchInput = styled.input`
  background: ${({ theme }) => theme.jobcards};
  height: 80px;
  width: 100%;
  border: none;
  resize: none;
  outline: none;
  padding-left: 44px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.stroke};
  @media screen and (max-width: 600px) {
    background: ${({ theme }) => theme.jobcards};
    height: 80px;
    width: 100%;
    border: none;
    resize: none;
    outline: none;
    padding-left: 44px;
    margin-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.stroke};
  }
`;
const Label = styled.label`
  background: ${({ theme }) => theme.jobcards};
  height: 80px;
  position: relative;
`;
const IconWrapperLeft = styled.div`
  position: absolute;
  top: -5px;
  left: 0px;
`;

const IconWrapperLeftLocation = styled.div`
  position: absolute;
  top: 88px;
`;
