/* eslint-disable no-console */
import React, { useState } from "react";
// import { navigate } from "@reach/router";
import styled from "styled-components";
import { Container } from "@material-ui/core/";
import Data from "../../../public/data/data.json";
import LinearProgress from "@material-ui/core/LinearProgress";

// Child Component
import SearchForm from "../SearchParams/SearchForm";
import JobCardContainer from "../JobCardContainer/JobCardContainer";
import { PrimaryButton } from "../../components/Buttons/Buttons";

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
    // console.log(e.target.value);
    setLocationQuery(e.target.value);
  };

  const [fullTimeInput, setFullTimeInput] = useState({
    checkedState: false,
  });

  const searchSubmitHandler = (e) => {
    e.preventDefault();

    setSearchQuery({
      description: descriptionQuery,
      location: locationQuery,
      fullTime: fullTimeInput.checkedState,
    });

    // setCounter(1);
    setStatus("loading");

    let jobsFilter = Data.filter((job) => {
      if (
        descriptionQuery !== "" &&
        locationQuery === "" &&
        !fullTimeInput.checkedState
      ) {
        return (
          job.position.toLowerCase().includes(descriptionQuery.toLowerCase()) &&
          job.contract.includes("Part Time")
        );
      } else if (
        descriptionQuery === "" &&
        locationQuery !== "" &&
        !fullTimeInput.checkedState
      ) {
        return (
          job.location.toLowerCase().includes(locationQuery.toLowerCase()) &&
          job.contract.includes("Part Time")
        );
      } else if (
        descriptionQuery !== "" &&
        locationQuery !== "" &&
        fullTimeInput.checkedState
      ) {
        return (
          job.position.toLowerCase().includes(descriptionQuery.toLowerCase()) &&
          job.location.toLowerCase().includes(locationQuery.toLowerCase()) &&
          job.contract.includes("Full Time")
        );
      } else if (
        descriptionQuery === "" &&
        locationQuery !== "" &&
        fullTimeInput.checkedState
      ) {
        return (
          job.location.toLowerCase().includes(locationQuery.toLowerCase()) &&
          job.contract.includes("Full Time")
        );
      } else if (
        descriptionQuery !== "" &&
        locationQuery === "" &&
        fullTimeInput.checkedState
      ) {
        return (
          job.position.toLowerCase().includes(descriptionQuery.toLowerCase()) &&
          job.contract.includes("Full Time")
        );
      } else if (
        descriptionQuery !== "" &&
        locationQuery !== "" &&
        !fullTimeInput.checkedState
      ) {
        return (
          job.position.toLowerCase().includes(descriptionQuery.toLowerCase()) &&
          job.location.toLowerCase().includes(locationQuery.toLowerCase()) &&
          job.contract.includes("Part Time")
        );
      } else if (
        descriptionQuery === "" &&
        locationQuery === "" &&
        fullTimeInput.checkedState
      ) {
        return job.contract.includes("Full Time");
      } else if (
        descriptionQuery === "" &&
        locationQuery === "" &&
        !fullTimeInput.checkedState
      ) {
        return job;
      }
    });

    // console.log(searchQuery);
    setData(jobsFilter);
    if (jobsFilter.length > 0) {
      setTimeout(() => {
        setStatus("resolved");
      }, 1000);
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
    // console.log(event.target.checked);
    setFullTimeInput({
      ...fullTimeInput,
      [event.target.name]: event.target.checked,
    });
  };

  const [disabled, setDisabled] = useState(false);
  React.useEffect(() => {
    // if (Data.length > 12) {
    //   setDisabled(false);
    // } else {
    //   setDisabled(false);
    // }

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
      // console.log("loading");
      // console.log(query);
      // fetch(query)
      //   .then((res) => res.json())
      //   .then((data) => {
      //     // console.log(data);
      //     setData(data);
      //     setStatus("resolved");
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     setStatus("error");
      //   });

      setStatus("loading");
    }
    setTimeout(() => {
      setStatus("resolved");
    }, 1000);
  }, [count, pageLimit]);
  return (
    <>
      <Container maxWidth="lg" style={{ marginBottom: "100px" }}>
        <SearchForm
          searchSubmitHandler={searchSubmitHandler}
          fulltimeHandler={handleFullTimeFilter}
          locationQueryHandler={locationQueryHandler}
          descriptionQueryHandler={descriptionQueryHandler}
          fulltimeInput={false}
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
