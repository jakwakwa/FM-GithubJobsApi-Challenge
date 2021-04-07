import React, { useState, useEffect } from "react";
import "regenerator-runtime/runtime";
import Jobs from "./Jobs";
import { Grid } from "@material-ui/core/";

import { urlUpdater } from "./utils/utils";
import { Link } from "@reach/router";

const JobContainer = ({ description, location }) => {
  let urlNow = urlUpdater(location, description);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const getDataFromApi = async () => {
      try {
        const response = await fetch(urlNow, {
          method: "GET",
          mode: "cors",
        });
        const jsonData = await response.json();
        setPositions(jsonData || []);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log("Fetch error: ", error);
      }
    };
    setPositions([]);
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
          <Link to={`/details/${pos.id}`}>
            <Jobs
              typePos={pos.type}
              date={pos.created_at}
              jobtitle={pos.title}
              company={pos.company}
              country={pos.location}
              id={pos.id}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default JobContainer;
