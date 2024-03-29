import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Oval from "../../../public/oval.svg";

const JobCard = ({ job }) => {
  const { company, postedAt, location, contract, position, logo } = job;

  return (
    <Wrapper>
      <LogoWrapper>
        <LogoInnerWrapper>
          <Logo src={logo}></Logo>
        </LogoInnerWrapper>
      </LogoWrapper>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-end"
      >
        <Grid item>
          <JobTimeDetails>
            <span>{postedAt}</span>
          </JobTimeDetails>
        </Grid>
        <Grid item>
          <OvalIcon></OvalIcon>
        </Grid>
        <Grid item>
          <JobTimeDetails>{contract}</JobTimeDetails>
        </Grid>
      </Grid>
      <JobTitle>{position}</JobTitle>
      <CompanyName>{company}</CompanyName>
      <CountryTitle>{location}</CountryTitle>
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
  padding-top: 53px;
  margin-bottom: 33px;
  & > span {
    color: color: ${({ theme }) => theme.jobText};
  }
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: -26px;
  margin: auto;
  width: 50px;
  border: 2.5px solid ${({ theme }) => theme.jobLogoBorder};
  height: 50px;
  border-radius: 15px;
  padding: 5px;
  box-shadow: rgb(0 0 0 / 6%) 0px 1px 0px, rgb(0 0 0 / 15%) 0px 3px 4px;
  background-color: ${({ theme }) => theme.jobLogoBg};
`;

const LogoInnerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const Logo = styled.img`
  position: absolute;
  width: 100%;
`;

const OvalIcon = styled.div`
  position: relative;
  background: url(${Oval}) no-repeat;
  width: 4px;
  height: 4px;
  bottom: 7px;
  margin-left: 10px;
  margin-right: 10px;
`;

const JobTitle = styled.h3`
  color: ${({ theme }) => theme.jobcardTitle};
  padding-top: 14px;
  padding-bottom: 7px;
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
  padding-top: 36px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const JobTimeDetails = styled.div`
  margin-top: -4px;
  color: ${({ theme }) => theme.jobText};
`;
