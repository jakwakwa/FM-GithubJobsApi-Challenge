import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./components/SearchParams/SearchParams";
import GlobalStyles from "./styles/theme/GlobalStyles";
import Layout from "./components/Layout/Layout";
import JobContainer from "./components/Jobs/JobContainer";
import { Container } from "@material-ui/core/";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Layout />
      <Container maxWidth="lg">
        <SearchParams />
        <JobContainer />
      </Container>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
