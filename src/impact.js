import periodNormalizer from './periodNormalizer';

const impact = (data) => {
  const {
    reportedCases, periodType, timeToElapse, totalHospitalBeds
  } = data;
  const currentlyInfected = reportedCases * 10;
  const elapse = periodNormalizer(periodType, timeToElapse);
  const infectionsByRequestedTime = currentlyInfected * (2 ** elapse);
  const severeCasesByRequestedTime = Math.trunc((15 / 100) * infectionsByRequestedTime);
  const hospitalBedsByRequestedTime = Math.trunc((35 / 100) * totalHospitalBeds)
  - severeCasesByRequestedTime;
  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime
  };
};
export default impact;
