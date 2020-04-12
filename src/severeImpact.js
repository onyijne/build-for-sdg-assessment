import periodNormalizer from './periodNormalizer';

const severeImpact = (data) => {
  const { reportedCases, periodType, timeToElapse } = data;
  const currentlyInfected = reportedCases * 50;
  const elapse = periodNormalizer(periodType, timeToElapse);
  const infectionsByRequestedTime = currentlyInfected * (2 ** elapse);
  /* const severeCasesByRequestedTime = Math.trunc((15 / 100) * infectionsByRequestedTime);
  const hospitalBedsByRequestedTime = severeCasesByRequestedTime
  - Math.trunc((65 / 100) * totalHospitalBeds); */
  return {
    currentlyInfected,
    infectionsByRequestedTime
  };
};
export default severeImpact;
