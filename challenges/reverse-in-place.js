/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 */

 function reverseInPlace(array) {
   let forwardCount = 0;
   let originalVal = 0;
   for (let i = array.length - 1; i > Math.floor(arr.length / 2); i--) {
     originalVal = array[forwardCount];
     array[forwardCount] = array[i];
     array[i] = originalVal;
     forwardCount++;
   }
   return array;
 }
module.exports = reverseInPlace;
