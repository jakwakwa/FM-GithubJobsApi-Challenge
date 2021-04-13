import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/theme/GlobalStyles";
import Switch from "./components/Switch/Switch";
import { lightTheme, darkTheme } from "./styles/theme/ThemeStyled";

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
      <Switch handler={themeToggler} />
      <Layout />
      <div>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
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
