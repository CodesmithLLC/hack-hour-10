/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 function highestProduct(array) {
   if (!array) return 0;
   if (array.length < 3) return 0;
   const sorted = array.sort((a, b) => a - b);
   const newArr = [sorted[sorted.length - 1], sorted[sorted.length - 2], sorted[sorted.length - 3]];
   const negCheck = [sorted[0], sorted[1]];
   const posCheck = [sorted[sorted.length - 1], sorted[sorted.length - 2]];
   if (sorted[0] <= 0 && sorted[sorted.length - 1] <= 0) {
     return sorted[sorted.length-1] * sorted[sorted.length-2] * sorted[sorted.length-3];
   }
   if (negCheck.reduce((prev, curr) => prev * curr) > posCheck.reduce((prev, curr) => prev * curr)) {
     return negCheck.reduce((prev, curr) => prev * curr) * newArr[0];
   }
   return newArr.reduce((prev, curr) => prev * curr);
 }


module.exports = highestProduct;
