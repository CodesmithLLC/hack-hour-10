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
  let numCache = {};

  for (let i = 0; i < array.length; i++) {
    if (numCache[array[i]] === undefined) {
      numCache[array[i]] = 1;
    }
    else {
      return array[i];
    }
  }
}

module.exports = repeatNumbers;


// // O(n) time, O(1) space
// function repeatNumbers(array) {
//   var expected = ( ( array.length - 1 ) * array.length ) / 2;
//   var actual = 0;
  
//   for (var i = 0; i < array.length; i ++) {
//       actual += array[i];
//   }
  
//   return actual - expected;
// }

// // O(n) time, O(1) space
// function repeatNumbers(array) {
//   var result = 0;
  
//   for (var i = 0; i < array.length; i ++) {
//     result = result ^ i ^ array[i];
//   }
  
//   return result;
// }