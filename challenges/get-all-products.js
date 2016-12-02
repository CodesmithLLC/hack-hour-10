/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {

  // Edge cases
  if (!Array.isArray(array) || array.length < 2) return undefined;
  
  // Populate with products and return this array
  const result = [];

  // Track product of all terms except current
  let product = 1;

  // Outer loop represents current term
  for (let i = 0; i < array.length; i++) {

    // Inner loop multiples all other terms
    for (let j = 0; j < array.length; j++) {
      if (i !== j) product *= array[j];
    }

    // After each product is fully created, store then reset for next term's calculations.
    result.push(product);
    product = 1;
  }

  // Array now populated with all products excluding term at that index
  return result;
}

// const arr1 = [3];
// const arr2 = [4, 5];
// const arr3 = [6, 8, 1];
// const arr4 = [3, 2, 4, 1];
// const arr5 = [0, 1, 2, 4];

// console.log(getAllProducts(arr1)); // undefined
// console.log(getAllProducts(arr2)); // [5, 4]
// console.log(getAllProducts(arr3)); // [8, 6, 48]
// console.log(getAllProducts(arr4)); // [8, 12, 6, 24]
// console.log(getAllProducts(arr5)); // [8, 0, 0, 0]

module.exports = getAllProducts;
