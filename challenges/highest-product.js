/*jshint esversion: 6 */
/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 function highestProduct(array) {
   let ansArr = array.sort(function(a, b) {
     return b - a;
   });
   return ansArr[0] * ansArr[1] * ansArr[2];
 }


module.exports = highestProduct;
