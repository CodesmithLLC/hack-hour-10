/**
 * Given an array of integers, find the highest product
 * you can get from three of the integers.
 */

function highestProduct(array) {
  if (!array || array.length < 3) return 0;
  array.sort((a, b) => a - b);

  let num1 = array.slice(-3)
    .reduce((prod, elem) => prod * elem, 1);
  let num2 = array.slice(0, 2).concat(array.slice(-1))
    .reduce((prod, elem) => prod * elem, 1);
  return Math.max(num1, num2);
}

// console.log(highestProduct([1, 2, -3, -4, -5]));
module.exports = highestProduct;
