// starter query
const PROXY =
  window.location.hostname === "localhost"
    ? "https://cors-anywhere.herokuapp.com"
    : "/cors-proxy";

const endPoint = `${PROXY}/https://jobs.github.com/positions.json`;

function initialJobsQuery() {
  return endPoint;
}

function setQueryDataForJobs(queryDescVal, queryLocVal, fullTimeOnly) {
  let queryDescription = `?description=${queryDescVal}`;
  if (fullTimeOnly.checkedState === true) {
    queryDescription = queryDescription + "&full_time=on";
  }

  let queryLocation = `&location=${queryLocVal}`;
  if (fullTimeOnly.checkedState === true) {
    queryLocation = queryLocation + "&full_time=on";
  }

  let jobSearchQueryEndpoint;
  if (queryDescVal.length > 0 && queryLocVal.length > 0) {
    jobSearchQueryEndpoint = endPoint + queryDescription + queryLocation;
  } else if (queryDescVal.length > 0) {
    jobSearchQueryEndpoint = endPoint + queryDescription;
  } else if (queryLocVal.length > 0) {
    jobSearchQueryEndpoint = endPoint + "?" + queryLocation;
  }

  return jobSearchQueryEndpoint;
}

export { initialJobsQuery, setQueryDataForJobs };
