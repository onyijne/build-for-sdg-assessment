import periodNormalizer from './periodNormalizer';

const impact = (data) => {
  const { reportedCases, periodType, timeToElapse } = data;
  const currentlyInfected = reportedCases * 10;
  const elapse = periodNormalizer(periodType, timeToElapse);
  const infectionsByRequestedTime = currentlyInfected * (2 ** elapse);
  return {
    currentlyInfected,
    infectionsByRequestedTime
  };
};
export default impact;
