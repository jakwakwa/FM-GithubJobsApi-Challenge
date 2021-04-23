import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/theme/GlobalStyles";
import Switch from "./components/Switch/Switch";
import { lightTheme, darkTheme } from "./styles/theme/ThemeStyled";

import Layout from "./components/Layout/Layout";
import SearchParams from "./containers/SearchParams/SearchParams";
import JobDetails from "./pages/JobDetails";

const useDarkMode = () => {
  const [theme, setTheme] = useState("light");
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };
  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  useEffect(() => {
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? setMode("dark")
      : setMode("light");
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  let [counter, setCounter] = useState(1);

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <React.StrictMode>
      <Switch theme={theme} toggleTheme={toggleTheme} />
      <Layout handleRender={setCounter} />
      <div>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <Router>
            <SearchParams
              path="/"
              counterFromParent={counter}
              handleChange={setCounter}
            />
            <JobDetails path="/details/:id" />
          </Router>
        </ThemeProvider>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
