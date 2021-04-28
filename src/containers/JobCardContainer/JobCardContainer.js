import React from "react";
import "regenerator-runtime/runtime";
import JobCard from "../../components/JobCard/JobCard";
//import LoadMoreButton from "../../components/Buttons/LoadMoreButton";
import { Grid } from "@material-ui/core/";
//import LinearProgress from "@material-ui/core/LinearProgress";
//import JobCardSkeletons from "../../components/JobCard/JobCardSkeletons";
//import { urlUpdater } from "./utils/utils";
import { Link } from "@reach/router";

//const ErrorMessage = () => {
//  return (
//    <div>
//      Sorry! We couldnt find what you were looking for. Try another filter query
//      instead.
//    </div>
//  );
//};
//
//const LoadButtonState = () => {
//  if (positions.length < 48) {
//    if (positions.length > 12) {
//      if (limit > positions.length) {
//        return <LoadMoreButton handleLoader={null} disabled={true} />;
//      } else {
//        return <LoadMoreButton handleLoader={currentPageHandler} />;
//      }
//    } else if (positions.length < 12) {
//      return <LoadMoreButton handleLoader={null} disabled={true} />;
//    }
//  } else if (positions.length > 47) {
//    if (limit > positions.length) {
//      return <LoadMoreButton handleLoader={nextPageHandler} />;
//    } else {
//      return <LoadMoreButton handleLoader={currentPageHandler} />;
//    }
//  }
//};
//
//const LoadDer = () => {
//  return (
//    <>
//      <LinearProgress
//        color="secondary"
//        style={{
//          position: "fixed",
//          top: "0px",
//          left: "0px",
//          zIndex: "200",
//          width: "100vw",
//        }}
//      />
//      <Grid item xs={12} sm={6} md={4}>
//        <JobCardSkeletons />
//      </Grid>
//      <Grid item xs={12} sm={6} md={4}>
//        <JobCardSkeletons />
//      </Grid>
//      <Grid item xs={12} sm={6} md={4}>
//        <JobCardSkeletons />
//      </Grid>
//    </>
//  );
//};

const JobCardContainer = ({ limit, data }) => {
  const jobs = [...data];

  return (
    <>
      {/*{positions.length === 0 ? (
        <>{error ? <ErrorMessage /> : <LoadDer />}</>
      ) : (*/}
      {/*<>*/}
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={4}
      >
        {jobs.slice(0, limit).map((job) => (
          <Grid key={job.id} item xs={12} sm={6} md={4}>
            <Link to={`/details/${job.id}`}>
              <JobCard job={job} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
    //  )}
    //  {positions.length > 0 ? <LoadButtonState /> : null}
  );
};

export default JobCardContainer;
