import periodNormalizer from './periodNormalizer';

const severeImpact = (data) => {
  const { reportedCases, periodType, timeToElapse } = data;
  const currentlyInfected = reportedCases * 50;
  const elapse = periodNormalizer(periodType, timeToElapse);
  const infectionsByRequestedTime = currentlyInfected * (2 ** elapse);
  const severeCasesByRequestedTime = (15 / 100) * infectionsByRequestedTime;
  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime
  };
};
export default severeImpact;
