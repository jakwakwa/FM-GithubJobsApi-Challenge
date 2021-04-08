import React, { useState, useEffect } from "react";
import "regenerator-runtime/runtime";
import styled from "styled-components";
import Jobs from "./Jobs";
import { Grid } from "@material-ui/core/";

import { PrimaryButton } from "../Buttons/Buttons";

import { urlUpdater } from "./utils/utils";
import { Link } from "@reach/router";

const JobContainer = ({ description, location, fullTime, initialCounter }) => {
  let urlNow = urlUpdater(location, description, fullTime);
  const [positions, setPositions] = useState([]);
  let [counter, setCounter] = useState(initialCounter);

  const handleSubmit = () => {
    event.preventDefault();
    setCounter(counter + 1);
    const loadmorejobsUrl = `${urlNow}?&page=${counter}`;

    const getDataFromApi = async () => {
      try {
        const response = await fetch(loadmorejobsUrl, {
          method: "GET",
          mode: "cors",
        });
        const jsonData = await response.json();
        setPositions(jsonData || []);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log("Fetch error: ", error);
      }
    };
    setPositions([]);
    getDataFromApi();
  };

  useEffect(() => {
    const getDataFromApi = async () => {
      try {
        const response = await fetch(urlNow, {
          method: "GET",
          mode: "cors",
        });
        const jsonData = await response.json();
        setPositions(jsonData || []);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log("Fetch error: ", error);
      }
    };
    setPositions([]);
    getDataFromApi();
  }, [urlNow]);

  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        spacing={3}
      >
        {positions.map((pos) => (
          <Grid key={pos.id} item>
            <Link to={`/details/${pos.id}`}>
              <Jobs
                typePos={pos.type}
                date={pos.created_at}
                jobtitle={pos.title}
                company={pos.company}
                country={pos.location}
                id={pos.id}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
      <div style={{ height: "140px" }}>
        {description.length > 0 || location.length > 0 ? null : (
          <form onSubmit={handleSubmit}>
            <LoadMoreJobs>
              <PrimaryButton type="Submit" variant="contained" value="Submit">
                Load More
              </PrimaryButton>
            </LoadMoreJobs>
          </form>
        )}
      </div>
    </>
  );
};

export default JobContainer;

const LoadMoreJobs = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;
