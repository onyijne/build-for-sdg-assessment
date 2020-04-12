const severeImpact = (data) => {
  const { reportedCases, periodType, timeToElapse } = data;
  const currentlyInfected = reportedCases * 50;
  let elapse;
  switch (periodType.toLowerCase()) {
    case 'months':
      elapse = Math.trunc(timeToElapse / 3) * 30;
      break;
    case 'weeks':
      elapse = Math.trunc(timeToElapse / 3) * 7;
      break;
    default:
      elapse = Math.trunc(timeToElapse / 3);
      break;
  }
  const infectionsByRequestedTime = currentlyInfected * (2 ** elapse);
  return {
    currentlyInfected,
    infectionsByRequestedTime
  };
};
export default severeImpact;
