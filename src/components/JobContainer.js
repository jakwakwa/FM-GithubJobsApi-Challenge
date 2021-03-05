import React from "react";
import Jobs from "../Jobs";
import { Grid } from "@material-ui/core/";

const JobContainer = () => {
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
      spacing={3}
    >
      <Grid item>
        <Jobs
          jobtitle="Frontend Developer"
          company="Zappi"
          country="South Africa"
        />
      </Grid>
      <Grid item>
        <Jobs
          jobtitle="Frontend Developer"
          company="Zappi"
          country="South Africa"
        />
      </Grid>
      <Grid item>
        <Jobs
          jobtitle="Frontend Developer"
          company="Zappi"
          country="South Africa"
        />
      </Grid>
    </Grid>
  );
};

export default JobContainer;
