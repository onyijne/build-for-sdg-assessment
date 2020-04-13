const periodNormalizer = (periodType, timeToElapse) => {
  let elapse;
  let dollarElapse;
  switch (periodType.toLowerCase()) {
    case 'months':
      elapse = (timeToElapse / 3) * 30;
      dollarElapse = timeToElapse * 30;
      break;
    case 'weeks':
      elapse = (timeToElapse / 3) * 7;
      dollarElapse = timeToElapse * 7;
      break;
    default:
      elapse = (timeToElapse / 3);
      dollarElapse = timeToElapse;
      break;
  }
  return {
    elapseTime: Math.trunc(elapse),
    dollarElapseTime: dollarElapse
  };
};

export default periodNormalizer;
