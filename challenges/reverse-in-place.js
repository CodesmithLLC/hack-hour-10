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
    if (array.constructor !== Array) return 'must be an array';
    if (array.length < 2) return array;
    let length = array.length - 1;
    let right = length;
    for (let left = 0; left < right; left += 1) {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        right -= 1
    }
    return array;
}

module.exports = reverseInPlace;
