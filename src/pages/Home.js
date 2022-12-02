/* eslint-disable no-console */
import React, { useState } from "react";

import styled from "styled-components";
import { Container } from "@material-ui/core/";
import Data from "../../public/data/data.json";

import Header from "../components/Header/Header";
// Child Component
import SearchForm from "../containers/SearchParams/SearchForm";
import { Jobs } from "../components/Jobs/Jobs";

const Home = () => {
  const [status, setStatus] = useState("loading");
  const [descriptionQuery, setDescriptionQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [pageLimit, setPageLimit] = useState(6);
  const descriptionQueryHandler = (e) => {
    setDescriptionQuery(e.target.value);
  };

  const locationQueryHandler = (e) => {
    setLocationQuery(e.target.value);
  };

  const [fullTimeInput, setFullTimeInput] = useState({
    contract: false,
  });

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    console.log("searchQuery", searchQuery);
    setSearchQuery({
      description: descriptionQuery,
      location: locationQuery,
      fullTime: fullTimeInput.contract,
    });

    setStatus("loading");

    let jobsFilter = Data.filter((job) => {
      if (
        descriptionQuery !== "" &&
        locationQuery === "" &&
        !fullTimeInput.contract
      ) {
        return (
          job.position.toLowerCase().includes(descriptionQuery.toLowerCase()) &&
          job.contract.includes("Part Time")
        );
      } else if (
        descriptionQuery === "" &&
        locationQuery !== "" &&
        !fullTimeInput.contract
      ) {
        return (
          job.location.toLowerCase().includes(locationQuery.toLowerCase()) &&
          job.contract.includes("Part Time")
        );
      } else if (
        descriptionQuery !== "" &&
        locationQuery !== "" &&
        fullTimeInput.contract
      ) {
        return (
          job.position.toLowerCase().includes(descriptionQuery.toLowerCase()) &&
          job.location.toLowerCase().includes(locationQuery.toLowerCase()) &&
          job.contract.includes("Full Time")
        );
      } else if (
        descriptionQuery === "" &&
        locationQuery !== "" &&
        fullTimeInput.contract
      ) {
        return (
          job.location.toLowerCase().includes(locationQuery.toLowerCase()) &&
          job.contract.includes("Full Time")
        );
      } else if (
        descriptionQuery !== "" &&
        locationQuery === "" &&
        fullTimeInput.contract
      ) {
        return (
          job.position.toLowerCase().includes(descriptionQuery.toLowerCase()) &&
          job.contract.includes("Full Time")
        );
      } else if (
        descriptionQuery !== "" &&
        locationQuery !== "" &&
        !fullTimeInput.contract
      ) {
        return (
          job.position.toLowerCase().includes(descriptionQuery.toLowerCase()) &&
          job.location.toLowerCase().includes(locationQuery.toLowerCase()) &&
          job.contract.includes("Part Time")
        );
      } else if (
        descriptionQuery === "" &&
        locationQuery === "" &&
        fullTimeInput.contract
      ) {
        return job.contract.includes("Full Time");
      } else if (
        descriptionQuery === "" &&
        locationQuery === "" &&
        !fullTimeInput.contract
      ) {
        return job;
      }
    });

    setData(jobsFilter);
    if (jobsFilter.length > 0) {
      setTimeout(() => {
        setStatus("resolved");
      }, 1000);

      // navigate(
      //   `/search?description=${descriptionQuery}&location=${locationQuery}&full_time=${fullTimeInput.contract}`
      // );
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

    console.log("fti", fullTimeInput);
  };

  const [disabled, setDisabled] = useState(false);
  React.useEffect(() => {
    if (data.length > 0) {
      if (data.length < pageLimit) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    } else {
      if (Data.length < pageLimit) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }

    if (status !== "resolved") {
      setStatus("loading");
    }
    setTimeout(() => {
      setStatus("resolved");
    }, 1000);
  }, [data, pageLimit, status]);
  return (
    <>
      <Header />
      <Container maxWidth="lg" style={{ marginBottom: "100px" }}>
        <SearchForm
          searchSubmitHandler={searchSubmitHandler}
          fulltimeHandler={handleFullTimeFilter}
          locationQueryHandler={locationQueryHandler}
          descriptionQueryHandler={descriptionQueryHandler}
          fulltimeInput={fullTimeInput.contract}
          descriptionQuery={descriptionQuery}
        />
        <Jobs
          pageLimit={pageLimit}
          status={status}
          // setStatus={setStatus}
          data={data.length > 0 ? data : Data}
          handleLoader={handleLoader}
          disabled={disabled}
        />
      </Container>
    </>
  );
};

export default Home;

export const LoadMoreJobs = styled.div`
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
