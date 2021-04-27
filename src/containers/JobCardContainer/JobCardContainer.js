import React, { useState, useEffect } from "react";
import "regenerator-runtime/runtime";
import JobCard from "../../components/JobCard/JobCard";
import LoadMoreButton from "../../components/Buttons/LoadMoreButton";
import { Grid } from "@material-ui/core/";
import LinearProgress from "@material-ui/core/LinearProgress";
import JobCardSkeletons from "../../components/JobCard/JobCardSkeletons";
import { urlUpdater } from "./utils/utils";
import { Link } from "@reach/router";

const JobCardContainer = ({
  description,
  location,
  fullTime,
  counter,
  limit,
  nextPageHandler,
  currentPageHandler,
  descriptionInit,
}) => {
  const [positions, setPositions] = useState([]);

  let loadmorejobsUrl;

  let urlNow = urlUpdater(
    location,
    description,
    descriptionInit,
    fullTime,
    counter
  );

  if (descriptionInit === "") {
    loadmorejobsUrl = `${urlNow}?&page=${counter}`;
  } else {
    loadmorejobsUrl = `${urlNow}&page=${counter}`;
  }

  const LoadButtonState = () => {
    if (positions.length < 48) {
      if (positions.length > 12) {
        if (limit > positions.length) {
          return <LoadMoreButton handleLoader={null} disabled={true} />;
        } else {
          return <LoadMoreButton handleLoader={currentPageHandler} />;
        }
      } else if (positions.length < 12) {
        return <LoadMoreButton handleLoader={null} disabled={true} />;
      }
    } else if (positions.length > 47) {
      if (limit > positions.length) {
        return <LoadMoreButton handleLoader={nextPageHandler} />;
      } else {
        return <LoadMoreButton handleLoader={currentPageHandler} />;
      }
    }
  };

  useEffect(() => {
    const getDataFromApi = async () => {
      try {
        const response = await fetch(counter > 1 ? loadmorejobsUrl : urlNow, {
          method: "GET",
          mode: "cors",
        });
        const jsonData = await response.json();

        setPositions(jsonData || []);
        //locationProp.navigate(`/${location}/${counter}`);
      } catch (error) {
        // eslint-disable-next-line no-console

        alert("Fetch error: ?", error);
      }
    };
    setPositions([]);
    getDataFromApi();
  }, [urlNow, loadmorejobsUrl, counter]);

  return (
    <>
      {positions.length === 0 ? (
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
      ) : null}
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={4}
      >
        {positions.length === 0 ? (
          <>
            <Grid item xs={12} sm={6} md={4}>
              <JobCardSkeletons />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <JobCardSkeletons />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <JobCardSkeletons />
            </Grid>
          </>
        ) : null}

        {positions.slice(0, limit).map((pos) => (
          <Grid key={pos.id} item xs={12} sm={6} md={4}>
            <Link to={`/details/${pos.id}`}>
              <JobCard
                typePos={pos.type}
                date={pos.created_at}
                jobtitle={pos.title}
                company={pos.company}
                country={pos.location}
                logo={pos.company_logo}
                id={pos.id}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
      {positions.length > 0 ? <LoadButtonState /> : null}
    </>
  );
};

export default JobCardContainer;
