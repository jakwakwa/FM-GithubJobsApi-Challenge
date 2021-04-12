import React, { useState, useEffect } from "react";
import "regenerator-runtime/runtime";
import Jobs from "./Jobs";
import { Grid } from "@material-ui/core/";
import LinearProgress from "@material-ui/core/LinearProgress";
import JobSkeletons from "./JobSkeletons";
import { urlUpdater } from "./utils/utils";
import { Link } from "@reach/router";

const JobContainer = ({ description, location, fullTime, counter }) => {
  let urlNow = urlUpdater(location, description, fullTime);
  const [positions, setPositions] = useState([]);

  const loadmorejobsUrl = `${urlNow}?&page=${counter}`;

  useEffect(() => {
    const getDataFromApi = async () => {
      try {
        const response = await fetch(counter > 0 ? loadmorejobsUrl : urlNow, {
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
  }, [urlNow, loadmorejobsUrl, counter]);

  return (
    <>
      {positions.length === 0 ? (
        <LinearProgress
          color="secondary"
          style={{
            position: "fixed",
            top: "0px",
            left: "0px",
            zIndex: "200",
            width: "100vw",
          }}
        />
      ) : null}
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        spacing={3}
      >
        {positions.length === 0 ? (
          <>
            <Grid item style={{ width: "350px" }}>
              <JobSkeletons />
            </Grid>
            <Grid item style={{ width: "350px" }}>
              <JobSkeletons />
            </Grid>
            <Grid item style={{ width: "350px" }}>
              <JobSkeletons />
            </Grid>
          </>
        ) : null}
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
      <div style={{ height: "140px" }}>
        {/*original solution*/}
        {/*{description.length > 0 || location.length > 0 ? null : (
          <form onSubmit={handleSubmit}>
            <LoadMoreJobs>
              <PrimaryButton type="Submit" variant="contained" value="Submit">
                Load More
              </PrimaryButton>
            </LoadMoreJobs>
          </form>
        )}*/}
      </div>
    </>
  );
};

export default JobContainer;
