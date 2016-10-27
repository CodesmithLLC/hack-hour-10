/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 0;
  
  const ascending = array.sort((a, b) => a - b);
  const length = ascending.length;

  // Highest product will come from either top 3 values as intuition expects...
  const product1 = ascending[length - 1] * ascending[length - 2] * ascending[length - 3];

  // ...or, if a pair of negative numbers exists, top value with the bottom pair.
  const product2 = ascending[length - 1] * ascending[0] * ascending[1];

  return Math.max(product1, product2);
}

// console.log(highestProduct([1, 2, 3]));
// console.log(highestProduct([-11, 2, 3, 0]));
// console.log(highestProduct([1, -2, -3, 4, -2]));
// console.log(highestProduct([1, 2, 0]));
// console.log(highestProduct([1, 2]));
// console.log(highestProduct([3]));
// console.log(highestProduct([-5, -6, -3, -7, 5]));
// console.log(highestProduct([1, 2, -3]));

module.exports = highestProduct;