import React from "react";
import { Container, Grid } from "@material-ui/core/";
import styled from "styled-components";
import WhiteSwitch from "../Switch/WhiteSwitch";
import { DayIcon, NightIcon } from "../../icons/Icons";
const Switch = ({ handler }) => {
  return (
    <Container maxWidth="lg" style={{ marginTop: "-24px" }}>
      <SwitchWrapper>
        <Grid direction="row" container alignItems="center" spacing={2}>
          <DayIcon style={{ color: "#fff" }} />
          <WhiteSwitch onChange={handler} name="themeswitcher" />
          <NightIcon style={{ color: "#fff", marginTop: "2px" }} />
        </Grid>
      </SwitchWrapper>
    </Container>
  );
};
export default Switch;

const SwitchWrapper = styled.div`
  position: relative;
  float: right;
  top: 69px;
`;
