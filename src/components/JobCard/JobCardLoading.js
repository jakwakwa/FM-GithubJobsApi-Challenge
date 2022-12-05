import React from "react";
import Header from "../Header/Header";
import { Container } from "@material-ui/core";

import { JobDetaiSkeletonSearch, JobCardSkeletons } from "./JobCardSkeletons";
function JobCardLoading() {
  return (
    <>
      <Header />
      <Container
        role="main"
        maxWidth="lg"
        style={{ padding: "0 87px", marginBottom: "100px" }}
      >
        <JobDetaiSkeletonSearch />
        <div>
          <div
            style={{
              marginTop: "80px",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
            }}
          >
            <JobCardSkeletons />
            <JobCardSkeletons />
            <JobCardSkeletons />
            <JobCardSkeletons />
            <JobCardSkeletons />
            <JobCardSkeletons />
            <JobCardSkeletons />
            <JobCardSkeletons />
            <JobCardSkeletons />
          </div>
        </div>
      </Container>
    </>
  );
}

export default JobCardLoading;
