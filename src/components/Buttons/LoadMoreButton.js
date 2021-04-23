import React from "react";

import styled from "styled-components";

import { PrimaryButton } from "../Buttons/Buttons";

const LoadMoreButton = ({ handleLoader, disabled }) => {
  return (
    <form onSubmit={handleLoader}>
      <LoadMoreJobs>
        <div>
          <PrimaryButton
            type="Submit"
            variant="contained"
            value="Submit"
            disabled={disabled}
          >
            Load More
          </PrimaryButton>
        </div>
      </LoadMoreJobs>
    </form>
  );
};

export default LoadMoreButton;

const LoadMoreJobs = styled.div`
  margin: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  & .Mui-disabled {
    background-color: #2d2d2d;
    color: #4a4a4a;
    pointer-events: auto !important;
    cursor: not-allowed !important;
    &:hover {
      background-color: #2d2d2d;
      color: #4a4a4a;
    }
  }
`;
