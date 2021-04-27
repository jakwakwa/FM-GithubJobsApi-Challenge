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

const useStayles = makeStyles({
  root: {
    padding: "0 24px 24px",
  },
  paper: {
    maxWidth: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0)",
  },
  container: {
    padding: "0",
  },
});

function MobileSearchDialog(props) {
  const classes = useStayles();
  const { open, onClose, filterchecked, checkboxhandler } = props;

  return (
    <Dialog
      classes={classes}
      aria-labelledby="simple-dialog-title"
      open={open}
      style={{ padding: "0" }}
    >
      <DialogWrapper>
        <Container classes={classes} maxWidth="lg">
          <form
            action="/"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Submitted form!");
              onClose(false);
            }}
          >
            <Label htmlFor="location">
              <IconWrapperLeft>
                <LocationIcon />
              </IconWrapperLeft>
              <SearchInput
                id="locationFormInput"
                placeholder="Filter by location..."
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
              <PrimaryButton type="Submit" value="Submit" variant="contained">
                Search
              </PrimaryButton>
            </div>
            <div>
              <SecondaryButton
                onClick={() => onClose(true)}
                variant="contained"
              >
                Cancel
              </SecondaryButton>
            </div>
          </form>
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
  left: 10px;
`;
