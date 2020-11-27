import React from "react";
import styled from "styled-components";
import JobLogo from "../assets/joblogo.svg";

const Jobs = ({ jobtitle, company, country }) => {
  const Wrapper = styled.div`
    position: relative;
    background-color: #fff;
    width: 350px;
    height: 228px;
    border-radius: 6px;
    padding: 30px;
  `;

  const Logo = styled.div`
    position: absolute;
    background: url(${JobLogo}) no-repeat;
    width: 50px;
    height: 50px;
    top: -32px;
  `;

  const CountryTitle = styled.h4`
    color: #5964e0;
  `;

  return (
    <Wrapper>
      <Logo></Logo>
      <div>
        <span>1d ago</span>
        <span>Part Time</span>
      </div>
      <h3>{jobtitle}</h3>
      <p>{company}</p>
      <CountryTitle>{country}</CountryTitle>
    </Wrapper>
  );
};

export default Jobs;
