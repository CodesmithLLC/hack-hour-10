/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
function productOfThree(a, b = 1, c = 1) {
  return a * b * c;
}

function highestProduct(array) {
// validate input.
  if (!Array.isArray(array)) return 0;
  if (array.length < 3) return 0;

  const highestValArr = [];
  const lowestValArr = [];
  let reallyLowVal;
  let reallyreallyLowVal;

  for (let i = 0; i < 3; i++) {
    const highestVal = Math.max(...array);
    const highestIdx = array.indexOf(highestVal);
    const lowestVal = Math.min(...array);
    const lowestValIdx =  array.indexOf(lowestVal);
    array = array.slice(0, lowestValIdx).concat(array.slice(lowestValIdx + 1, array.length));
    array = array.slice(0, highestIdx).concat(array.slice(highestIdx + 1, array.length));
    highestValArr.push(highestVal);
    lowestValArr.push(lowestVal);
  }
  if (Math.min(...lowestValArr) < 0) {
    reallyLowVal = Math.min(...lowestValArr);
    const lowestValIdx =  array.indexOf(lowestVal);
    lowestValArr = lowestValArr.slice(0, lowestValIdx).concat(lowestValArr.slice(lowestValIdx + 1, lowestValArr.length));
  }
  if (Math.min(...lowestValArr) < 0) {
    reallyreallyLowVal = Math.min(...lowestValArr);
    const lowestValIdx =  array.indexOf(lowestVal);
    lowestValArr = lowestValArr.slice(0, lowestValIdx).concat(lowestValArr.slice(lowestValIdx + 1, lowestValArr.length));
  }
  if ((reallyreallyLowVal * reallyLowVal) > (highestValArr[0] * highestValArr[1])
    || (reallyreallyLowVal * reallyLowVal) > (highestValArr[0] * highestValArr[2])
    || (reallyreallyLowVal * reallyLowVal) > (highestValArr[1] * highestValArr[2])) {
      return productOfThree(reallyLowVal, reallyreallyLowVal, highestValArr[0]);
  } else return productOfThree(...highestValArr);


module.exports = highestProduct;
