const impact = ({ data }) => ({
  currentlyInfected: Math.trunc(data.reportedCases * 10),
  infectionsByRequestedTime: Math.trunc(this.currentlyInfected * 1024)
});
export default impact;
