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
//import JobCardFallback from "../../components/JobCard/JobCardFallback";
// CONSTANTS

import { initialJobsQuery, setQueryDataForJobs } from "../../utils/jobQuery";

// 🐨 you'll want the following additional things from '../pokemon':
// fetchPokemon: the function we call to get the pokemon info
// PokemonInfoFallback: the thing we show while we're loading the pokemon info
// PokemonDataView: the stuff we use to display the pokemon info
//import { JobForm } from "../pokemon";

//function JobInfo({ jobName }) {
// 🐨 Have state for the pokemon (null)
// 🐨 use React.useEffect where the callback should be called whenever the
// pokemon name changes.
// 💰 DON'T FORGET THE DEPENDENCIES ARRAY!
// 💰 if the pokemonName is falsy (an empty string) then don't bother making the request (exit early).
// 🐨 before calling `fetchPokemon`, clear the current pokemon state by setting it to null
// 💰 Use the `fetchPokemon` function to fetch a pokemon by its name:
//   fetchPokemon('Pikachu').then(
//     pokemonData => { /* update all the state here */},
//   )
// 🐨 return the following things based on the `pokemon` state and `pokemonName` prop:
//   1. no pokemonName: 'Submit a pokemon'
//   2. pokemonName but no pokemon: <PokemonInfoFallback name={pokemonName} />
//   3. pokemon: <PokemonDataView pokemon={pokemon} />

// 💣 remove this
//  return "TODO";
//}
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
  const pageLimit = 12;
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
  const [disabled, setDisabled] = useState(false);

  if (!queried || location.pathname === "/devjob_search") {
    window.scrollTo(0, 0);
    query = initialJobsQuery(counter);
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

  useEffect(() => {
    window
      .fetch(query)
      .then((response) => response.json())
      .then(
        (responseData) => {
          setData(responseData);
          if (responseData.length > 0 && responseData.length < 12) {
            setDisabled(true);
          } else {
            setDisabled(false);
          }
          setStatus("resolved");
        },
        (error) => {
          console.log(error);
          setStatus("rejected");
        }
      );
  }, [query]);

  const handleFullTimeFilter = (event) => {
    setFullTimeInput({
      ...fullTimeInput,
      [event.target.name]: event.target.checked,
    });
  };

  function handleSearchClick(event) {
    event.preventDefault();
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
    window.scrollTo(0, 0);
    setStatus("loading");
    setCounter(counter + 1);
  }

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
