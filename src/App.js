import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/theme/GlobalStyles";
import { Container, Grid } from "@material-ui/core/";
import WhiteSwitch from "./components/Switch/WhiteSwitch";

import styled from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme/themetest/ThemeStyled";

import Layout from "./components/Layout/Layout";
import SearchParams from "./components/SearchParams/SearchParams";
import JobDetails from "./components/Jobs/JobDetails";

import { DayIcon, NightIcon } from "./icons/Icons";

const App = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <React.StrictMode>
      <div>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <Container maxWidth="lg" style={{ marginTop: "-24px" }}>
            <SwitchWrapper>
              <Grid direction="row" container alignItems="center" spacing={2}>
                <DayIcon style={{ color: "#fff" }} />

                <WhiteSwitch onChange={themeToggler} name="themeswitcher" />

                <NightIcon style={{ color: "#fff", marginTop: "2px" }} />
              </Grid>
            </SwitchWrapper>
          </Container>

          <Layout />
          <Container maxWidth="lg">
            <Router>
              <SearchParams path="/" />

              <JobDetails
                path="/details/:id"
                location="San Francisco"
                description="blah"
              />
            </Router>
          </Container>
        </ThemeProvider>
      </div>
    </React.StrictMode>
  );
};

const SwitchWrapper = styled.div`
  position: relative;
  float: right;
  top: 69px;
`;

ReactDOM.render(<App />, document.getElementById("root"));
