/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  // Edge cases.
  if (!Array.isArray(array) || array.length < 3) return 0;

  // Possible factors to be used.
  const low = { one: 0, two: 0 };
  const high = { one: 0, two: 0, three: 0 };

  // Iterate through array.
  for (let i = 0; i < array.length; i++) {
    switch (true) {
      case array[i] < low.one:
        low.two = low.one;
        low.one = array[i];
        break;
      case array[i] < low.two:
        low.two = array[i];
        break;
      case array[i] > high.one:
        high.three = high.two
        high.two = high.one;
        high.one = array[i];
        break;
      case array[i] > high.two:
        high.three = high.two;
        high.two = array[i];
        break;
      case array[i] > high.three:
        high.three = array[i];
        break;
    }
  }

  // Returning maximum product of either 1) all high values or 2) high.one and both low values.
  return Math.max(high.one * high.two * high.three, high.one * low.one * low.two);
}

module.exports = highestProduct;
