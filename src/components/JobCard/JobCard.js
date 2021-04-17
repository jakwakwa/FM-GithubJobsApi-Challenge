import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import JobLogo from "../.././assets/joblogo.svg";
import Oval from "../.././assets/oval.svg";
import { formatDistance, subDays } from "date-fns";
//import moment from "moment/min/moment-with-locales";

const JobCard = ({ jobtitle, company, country, typePos, date }) => {
  const dateToFormat = formatDistance(subDays(new Date(date), 1), new Date(), {
    addSuffix: true,
  });

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
          <JobTimeDetails>
            <span>{dateToFormat}</span>
          </JobTimeDetails>
        </Grid>
        <Grid item>
          <OvalIcon></OvalIcon>
        </Grid>
        <Grid item>
          <JobTimeDetails>{typePos}</JobTimeDetails>
        </Grid>
      </Grid>
      <JobTitle>{jobtitle}</JobTitle>
      <CompanyName>{company}</CompanyName>
      <CountryTitle>{country}</CountryTitle>
    </Wrapper>
  );
};

export default JobCard;

const Wrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.jobcards};
  height: 228px;
  border-radius: 6px;
  padding: 30px;
  padding-top: 50px;
  margin-top: 50px;
  & > span {
    color: color: ${({ theme }) => theme.jobText};
  }
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
  color: ${({ theme }) => theme.jobcardTitle};
  padding-top: 10px;
  padding-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const CompanyName = styled.p`
  color: ${({ theme }) => theme.jobText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CountryTitle = styled.h4`
  color: #5964e0;
  padding-top: 40px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const JobTimeDetails = styled.div`
  color: ${({ theme }) => theme.jobText};
`;
