
/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
function productOfThree(a, b = 1, c = 1) {
  return a * b * c;
}

function highestProduct(array) {
// validate input. If there are less than three elements,
// simply return their product
  if (!Array.isArray(array)) return undefined;
  if (array.length < 3) return productOfThree(...array);

  const highestValArr = [];
  for (let i = 0; i < 3; i++) {
    const highestVal = Math.max(...array);
    const highestIdx = array.indexOf(highestVal);
    array = array.slice(0, highestIdx).concat(array.slice(highestIdx + 1, array.length));
    highestValArr.push(highestVal);
  }
  return productOfThree(...highestValArr);
}


module.exports = highestProduct;
console.log(highestProduct([3, 5, 1]));
console.log(highestProduct([5, 5, 1]));
console.log(highestProduct([5, 1, 1]));
console.log(highestProduct([5, 1]));
console.log(highestProduct([13, 5, 1]));
console.log(highestProduct([11, 10, 10, 5, 5, 10, 99]));
console.log(highestProduct([3, 5, 1, 16, 23]));
