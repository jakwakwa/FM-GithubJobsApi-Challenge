import React from "react";

const Jobs = ({ name, title, description }) => {
  return (
    <div className="job">
      <h1>{name}</h1>
      <h2>{title}</h2>
      <h2>{description}</h2>
    </div>
  );
};

export default Jobs;
