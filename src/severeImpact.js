import periodNormalizer from './periodNormalizer';

const severeImpact = (data) => {
  const { reportedCases, periodType, timeToElapse } = data;
  const currentlyInfected = reportedCases * 50;
  const elapse = periodNormalizer(periodType, timeToElapse);
  const infectionsByRequestedTime = currentlyInfected * (2 ** elapse);
  return {
    currentlyInfected,
    infectionsByRequestedTime
  };
};
export default severeImpact;
