import isSafeNumber from 'is-safe-number';

const isThrodd = (value) => {
  if (!isSafeNumber(value)) {
    throw new TypeError('is-throdd: value must be a safe number');
  }

  return value % 3 !== 0;
};

export default isThrodd;
