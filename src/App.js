import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import SearchParams from "./SearchParams";
import { createGlobalStyle } from "styled-components";

const App = () => {
  const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Kumbh Sans', sans-serif;
  }
`;

  return (
    <div>
      <GlobalStyle />
      <Header />
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
