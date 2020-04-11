const severeImpact = (data) => ({
  currentlyInfected: data.reportedCases * 50,
  infectionsByRequestedTime: severeImpact.currentlyInfected * 1024
});
export default severeImpact;
