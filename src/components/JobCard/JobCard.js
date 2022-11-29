import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Oval from "../../public/assets/oval.svg";
import NoImage from "../../public/assets/no-image.png";

// import LogoDD from "../.././assets/blogr.svg";

const JobCard = ({ job }) => {
  const { company, postedAt, location, contract, position, logo } = job;
  const [logoImage, setLogoImage] = React.useState(null);

  React.useEffect(() => {
    setLogoImage(logo);
  }, [logoImage, job, logo]);

  return (
    <Wrapper>
      <Logo logod={logoImage !== null ? logoImage : null}></Logo>

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

const Logo = styled.div`
  ${(props) => {
    return props.logod
      ? `background: url(${props.logod});`
      : `background: url(${NoImage});`;
  }}
  position: absolute;

  background-size: cover;
  background-color: #000;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 15px;
  border: 2.5px solid ${({ theme }) => theme.jobLogoBorder};
  box-shadow: rgb(0 0 0 / 6%) 0px 1px 0px, rgb(0 0 0 / 15%) 0px 3px 4px;
  width: 50px;
  height: 50px;
  top: -26px;
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
