/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */


function highestProduct(array) {
  const min1 = Math.min(...array);
  array.splice(array.indexOf(min1), 1);
  const min2 = Math.min(...array);
  const max1 = Math.max(...array);
  array.splice(array.indexOf(max1), 1);
  const max2 = Math.max(...array);
  array.splice(array.indexOf(max2), 1);  
  const max3 = Math.max(...array);
  array.splice(array.indexOf(max3), 1);
  return Math.max(max1*max2*max3, max1*min1*min2);
}

// alternate recursive solution
function highestProductRecursive(array) {
  let maxProduct = -Infinity;
  function findProducts(array, factors, product) {
    if (factors === 3) {
      return maxProduct = (product > maxProduct) ? product : maxProduct;
    }
    else if (array.length === 0) {
      return;
    }
    findProducts(array.slice(1), factors + 1, product * array[0]);
    findProducts(array.slice(1), factors, product);
  }
  findProducts(array, 0, 1);
  return maxProduct;
}

module.exports = highestProduct;
