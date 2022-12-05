export const filteredJobs = (fetchedData, description, location, contract) => {
  let filtered = fetchedData.filter((job) => {
    if (
      description !== "" &&
      location === "" &&
      contract.contract === "checked"
    ) {
      return (
        job.position.toLowerCase().includes(description.toLowerCase()) &&
        job.contract.includes("Full Time")
      );
    } else if (
      description === "" &&
      location !== "" &&
      contract.contract === "checked"
    ) {
      return (
        job.location.toLowerCase().includes(location.toLowerCase()) &&
        job.contract.includes("Full Time")
      );
    } else if (
      description !== "" &&
      location !== "" &&
      (contract.contract === "" || contract.contract === "false")
    ) {
      return (
        job.position.toLowerCase().includes(description.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    } else if (
      description === "" &&
      location !== "" &&
      (contract.contract === "" || contract.contract === "false")
    ) {
      return job.location.toLowerCase().includes(location.toLowerCase());
    } else if (
      description !== "" &&
      location === "" &&
      (contract.contract === "" || contract.contract === "false")
    ) {
      return job.position.toLowerCase().includes(description.toLowerCase());
    } else if (
      description !== "" &&
      location !== "" &&
      contract.contract === "checked"
    ) {
      return (
        job.position.toLowerCase().includes(description.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase()) &&
        job.contract.includes("Full Time")
      );
    } else if (
      description === "" &&
      location === "" &&
      (contract.contract === "" || contract.contract === "false")
    ) {
      return job;
    } else if (
      description === "" &&
      location === "" &&
      contract.contract === "checked"
    ) {
      return job.contract.includes("Full Time");
    }
  });

  return filtered;
};
