import React from "react";

import styled from "styled-components";

import { PrimaryButton } from "../Buttons/Buttons";

const LoadMoreButton = ({ handleLoader }) => {
  return (
    <form onSubmit={handleLoader}>
      <LoadMoreJobs>
        <div>
          <PrimaryButton type="Submit" variant="contained" value="Submit">
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
`;
