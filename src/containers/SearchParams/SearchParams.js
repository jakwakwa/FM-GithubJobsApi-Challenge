/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import { Container } from "@material-ui/core/";

import LinearProgress from "@material-ui/core/LinearProgress";

// Child Component
import SearchForm from "../SearchParams/SearchForm";
import JobCardContainer from "../JobCardContainer/JobCardContainer";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import { initialJobsQuery, setQueryDataForJobs } from "../../utils/jobQuery";

function Jobs({ pageLimit, status, data, handleLoader, disabled }) {
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
      <div>
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
      </div>
    );
  } else {
    return null;
  }
}
const SearchParams = () => {
  const initialCountVal = 1;
  const pageLimitInit = 12;
  let query;

  const [counter, setCounter] = useState(initialCountVal);
  const [status, setStatus] = useState("loading");
  const [descriptionQuery, setDescriptionQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [queried, setQueried] = useState(false);
  const [data, setData] = useState([]);
  const [fullTimeInput, setFullTimeInput] = useState({
    checkedState: false,
  });
  const [pageLimit, setPageLimit] = useState(pageLimitInit);
  const [disabled, setDisabled] = useState(false);

  if (!queried && location.pathname === "/devjob_search") {
    //setQueried(false);
    if (counter > 1) {
      setStatus("loading");
      setCounter(initialCountVal);
    }
    query = initialJobsQuery(counter);
  } else if (!queried && location.pathname === `/next_page`) {
    query = initialJobsQuery(counter);
  } else if (queried && location.pathname === "/devjob_search") {
    setStatus("loading");
    setCounter(initialCountVal);
    setQueried(false);
    setPageLimit(pageLimitInit);
  } else if (queried && counter === 1) {
    query = setQueryDataForJobs(
      descriptionQuery,
      locationQuery,
      fullTimeInput,
      counter
    );
  } else if (queried && counter > 1) {
    query = setQueryDataForJobs(
      descriptionQuery,
      locationQuery,
      fullTimeInput,
      counter
    );
  }

  const handleFullTimeFilter = (event) => {
    setFullTimeInput({
      ...fullTimeInput,
      [event.target.name]: event.target.checked,
    });
  };

  function handleSearchClick(event) {
    event.preventDefault();
    setStatus("loading");
    setCounter(initialCountVal);
    setLocationQuery(event.target.elements.location.value);
    setDescriptionQuery(event.target.elements.description.value);
    navigate(
      `${event.target.elements.location.value}${event.target.elements.description.value}`
    );

    event.target.elements.location.value = "";
    event.target.elements.description.value = "";

    setFullTimeInput({
      ...fullTimeInput,
      [event.target.name]: event.target.checked,
    });

    setQueried(true);
  }

  function handleLoader(event) {
    event.preventDefault();
    setPageLimit(pageLimit + 12);
    if (pageLimit > 36 && data.length === 50) {
      setCounter(counter + 1);
      setPageLimit(pageLimitInit);
      setStatus("loading");
      navigate(`next_page`);
      //  window.scrollTo(0, 0);
    } else if (pageLimit === 36 && data.length !== 50) {
      setDisabled(true);
    }
  }
  useEffect(() => {
    window
      .fetch(query)
      .then((response) => response.json())
      .then(
        (responseData) => {
          setData(responseData);
          if (responseData.length > 12) {
            setDisabled(false);
          } else {
            setDisabled(true);
          }
          setStatus("resolved");
        },
        (error) => {
          console.log(error);
          setStatus("rejected");
        }
      );
  }, [query, counter]);
  return (
    <>
      <Container maxWidth="lg" style={{ marginBottom: "100px" }}>
        <SearchForm
          queryHandler={handleSearchClick}
          fulltimeHandler={handleFullTimeFilter}
          fulltimeInput={fullTimeInput.checkedState}
        />
        <Jobs
          pageLimit={pageLimit}
          status={status}
          data={data}
          handleLoader={handleLoader}
          disabled={disabled}
        />
      </Container>
    </>
  );
};

export default SearchParams;

const LoadMoreJobs = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  & .Mui-disabled {
    background-color: #2d2d2d;
    color: #4a4a4a;
    pointer-events: auto !important;
    cursor: not-allowed !important;
    &:hover {
      background-color: #2d2d2d;
      color: #4a4a4a;
    }
  }
`;
