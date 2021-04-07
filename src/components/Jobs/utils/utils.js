export const urlUpdater = (locationPropVal, descriptionPropVal) => {
  let url =
    "https:cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";
  if (descriptionPropVal.length === 0 && locationPropVal.length > 0) {
    url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?&location=${locationPropVal}`;
  } else if (locationPropVal.length === 0 && descriptionPropVal.length > 0) {
    url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${descriptionPropVal}`;
  } else if (descriptionPropVal.length > 0 && locationPropVal.length > 0) {
    url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${descriptionPropVal}&location=${locationPropVal}`;
  }

  return url;
};
