const impact = (data) => ({
  currentlyInfected: data.reportedCases * 10,
  infectionsByRequestedTime: impact.currentlyInfected * 1024
});
export default impact;
