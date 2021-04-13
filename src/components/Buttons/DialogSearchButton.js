import React from "react";

import styled from "styled-components";

import { PrimaryButton } from "../Buttons/Buttons";

const DialogSearchButton = ({ clickHandle, buttonText }) => {
  return (
    <ApplyNowButtonWrapper>
      <PrimaryButton onClick={clickHandle} variant="contained">
        {buttonText}
      </PrimaryButton>
    </ApplyNowButtonWrapper>
  );
};
export default DialogSearchButton;

const ApplyNowButtonWrapper = styled.div`
  /*width: 100%;*/
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
