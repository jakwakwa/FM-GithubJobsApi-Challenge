import React from "react";

const Jobs = ({ name, animal, breed }) => {
  return (
    <div className="job">
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
};

export default Jobs;
