import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import SearchParams from "./SearchParams";
import { createGlobalStyle } from "styled-components";
import Jobs from "./Jobs";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const App = () => {
  const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Kumbh Sans', sans-serif;
  }

  body {
    background-color: #F4F6F8;
  }
  h1 {
    font-size: 28px;
    line-height: 34px;
    color: #19202D;
    font-weight: 700;
  }

  h2 {
    font-size: 24px;
    line-height: 29px;
    color: #19202D;
    font-weight: 700;
  }

  h3 {
    font-size: 20px;
    line-height: 24px;
    color: #19202D;
    font-weight: 700;
  }

  h4 {
    font-size: 14px;
    line-height: 18px;
    color: #19202D;
    font-weight: 700;
  }

  p, span, input {
    font-size: 16px;
    line-height: 26px;
    color: #6E8098;
    font-weight: 400;
  }
`;

  return (
    <div>
      <GlobalStyle />
      <Header />

      <Container maxWidth="lg">
        <SearchParams />
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
          spacing={3}
        >
          <Grid item>
            <Jobs
              jobtitle="Frontend Developer"
              company="Zappi"
              country="South Africa"
            />
          </Grid>
          <Grid item>
            <Jobs
              jobtitle="Frontend Developer"
              company="Zappi"
              country="South Africa"
            />
          </Grid>
          <Grid item>
            <Jobs
              jobtitle="Frontend Developer"
              company="Zappi"
              country="South Africa"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
