import React from "react";
import { Switch } from "@material-ui/core";
import styled from "styled-components";
import headerBg from "../assets/desktop/bg-pattern-header.svg";
import logo from "../assets/desktop/logo.svg";

const Header = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const Wrapper = styled.header`
    background: url(${headerBg}) no-repeat top center fixed;
    width: 100%;
    height: 162px;
    border-bottom-left-radius: 100px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    padding-top: 45px;
    padding: 45px 165px 0 165px;
  `;

  const Logo = styled.div`
    background: url(${logo}) no-repeat;
    width: 115px;
    height: 32px;
  `;

  return (
    <Wrapper>
      <Logo></Logo>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </Wrapper>
  );
};

export default Header;
