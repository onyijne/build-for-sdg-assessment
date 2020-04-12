import periodNormalizer from './periodNormalizer';

const impact = (data) => {
  const { reportedCases, periodType, timeToElapse } = data;
  const currentlyInfected = reportedCases * 10;
  const elapse = periodNormalizer(periodType, timeToElapse);
  const infectionsByRequestedTime = currentlyInfected * (2 ** elapse);
  const severeCasesByRequestedTime = (15 / 100) * infectionsByRequestedTime;
  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime
  };
};
export default impact;
