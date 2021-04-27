export const urlUpdater = (
  locationPropVal,
  descriptionPropVal,
  descriptoinInit,
  fullTimePropVal
) => {
  const PROXY =
    window.location.hostname === "localhost"
      ? "https://cors-anywhere.herokuapp.com"
      : "/cors-proxy";
  let url = `${PROXY}/https://jobs.github.com/positions.json`;

  if (fullTimePropVal) {
    if (descriptionPropVal.length === 0 && locationPropVal.length > 0) {
      url = `${PROXY}/https://jobs.github.com/positions.json?&full_time=on&location=${locationPropVal}`;
    } else if (locationPropVal.length === 0 && descriptionPropVal.length > 0) {
      url = `${PROXY}/https://jobs.github.com/positions.json?description=${descriptionPropVal}&full_time=on`;
    } else if (descriptionPropVal.length > 0 && locationPropVal.length > 0) {
      url = `${PROXY}/https://jobs.github.com/positions.json?description=${descriptionPropVal}&full_time=on&location=${locationPropVal}`;
    }
  } else {
    if (descriptionPropVal.length === 0 && locationPropVal.length > 0) {
      url = `${PROXY}/https://jobs.github.com/positions.json?&location=${locationPropVal}`;
    } else if (locationPropVal.length === 0 && descriptionPropVal.length > 0) {
      url = `${PROXY}/https://jobs.github.com/positions.json?&description=${descriptionPropVal}`;
    } else if (descriptionPropVal.length > 0 && locationPropVal.length > 0) {
      url = `${PROXY}/https://jobs.github.com/positions.json?description=${descriptionPropVal}&location=${locationPropVal}`;
    }
  }

  return url;
};
