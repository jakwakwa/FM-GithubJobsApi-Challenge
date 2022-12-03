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

    let jobsFilter = Data.filter((job) => {
      if (
        descriptionQuery !== "" &&
        locationQuery === "" &&
        fullTimeInput.contract === "checked"
      ) {
        return (
          job.position.toLowerCase().includes(descriptionQuery.toLowerCase()) &&
          job.contract.includes("Full Time")
        );
      } else if (
        descriptionQuery === "" &&
        locationQuery !== "" &&
        fullTimeInput.contract === "checked"
      ) {
        return (
          job.location.toLowerCase().includes(locationQuery.toLowerCase()) &&
          job.contract.includes("Full Time")
        );
      } else if (
        descriptionQuery !== "" &&
        locationQuery !== "" &&
        (fullTimeInput.contract === "" || fullTimeInput.contract === "false")
      ) {
        return (
          job.position.toLowerCase().includes(descriptionQuery.toLowerCase()) &&
          job.location.toLowerCase().includes(locationQuery.toLowerCase())
        );
      } else if (
        descriptionQuery === "" &&
        locationQuery !== "" &&
        (fullTimeInput.contract === "" || fullTimeInput.contract === "false")
      ) {
        return job.location.toLowerCase().includes(locationQuery.toLowerCase());
      } else if (
        descriptionQuery !== "" &&
        locationQuery === "" &&
        (fullTimeInput.contract === "" || fullTimeInput.contract === "false")
      ) {
        return job.position
          .toLowerCase()
          .includes(descriptionQuery.toLowerCase());
      } else if (
        descriptionQuery !== "" &&
        locationQuery !== "" &&
        fullTimeInput.contract === "checked"
      ) {
        return (
          job.position.toLowerCase().includes(descriptionQuery.toLowerCase()) &&
          job.location.toLowerCase().includes(locationQuery.toLowerCase()) &&
          job.contract.includes("Full Time")
        );
      } else if (
        descriptionQuery === "" &&
        locationQuery === "" &&
        (fullTimeInput.contract === "" || fullTimeInput.contract === "false")
      ) {
        return job;
      } else if (
        descriptionQuery === "" &&
        locationQuery === "" &&
        fullTimeInput.contract === "checked"
      ) {
        return job.contract.includes("Full Time");
      }
    });

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
  }, [data, pageLimit, status, fullTimeInput]);

  if (status === "rejected") {
    return (
      <>
        <Header />
        <Container role="contentinfo">
          <SearchForm
            role="search"
            searchSubmitHandler={searchSubmitHandler}
            fulltimeHandler={handleFullTimeFilter}
            locationQueryHandler={locationQueryHandler}
            descriptionQueryHandler={descriptionQueryHandler}
            fulltimeInput={fullTimeInput.contract}
            descriptionQuery={descriptionQuery}
          />
          <div style={{ textAlign: "left", marginBottom: "50px" }}>
            no results found...please searching for something else or try again
            later
          </div>
          <div
            style={{
              textAlign: "left",
              marginTop: "0px",
              marginBottom: "50px",
            }}
          >
            <p style={{ display: "inline-block" }}>
              Searched for {"  "}
              <span style={{ fontWeight: "900" }}>
                {searchQuery.description
                  ? `"${searchQuery.description}"`
                  : `"ANY" description, company or expertise"`}{" "}
              </span>{" "}
              <span style={{ fontWeight: "900" }}>
                {" "}
                {searchQuery.location
                  ? `located in "${searchQuery.location}"`
                  : `at "ANY" location`}{" "}
              </span>
              {"  and  "}
              <span style={{ fontWeight: "900" }}>
                {searchQuery.fullTime === "" ||
                searchQuery.fullTime === "false" ||
                fullTimeInput === "false"
                  ? `"ANY"`
                  : "FT ONLY "}{" "}
              </span>
            </p>
            {""} type contacts
          </div>
        </Container>
      </>
    );
  } else {
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
          {hasSearched && status !== "loading" && (
            <div
              style={{
                textAlign: "left",
                marginTop: "-80px",
                marginBottom: "50px",
              }}
            >
              <p style={{ display: "inline-block" }}>
                Searched for {"  "}
                <span style={{ fontWeight: "900" }}>
                  {searchQuery.description
                    ? `"${searchQuery.description}"`
                    : `"ANY" description, company or expertise"`}{" "}
                </span>{" "}
                <span style={{ fontWeight: "900" }}>
                  {" "}
                  {searchQuery.location
                    ? `located in "${searchQuery.location}"`
                    : `at "ANY" location`}{" "}
                </span>
                {"  and  "}
                <span style={{ fontWeight: "900" }}>
                  {searchQuery.fullTime === "" ||
                  searchQuery.fullTime === "false" ||
                  fullTimeInput === "false"
                    ? `"ANY"`
                    : "FT ONLY "}{" "}
                </span>
              </p>
              {""} type contacts
            </div>
          )}
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
