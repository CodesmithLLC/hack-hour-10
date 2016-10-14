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
  // check that input is an array
  let e = new Error('Input must be an array');
  if (!Array.isArray(array)) throw e;

  /*
  helper function swaps i and j elements, and then swaps i + 1 and j - 1 elements recursively
  it stops when i >= j
  if it starts at the first and last elements of the array,
  it will swap pairs until reaching the middle of the array
  */
 
  function swapUntilReversed(i , j) {
    if (i >= j) return;
    const iHolder = array[i];
    array[i] = array[j];
    array[j] = iHolder;
    swapUntilReversed(i + 1, j -1);
  }

  const end = array.length;
  swapUntilReversed(0, end - 1);
  return array;
}

module.exports = reverseInPlace;