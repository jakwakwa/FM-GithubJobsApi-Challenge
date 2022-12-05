import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import JobCardContainer from "../../containers/JobCardContainer/JobCardContainer";
import { PrimaryButton } from "../Buttons/Buttons";
import { LoadMoreJobs } from "../../pages/Home";
import styled from "styled-components";

export function Jobs({ pageLimit, status, data, handleLoader, disabled }) {
  if (status === "loading") {
    return (
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
    );
  } else if (status === "rejected") {
    return (
      <div role="alert">
        There was an error: <pre>error</pre>
      </div>
    );
  } else if (status === "resolved") {
    return (
      <ContainerPadding>
        <JobCardContainer pageLimit={pageLimit} data={data} />
        <form onSubmit={handleLoader}>
          <LoadMoreJobs>
            <div>
              <PrimaryButton
                type="Submit"
                variant="contained"
                value="Submit"
                disabled={disabled}
              >
                Load More
              </PrimaryButton>
            </div>
          </LoadMoreJobs>
        </form>
      </ContainerPadding>
    );
  } else {
    return null;
  }
}

export const ContainerPadding = styled.div`
  /* marginbottom: 100px; */

  @media (max-width: 768px) {
    padding: 0 0px;
  }
`;
