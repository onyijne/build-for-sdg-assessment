const periodNormalizer = (periodType, timeToElapse) => {
  let elapse;
  switch (periodType.toLowerCase()) {
    case 'months':
      elapse = (timeToElapse / 3) * 30;
      break;
    case 'weeks':
      elapse = (timeToElapse / 3) * 7;
      break;
    default:
      elapse = (timeToElapse / 3);
      break;
  }
  return Math.trunc(elapse);
};

export default periodNormalizer;