/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let largest = [];
  let smallest = [];
  if (array.length < 3) return 0;

  function arrayProduct(arr) {
    return arr.reduce((a, b) => {
      return a * b;
    });
  }

  array.sort();
  smallest.push(array[array.length - 1]);

  for (let i = 0; i < array.length; i++) {
    if (i <= 1) smallest.push(array[i]);
    if (i >= array.length - 3) largest.push(array[i]);
  }

  return arrayProduct(largest) > arrayProduct(smallest) ? arrayProduct(largest) : arrayProduct(smallest);
}



module.exports = highestProduct;
