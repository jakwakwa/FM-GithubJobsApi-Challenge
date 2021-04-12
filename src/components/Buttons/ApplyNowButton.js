import React from "react";

import styled from "styled-components";

import { PrimaryButton } from "../Buttons/Buttons";

const DetailsButton = () => {
  return (
    <ApplyNowButtonWrapper>
      <PrimaryButton variant="contained">Apply Now</PrimaryButton>
    </ApplyNowButtonWrapper>
  );
};
export default DetailsButton;

const ApplyNowButtonWrapper = styled.div`
  /*width: 100%;*/
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
