const impact = (data) => {
  const { reportedCases, periodType, timeToElapse } = data;
  const currentlyInfected = reportedCases * 10;
  const requestedTime = (period, toElapse) => {
    let elapse;
    switch (period.toLowerCase()) {
      case 'month':
        elapse = Math.trunc(toElapse / 3) * 30;
        break;
      case 'week':
        elapse = Math.trunc(toElapse / 3) * 7;
        break;
      default:
        elapse = Math.trunc(toElapse / 3);
        break;
    }
    return elapse;
  };
  return {
    currentlyInfected,
    infectionsByRequestedTime: currentlyInfected * (2 ** requestedTime(periodType, timeToElapse))
  };
};
export default impact;
