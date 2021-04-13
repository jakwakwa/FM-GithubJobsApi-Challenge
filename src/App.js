import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/theme/GlobalStyles";
import Switch from "./components/Switch/Switch";
import { lightTheme, darkTheme } from "./styles/theme/themetest/ThemeStyled";

import Layout from "./components/Layout/Layout";
import SearchParams from "./components/SearchParams/SearchParams";
import JobDetails from "./pages/JobDetails";

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
          <Switch handler={themeToggler} />
          <Layout />
          <Router>
            <SearchParams path="/" />
            <JobDetails path="/details/:id" />
          </Router>
        </ThemeProvider>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
