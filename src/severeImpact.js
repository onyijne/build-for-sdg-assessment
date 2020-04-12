import periodNormalizer from './periodNormalizer';

const severeImpact = (data) => {
  const {
    reportedCases, periodType, timeToElapse, totalHospitalBeds, region
  } = data;
  const currentlyInfected = reportedCases * 50;
  const normalizer = periodNormalizer(periodType, timeToElapse, region.avgDailyIncomeInUSD);
  const infectionsByRequestedTime = currentlyInfected * (2 ** normalizer.elapseTime);
  const severeCasesByRequestedTime = Math.trunc((15 / 100) * infectionsByRequestedTime);
  const hospitalBedsByRequestedTime = Math.trunc(((35 / 100) * totalHospitalBeds)
  - severeCasesByRequestedTime);
  const casesForICUByRequestedTime = Math.trunc((5 / 100) * infectionsByRequestedTime);
  const casesForVentilatorsByRequestedTime = Math.trunc((2 / 100) * infectionsByRequestedTime);
  const dollarsInFlight = Math.trunc((infectionsByRequestedTime * 0.65)
  * normalizer.avgDailyIncome);
  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
  };
};
export default severeImpact;
