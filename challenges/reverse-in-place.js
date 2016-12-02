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
  if (array.length === 1) {
    return array;
  }
  else {
    for (let i = 0; i <= Math.floor(array.length / 2) - 1; i++) {
      let temp = array[array.length -1 - i];
      array[array.length -1 - i] = array[i];
      array[i] = temp;
    }
    return array;
  }
}

module.exports = reverseInPlace;

// console.log(reverseInPlace([1,2,3,4,5]));
// //[5,4,3,2,1]
