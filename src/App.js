import React, { useState, useEffect } from "react";

import { createRoot } from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/theme/GlobalStyles";
import Switch from "./components/Switch/Switch";
import { lightTheme, darkTheme } from "./styles/theme/ThemeStyled";
import Data from "../public/data/data.json";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";

const useDarkMode = () => {
  const [theme, setTheme] = useState("light");
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode) => {
    window.scrollTo(0, 0);
    window.localStorage.setItem("theme", mode);
    window.localStorage.removeItem("jobDetail");
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
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const [data, setData] = useState([...Data]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home data={data} setData={setData} />} />,
        <Route
          path="/details/:id"
          element={<JobDetails data={data} setData={setData} />}
        />
      </Route>
    )
  );
  return (
    <React.StrictMode>
      <Switch theme={theme} toggleTheme={toggleTheme} />
      <div>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <RouterProvider router={router} />
        </ThemeProvider>
      </div>
    </React.StrictMode>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
