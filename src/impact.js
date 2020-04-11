const impact = (data) => {
  // const { reportedCases, periodType, timeToElapse } = data;
  const currentlyInfected = data.reportedCases * 10;
  let elapse;
  switch (data.periodType.toLowerCase()) {
    case 'months':
      elapse = Math.trunc(data.timeToElapse / 3) * 30;
      break;
    case 'weeks':
      elapse = Math.trunc(data.timeToElapse / 3) * 7;
      break;
    default:
      elapse = Math.trunc(data.timeToElapse / 3);
      break;
  }
  const infectionsByRequestedTime = currentlyInfected * (2 ** elapse);
  return {
    currentlyInfected,
    infectionsByRequestedTime
  };
};
export default impact;
