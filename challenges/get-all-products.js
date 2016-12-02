/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 */

function getAllProducts(array) {
  let zero = 0;
  array.forEach(value => {
    if (value === 0) zero++;
  });
  const products = [];
  if (zero > 1) return new Array(array.length).fill(0);
  if (zero > 0) {
    const zeroIdx = array.indexOf(0);
    let product = 1;
    array.forEach(value => {
      if (value !== 0) product *= value;
    });
    const products = new Array(array.length).fill(0);
    products[zeroIdx] = product;
    return products;
  }
  let product = 1;
  array.forEach(value => product *= value);
  array.forEach(value => products.push(product / value));
  return products;
}

module.exports = getAllProducts;
