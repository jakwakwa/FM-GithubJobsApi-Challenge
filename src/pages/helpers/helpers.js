export function pageLimitCalc(pageLimit, data, setDisabled) {
  if (data.length < pageLimit) {
    setDisabled(true);
  } else {
    setDisabled(false);
  }
}
