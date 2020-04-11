const impact = (data) => ({
  currentlyInfected: Math.trunc(data.reportedCases * 10),
  infectionsByRequestedTime: Math.trunc(impact.currentlyInfected * 1024)
});
export default impact;
