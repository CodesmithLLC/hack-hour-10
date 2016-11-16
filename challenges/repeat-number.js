/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

 function repeatNumbers(array) {
 	let len = array.length;

   for(let i = 0; i < len; i++) {

    let findNum = array.shift();
    if(array.indexOf(findNum) > -1) return findNum;
   }

   return false;
 }

module.exports = repeatNumbers;
