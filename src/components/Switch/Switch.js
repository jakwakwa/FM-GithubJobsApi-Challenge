import React from "react";
import { Container, Grid } from "@material-ui/core/";
import styled from "styled-components";
import WhiteSwitch from "../Switch/WhiteSwitch";
import { DayIcon, NightIcon } from "../../icons/Icons";

const Switch = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <Container>
      <SwitchWrapper onClick={toggleTheme}>
        <Grid direction="row" container alignItems="center" spacing={3}>
          <DayIcon style={{ color: "#fff", marginTop: "5px" }} />
          <WhiteSwitch
            checked={isLight ? false : true}
            onChange={toggleTheme}
            name="themeswitcher"
          />
          )
          <NightIcon style={{ color: "#fff", marginTop: "9px" }} />
        </Grid>
      </SwitchWrapper>
    </Container>
  );
};
export default Switch;

//const Toggle = ({ theme, toggleTheme }) => {
//  const isLight = theme === "light";
//
//  return (
//    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
//      <img
//        src="https://image.flaticon.com/icons/svg/1164/1164954.svg"
//        width="224"
//        height="224"
//        alt="Sun free icon"
//        title="Sun free icon"
//      />
//      <img
//        src="https://image.flaticon.com/icons/svg/2033/2033921.svg"
//        width="224"
//        height="224"
//        alt="Moon free icon"
//        title="Moon free icon"
//      />
//    </ToggleContainer>
//  );
//};

//const SwitchWrapper = styled.div`
//  position: relative;
//  float: right;
//  top: 69px;
//`;

const SwitchWrapper = styled.button`
  position: relative;
  float: right;
  top: 52px;
  background: none;
  border: none;
  color: transparent;
  outline: none;
`;
