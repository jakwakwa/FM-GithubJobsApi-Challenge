import React from "react";
import Header from "../Header/Header";
import { Container } from "@material-ui/core";
import { ContainerPadding } from "../Jobs/Jobs";

import { JobDetaiSkeletonSearch, JobCardSkeletons } from "./JobCardSkeletons";
function JobCardLoading() {
  return (
    <>
      <Header />
      <Container role="main" maxWidth="lg" style={{ marginBottom: "100px" }}>
        <ContainerPadding>
          <JobDetaiSkeletonSearch />
        </ContainerPadding>
        <div>
          <ContainerPadding>
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
          </ContainerPadding>
        </div>
      </Container>
    </>
  );
}

export default JobCardLoading;
