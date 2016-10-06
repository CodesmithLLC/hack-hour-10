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
  if (!Array.isArray(array)) return new Error('expected input to be an array');

  // Insight is that we can just swap beginning and ending
  for (let i = 0, len = array.length; i < Math.floor(len/2); i++) {
    const first = array[i];
    const last = array[len - i - 1];

  	array[len - i - 1] = first;
  	array[i] = last;
  }

  return array;
}

module.exports = reverseInPlace;
