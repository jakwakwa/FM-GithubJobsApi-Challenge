import React from "react";

import { Container } from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";
import headerBg from "../../../public/bg-pattern-header.svg";
import logo from "../../../public/logo.svg";
import { themeColors } from "../../styles/theme/ThemeStyled";

const Header = () => {
  return (
    <Wrapper role={"banner"}>
      <Container>
        <h1 style={{ visibility: "hidden", display: "none" }}>DevJobs</h1>
        <Link to="/">
          <Logo />
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
  padding: 42px 0px 110px 120px;
`;

const Logo = styled.div`
  background: url(${logo}) no-repeat;
  width: 115px;
  height: 32px;
`;
