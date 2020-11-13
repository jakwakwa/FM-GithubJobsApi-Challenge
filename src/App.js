import React from "react";
import ReactDOM from "react-dom";
import Jobs from "./Jobs";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Jobs name="Luna" animal="dog" breed="Havanese" />
      <Jobs name="Pepper" animal="bird" breed="Cockatiel" />
      <Jobs name="Doink" animal="cat" breed="Mix" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
