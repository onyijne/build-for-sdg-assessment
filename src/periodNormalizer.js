const periodNormalizer = (periodType, timeToElapse, avgDailyIncomeInUSD) => {
  let elapse;
  let amount;
  switch (periodType.toLowerCase()) {
    case 'months':
      elapse = (timeToElapse / 3) * 30;
      amount = avgDailyIncomeInUSD * 30;
      break;
    case 'weeks':
      elapse = (timeToElapse / 3) * 7;
      amount = avgDailyIncomeInUSD * 7;
      break;
    default:
      elapse = (timeToElapse / 3);
      amount = avgDailyIncomeInUSD;
      break;
  }
  return {
    elapseTime: Math.trunc(elapse),
    avgDailyIncome: amount
  };
};

export default periodNormalizer;
