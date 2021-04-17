import React from "react";
import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";

// TODO: add id from parent
const JobCardSkeletons = ({ variant, widthPerc, height }) => {
  return (
    <Wrapper style={{ width: widthPerc }}>
      <Skeleton variant={variant} width={widthPerc} height={height} />
    </Wrapper>
  );
};

export default JobCardSkeletons;

const Wrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.jobcards};
  height: 228px;
  width: 100%;
  border-radius: 6px;
  padding: 30px;
  padding-top: 50px;
  margin-bottom: 32px;
`;
