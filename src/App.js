import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

//import { ThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/theme/GlobalStyles";

import { darkTheme } from "./styles/theme/themetest/ThemeStyled";
//import { lightTheme } from "./styles/theme/themetest/ThemeStyled";

import SearchParams from "./components/SearchParams/SearchParams";
import Layout from "./components/Layout/Layout";
import { Container } from "@material-ui/core/";
import JobDetails from "./components/Jobs/JobDetails";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <ThemeProvider theme={darkTheme}>
          <GlobalStyles />
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

ReactDOM.render(<App />, document.getElementById("root"));
