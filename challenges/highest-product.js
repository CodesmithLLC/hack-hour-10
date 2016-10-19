/*jshint esversion: 6 */
/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 0;
  else {
    let ansArr = array.sort(function(a, b) {
      return b - a;
    });
    console.log(ansArr);
    return ansArr[0] * ansArr[1] * ansArr[2];
  }
}


module.exports = highestProduct;
