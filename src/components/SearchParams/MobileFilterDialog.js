import React from "react";
import styled from "styled-components";
import {
  DialogContent,
  Dialog,
  DialogActions,
  Button,
} from "@material-ui/core/";
import FilterCheckbox from "../Checkbox/CustomCheckbox";

function MobileSearchDialog(props) {
  const {
    onClose,
    open,
    searchInput,
    inputFilterHandler,
    filterchecked,
    checkboxhandler,
  } = props;

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog aria-labelledby="simple-dialog-title" open={open}>
      <DialogContent>
        <Label htmlFor="location">
          <SearchInput
            id="location"
            value={searchInput}
            placeholder="Filter by location..."
            onChange={inputFilterHandler}
          />
        </Label>
        <FilterCheckbox
          label="Full Time Only"
          checked={filterchecked}
          handler={checkboxhandler}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleListItemClick} color="primary">
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default MobileSearchDialog;
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
const Label = styled.label`
  background-color: #fff;
  height: 80px;
  position: relative;
`;
