import React from "react";
import "regenerator-runtime/runtime";
import JobCard from "../../components/JobCard/JobCard";
import { Grid } from "@material-ui/core/";

import { Link } from "react-router-dom";

const JobCardContainer = ({ pageLimit, data }) => {
  const jobs = [...data];

  // console.log(jobs);

  return (
    <>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={4}
      >
        {jobs.length > 0 ? (
          jobs.slice(0, pageLimit).map((j) => (
            <Grid key={j.id} item xs={12} sm={6} md={4}>
              <Link to={`/details/${j.id} `}>
                <JobCard job={j} jobId={j.id} />
              </Link>
            </Grid>
          ))
        ) : (
          <Grid item xs={12} sm={6} md={4}>
            <div style={{ textAlign: "center", width: "100%" }}>
              <h2>
                Sorry! We couldnt find what you were looking for. Try another
                filter query instead.
              </h2>
            </div>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default JobCardContainer;
