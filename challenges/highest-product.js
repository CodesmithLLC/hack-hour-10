/*jshint esversion: 6 */
/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 function highestProduct(array) {
   if (array.length < 3) return 0;
   else {
     let ansArr = [];
     while (ansArr.length < 3) {
       ansArr.push(Math.max.apply(null, array));
       array.splice(array.indexOf(Math.max.apply(null, array)), 1);
     }
     return ansArr[0] * ansArr[1] * ansArr[2];
   }
 }


module.exports = highestProduct;
