import React from "react";
import { Link } from "@reach/router";
import { Container } from "@material-ui/core";
import styled from "styled-components";

import headerBg from "../../../public/bg-pattern-header.svg";
import logo from "../../../public/logo.svg";
import { themeColors } from "../../styles/theme/ThemeStyled";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Link to="/devjob_search">
          <span style={{ visibility: "hidden", display: "none" }}>DevJobs</span>
          <Logo></Logo>
        </Link>
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  background: url(${headerBg}) no-repeat top center;
  background-color: ${themeColors.primary.violet};
  width: 100%;
  height: 162px;
  border-bottom-left-radius: 100px;
  padding-top: 45px;
  padding: 45px 0px 0 0px;
`;

const Logo = styled.div`
  background: url(${logo}) no-repeat;
  width: 115px;
  height: 32px;
`;
