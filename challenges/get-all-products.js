/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getAllProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  // Looping style:
  if (!array || !Array.isArray(array) || array.length <= 1) return [0];
  const results = [];
  let currProd;
  for (let i = 0; i < array.length; i++) {
    currProd = 1;
    for (let j = 0; j < array.length; j++) {
      if (j !== i) currProd *= array[j];
    }
    results.push(currProd);
  }
  return results;

  // // Functional style (less efficient than looping):
  // if (!array || !Array.isArray(array) || array.length <= 1) return [0];
  // return array.reduce((all, item, i) => {
  //   let tempArr = array.slice(0, i).concat(array.slice(i + 1));
  //   all = all.concat(tempArr.reduce((all, item) => all * item));
  //   return all;
  // }, []);
}

console.log(getAllProducts([1, 7, 3, 4])); // ->  [84, 12, 28, 21]

module.exports = getAllProducts;
