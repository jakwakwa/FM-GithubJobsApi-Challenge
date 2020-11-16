import React from "react";
import ReactDOM from "react-dom";
import Jobs from "./Jobs";

const App = () => {
  return (
    <div>
      <h1>Github Jobs Api</h1>
      <Jobs name="J Kotzee" title="FE Dev" description="na" />
      <Jobs name="Pepper" title="BE Dev" description="na" />
      <Jobs name="Doink" title="Fullstack Dev" description="na" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
