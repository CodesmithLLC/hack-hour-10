"use strict"
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
  if(Array.isArray(array) === false) { return undefined; };
  if(array.length === 0) {return []};
  let placePosition = array.length;
  for (let i = array.length - 1; i >= 0; i--) {
    array[placePosition] = array[i];
    placePosition++;
  }
  let grabPosition = array.length / 2;
  for (let i = 0; i < array.length; i++) { 
    array[i] = array[grabPosition];
      grabPosition++;
  }
  var popCount = array.length / 2;
  while (popCount > 0) {
    array.pop();
    popCount--;
  }
  return array;
}
// console.log(reverseInPlace([1,2,3]));
// console.log(reverseInPlace([1,2,3,4,5,6]));
// console.log(reverseInPlace([]));
// console.log(reverseInPlace('Non array'));

module.exports = reverseInPlace;