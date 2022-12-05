/* eslint-disable no-console */
import React, { useState } from "react";

import styled from "styled-components";
import { Container } from "@material-ui/core/";
import Data from "../../public/data/data.json";

import Header from "../components/Header/Header";
// Child Component
import SearchForm from "../containers/SearchParams/SearchForm";
import { ContainerPadding, Jobs } from "../components/Jobs/Jobs";
import { filteredJobs } from "../utils/utils";

import JobCardNoResult from "../components/JobCard/JobCardNoResult";
import JobCardLoading from "../components/JobCard/JobCardLoading";
import JobCardResultText from "../components/JobCard/JobCardResultText";
import { pageLimitCalc } from "./helpers/helpers";

const Home = ({ data, setData }) => {
  const [status, setStatus] = useState("loading");
  const [descriptionQuery, setDescriptionQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  const [hasSearched, setHasSearched] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [searchQuery, setSearchQuery] = useState({
    description: "",
    location: "",
    fullTime: false,
  });

  const [pageLimit, setPageLimit] = useState(12);
  const descriptionQueryHandler = (e) => {
    setDescriptionQuery(e.target.value);
  };

  const locationQueryHandler = (e) => {
    setLocationQuery(e.target.value);
  };

  const [fullTimeInput, setFullTimeInput] = useState({
    contract: "false",
  });

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    setHasSearched(true);
    setSearchQuery({
      description: descriptionQuery,
      location: locationQuery,
      fullTime: fullTimeInput.contract,
    });

    setStatus("loading");

    const jobsFilter = filteredJobs(
      data,
      descriptionQuery,
      locationQuery,
      fullTimeInput
    );

    if (jobsFilter.length > 0) {
      const setLoading = () =>
        setTimeout(async () => {
          await setStatus("loading");
          await setData(jobsFilter);
        }, 1000);

      setLoading();
    }

    if (jobsFilter.length === 0) {
      setTimeout(() => {
        setStatus("rejected");
      }, 1000);
      setLocationQuery("");
      setDescriptionQuery("");
      setFullTimeInput({
        contract: "false",
      });
    }
  };

  const [count, setCount] = useState(0);
  const handleLoader = (e) => {
    e.preventDefault();

    const counter = count + 1;
    setCount(counter);
    setPageLimit(pageLimit + 3);
  };

  const handleFullTimeFilter = (event) => {
    setFullTimeInput({
      ...fullTimeInput,
      contract: event.target.checked ? "checked" : "",
    });
  };

  const [disabled, setDisabled] = useState(false);

  React.useEffect(() => {
    if (data.length < pageLimit) {
      setDisabled(true);
    } else {
      pageLimitCalc(data, pageLimit, setDisabled);
    }
    // Mocking out API call with Status and Data
    if (status === "loading") {
      if (status !== "rejected") {
        setTimeout(() => {
          setStatus("resolved");
        }, 1000);
      }
    } else if (status === "rejected") {
      setTimeout(() => {
        setStatus("rejected");
      }, 0.1);
    }
  }, [data, pageLimit, status, fullTimeInput, setDisabled, count]);

  if (status === "loading") {
    return <JobCardLoading />;
  }

  if (status === "rejected") {
    return (
      <>
        <Header />
        <Container
          role="main"
          maxWidth="lg"
          style={{ padding: "0 87px", marginBottom: "100px" }}
        >
          <SearchForm
            role="search"
            searchSubmitHandler={searchSubmitHandler}
            fulltimeHandler={handleFullTimeFilter}
            locationQueryHandler={locationQueryHandler}
            descriptionQueryHandler={descriptionQueryHandler}
            fulltimeInput={fullTimeInput.contract}
            descriptionQuery={descriptionQuery}
          />
          <JobCardNoResult
            searchQuery={searchQuery}
            fullTimeInput={fullTimeInput}
          />
        </Container>
      </>
    );
  }

  if (status === "resolved") {
    return (
      <>
        <Header />

        <Container role="main" maxWidth="lg">
          <ContainerPadding>
            <SearchForm
              role="search"
              searchSubmitHandler={searchSubmitHandler}
              fulltimeHandler={handleFullTimeFilter}
              locationQueryHandler={locationQueryHandler}
              descriptionQueryHandler={descriptionQueryHandler}
              fulltimeInput={fullTimeInput.contract}
              descriptionQuery={descriptionQuery}
            />

            {hasSearched && status !== "loading" && (
              <JobCardResultText searchQuery={(searchQuery, fullTimeInput)} />
            )}
          </ContainerPadding>
          <Jobs
            pageLimit={pageLimit}
            status={status}
            data={data.length > 0 ? data : Data}
            handleLoader={handleLoader}
            disabled={disabled}
          />
        </Container>
      </>
    );
  }
};

export default Home;

export const LoadMoreJobs = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  & .Mui-disabled {
    background-color: rgba(157, 174, 194, 0.5);
    color: #fff;
    cursor: not-allowed !important;
    pointer-events: auto !important;
  }
`;
