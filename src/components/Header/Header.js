import React from "react";
import { Link } from "@reach/router";

import { Container } from "@material-ui/core";

import styled from "styled-components";
import headerBg from "../../../assets/desktop/bg-pattern-header.svg";
import logo from "../../../assets/desktop/logo.svg";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <Logo></Logo>
        </Link>
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  background: url(${headerBg}) no-repeat top center;
  width: 100%;
  height: 162px;
  border-bottom-left-radius: 100px;
  overflow: hidden;

  padding-top: 45px;
  padding: 45px 0px 0 0px;
`;

const Logo = styled.div`
  background: url(${logo}) no-repeat;
  width: 115px;
  height: 32px;
`;
