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
  top: 52px;
  background: none;
  border: none;
  color: transparent;
  outline: none;
`;
