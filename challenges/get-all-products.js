/**
 * Given an array, return an array of all the
 * products made by multiplying every other
 * element except the number at each index.
 *
 * O(n) time and O(n) space.
 *
 * @param {Array} array
 * @return {Array}
 */
function getAllProducts(array) {
  if (!array.length) return [0];
  let zeroes = 0;
  const products = new Array(array.length).fill(0);
  const product = array.reduce((acc, curr) => {
    if (curr === 0) zeroes++;
    return curr === 0 ? acc : acc * curr;
  }, 1);
  if (zeroes > 1) return products;
  if (zeroes > 0) {
    const zeroIdx = array.indexOf(0);
    products[zeroIdx] = product;
    return products;
  }
  array.forEach((value, idx) => products[idx] = product / value);
  return products;
}

module.exports = getAllProducts;
