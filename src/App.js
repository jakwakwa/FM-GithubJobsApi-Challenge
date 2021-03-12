import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./components/SearchParams/SearchParams";
import GlobalStyles from "./styles/theme/GlobalStyles";
import Layout from "./components/Layout/Layout";
import { Container } from "@material-ui/core/";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Layout />
      <Container maxWidth="lg">
        <SearchParams />
      </Container>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
