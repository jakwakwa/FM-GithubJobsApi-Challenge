import React, { useState, useEffect } from "react";
import "regenerator-runtime/runtime";
import Jobs from "./Jobs";
import { Grid } from "@material-ui/core/";

const JobContainer = ({ description, location }) => {
  let urlNow =
    "https:cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";
  if (description.length === 0 && location.length > 0) {
    urlNow = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?&location=${location}`;
  } else if (location.length === 0 && description.length > 0) {
    urlNow = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${description}`;
  } else if (description.length > 0 && location.length > 0) {
    urlNow = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}`;
  }

  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const getDataFromApi = async () => {
      try {
        const response = await fetch(urlNow, {
          method: "GET",
          mode: "cors",
        });
        const jsonData = await response.json();
        setPositions(jsonData);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log("Fetch error: ", error);
      }
    };
    getDataFromApi();
  }, [urlNow]);

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
      spacing={3}
    >
      {positions.map((pos) => (
        <Grid key={pos.id} item>
          <Jobs
            typePos={pos.type}
            date={pos.created_at}
            jobtitle={pos.title}
            company={pos.company}
            country={pos.location}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default JobContainer;
