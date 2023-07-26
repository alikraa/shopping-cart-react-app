export const priceFormatter = new Intl.NumberFormat();

export const declension = (
  number: number,
  one: string,
  two: string,
  three: string
) => {
  const number1 = number % 10;

  if (number1 === 1 && number !== 11) {
    return one;
  } else if (
    number1 > 1 &&
    number1 < 5 &&
    number !== 12 &&
    number !== 13 &&
    number !== 14
  ) {
    return two;
  } else if (number > 10 && number < 20) {
    return three;
  }
  return three;
};
