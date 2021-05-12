// starter query
const PROXY =
  window.location.hostname === "localhost"
    ? "https://cors-anywhere.herokuapp.com"
    : "/cors-proxy";

let endPoint = `${PROXY}/https://jobs.github.com/positions.json`;

function initialJobsQuery(counter) {
  let endPointNoQuery;
  endPointNoQuery = endPoint;
  if (counter > 1) {
    endPointNoQuery = endPointNoQuery + `?page=${counter}`;
  }

  return endPointNoQuery;
}

function setQueryDataForJobs(queryDescVal, queryLocVal, fullTimeOnly, counter) {
  let jobSearchQueryEndpoint;

  let queryDescription = `?description=${queryDescVal}`;
  let queryLocation = `&location=${queryLocVal}`;

  if (queryDescVal.length > 0 && queryLocVal.length > 0) {
    jobSearchQueryEndpoint = endPoint + queryDescription + queryLocation;
    if (fullTimeOnly.checkedState === true) {
      jobSearchQueryEndpoint += "&full_time=on";
    }
    if (counter > 1) {
      jobSearchQueryEndpoint += `&page=${counter}`;
    }
  } else if (queryDescVal.length > 0) {
    jobSearchQueryEndpoint = endPoint + queryDescription;
    if (fullTimeOnly.checkedState === true) {
      jobSearchQueryEndpoint += "&full_time=on";
    }
    if (counter > 1) {
      jobSearchQueryEndpoint += `&page=${counter}`;
    }
  } else if (queryLocVal.length > 0) {
    jobSearchQueryEndpoint = endPoint + "?" + queryLocation;
    if (fullTimeOnly.checkedState === true) {
      jobSearchQueryEndpoint += "&full_time=on";
    }
    if (counter > 1) {
      jobSearchQueryEndpoint += `&page=${counter}`;
    }
  }

  return jobSearchQueryEndpoint;
}

export { initialJobsQuery, setQueryDataForJobs };
