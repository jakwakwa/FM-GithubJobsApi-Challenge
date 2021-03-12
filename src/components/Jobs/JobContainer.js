import React, { useState, useEffect } from "react";
import "regenerator-runtime/runtime";
import Jobs from "./Jobs";
import { Grid } from "@material-ui/core/";

const JobContainer = ({ location }) => {
  console.log(location.length);
  let urlNow =
    "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";
  if (location.length === 0) {
    null;
  } else {
    console.log(location);
    urlNow = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions?&location=${location}`;
  }
  console.log(urlNow);

  const [positions, setPositions] = useState([]);
  //
  //  if (location === undefined) {
  //    console.log("location in JobContainer", "not");
  //  } else {
  //    console.log(location);
  //    newLocation += location;
  //  }
  //  if (newLocation.length === 0) {
  //    console.log("new location still empty");
  //  } else {
  //    console.log(newLocation);
  //  }
  //
  //  const handleUrl = (loc) => {
  //    if (!loc.length === undefined) {
  //      url += `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions?&location=${loc}`;
  //    } else {
  //      url +=
  //        "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";
  //    }
  //
  //    console.log("url in handleUrl()", url);
  //    return url;
  //  };
  //
  //  handleUrl(newLocation);
  //
  useEffect(() => {
    const getDataFromApi = async () => {
      const response = await fetch(urlNow, {
        method: "GET",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:1234/",
          "Access-Control-Allow-Credentials": "true",
        },
      }).then((res) => res.json());
      setPositions(response);
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
