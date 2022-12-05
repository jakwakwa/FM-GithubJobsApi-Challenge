import React from "react";
import { Container, Grid } from "@material-ui/core/";
import styled from "styled-components";
import SwitchLight from "../Switch/Switch_Light";
import { DayIcon, NightIcon } from "../../icons/Icons";

const Switch = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <Container>
      <SwitchWrapper onClick={toggleTheme}>
        <Grid direction="row" container alignItems="center" spacing={3}>
          <DayIcon style={{ color: "#fff", marginTop: "5px" }} />
          <SwitchLight
            checked={isLight ? false : true}
            disableRipple
            onChange={toggleTheme}
            name="themeswitcher"
            inputProps={{ "aria-label": "Theme Switcher" }}
          />
          )
          <NightIcon style={{ color: "#fff", marginTop: "9px" }} />
        </Grid>
      </SwitchWrapper>
    </Container>
  );
};
export default Switch;

const SwitchWrapper = styled.div`
  position: relative;
  float: right;
  top: 50px;
  right: 67px;
  background: none;
  border: none;
  color: transparent;
  outline: none;

  @media (max-width: 768px) {
    top: 50px;
    right: 0px;
  }
`;
