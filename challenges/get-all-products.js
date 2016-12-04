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

function getAllProducts2(array) {
  if (!array.length) return [0];
  return array.map((num, i) => array.reduce((a, c, ind) => ind !== i ? a * c : a ) );
}

const getAllProducts = (array) => {
  if (!array || !Array.isArray(array) || array.length <= 1) return [0];
  let front = [];
  let back = [];
  let output = [];
  
  let runningProduct = 1;
  array.forEach((num, i) => {
    front[i] = runningProduct;
    runningProduct *= num;
  });

  runningProduct = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    back[i] = runningProduct;
    runningProduct *= array[i];
  }

  for (let i = 0; i < array.length; i++) {
    output[i] = front[i] * back[i];
  }

  return output;

}


module.exports = getAllProducts;
