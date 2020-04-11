import impact from './impact';
import severeImpact from './severeImpact';

const covid19ImpactEstimator = (data) => data;

covid19ImpactEstimator.impact = impact(covid19ImpactEstimator);
covid19ImpactEstimator.severeImpact = severeImpact(covid19ImpactEstimator);

export default covid19ImpactEstimator;
