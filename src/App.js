import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import GlobalStyles from "./theme/GlobalStyles";
import Layout from "./components/Layout/Layout";
import JobContainer from "./components/JobContainer";
import { Container } from "@material-ui/core/";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      {/* <SEO /> 
       See how I can add index.js without index.html
      */}
      <Layout />
      <Container maxWidth="lg">
        <SearchParams />
        <JobContainer />
      </Container>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
