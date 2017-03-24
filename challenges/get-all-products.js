/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 */

function getAllProducts(array) {

  // Edge cases
  if (!array || !Array.isArray(array) || !array.length) return [0];
  if (array.length === 1) return array;
  if (array.includes(0)) {
    array[array.indexOf(0)] = 'ZeroToHero';
    const product = array.reduce((acc, val) => {
      if (Number.isInteger(val)) return acc *= val;
      return acc;
    }, 1);

    return array.map(val => {
      if (!Number.isInteger(val)) return product;
      return 0;
    });
  }

  // Get product for all values, then divide by each value to get all possible products.
  const multiplyAll = array.reduce((acc, num) => acc * num);
  return array.map(val => multiplyAll / val);
}

// const arr1 = [3];
// const arr2 = [4, 5];
// const arr3 = [6, 8, 1];
// const arr4 = [3, 2, 4, 1];
// const arr5 = [0, 1, 0, 4];

// console.log(getAllProducts(arr1)); // [3]
// console.log(getAllProducts(arr2)); // [5, 4]
// console.log(getAllProducts(arr3)); // [8, 6, 48]
// console.log(getAllProducts(arr4)); // [8, 12, 6, 24]
// console.log(getAllProducts(arr5)); // [0, 0, 0, 0]

module.exports = getAllProducts;

// function getAllProducts(array) {

//   // Edge cases
//   if (!Array.isArray(array) || !array.length) return [0];
//   if (array.length === 1) return array;

//   // Reduce multiplies all values except map's current term
//   return array.map((num, index) => {
//     return array.reduce((product, num, i) => {
//       if (i !== index) product *= num;
//       return product;
//     }, 1);
//   });
// }