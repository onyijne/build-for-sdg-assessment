const severeImpact = (data) => ({
  currentlyInfected: Math.trunc(data.reportedCases * 50),
  infectionsByRequestedTime: Math.trunc(severeImpact.currentlyInfected * 1024)
});
export default severeImpact;
