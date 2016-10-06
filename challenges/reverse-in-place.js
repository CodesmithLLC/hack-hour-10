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
  function swap(ind1, ind2) {
    let temp = array[ind1];
    array[ind1] = array[ind2];
    array[ind2] = temp;
  }
  
  if (array === undefined) return undefined;

  const LENGTH = Math.floor(array.length / 2);
  let leftInd = 0;
  let rightInd = array.length - 1;

  for(let i = 0; i < LENGTH; i++) swap(leftInd++, rightInd--);
  return array;
}

module.exports = reverseInPlace;