import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import JobLogo from "../../../assets/joblogo.svg";
import Oval from "../../../assets/oval.svg";

const Jobs = ({ jobtitle, company, country }) => {
  return (
    <Wrapper>
      <Logo></Logo>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-end"
      >
        <Grid item>
          <span>1d ago</span>
        </Grid>
        <Grid item>
          <OvalIcon></OvalIcon>
        </Grid>
        <Grid item>
          <span>Part Time</span>
        </Grid>
      </Grid>
      <JobTitle>{jobtitle}</JobTitle>
      <p>{company}</p>
      <CountryTitle>{country}</CountryTitle>
    </Wrapper>
  );
};

export default Jobs;

const Wrapper = styled.div`
  position: relative;
  background-color: #fff;
  width: 350px;
  height: 228px;
  border-radius: 6px;
  padding: 30px;
  padding-top: 50px;
`;

const Logo = styled.div`
  position: absolute;
  background: url(${JobLogo}) no-repeat;
  width: 50px;
  height: 50px;
  top: -32px;
`;

const OvalIcon = styled.div`
  position: relative;
  background: url(${Oval}) no-repeat;
  width: 4px;
  height: 4px;
  bottom: 9px;
  margin-left: 10px;
  margin-right: 10px;
`;

const JobTitle = styled.h3`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const CountryTitle = styled.h4`
  color: #5964e0;
  padding-top: 40px;
`;
