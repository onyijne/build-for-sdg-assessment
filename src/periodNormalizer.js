const periodNormalizer = (periodType, timeToElapse) => {
  let elapse;
  let amount;
  switch (periodType.toLowerCase()) {
    case 'months':
      elapse = (timeToElapse / 3) * 30;
      amount = (timeToElapse / 3) * 30;
      break;
    case 'weeks':
      elapse = (timeToElapse / 3) * 7;
      amount = (timeToElapse / 3) * 30;
      break;
    default:
      elapse = (timeToElapse / 3);
      amount = timeToElapse;
      break;
  }
  return {
    elapseTime: Math.trunc(elapse),
    dollarElapseTime: amount
  };
};

export default periodNormalizer;
