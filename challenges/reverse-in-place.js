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
    for (let i = 0; i < array.length; array.unshift(array[i]), i += 2);
    for (let i = 0; i < array.length; array.pop(), i++);
    return array;
}

module.exports = reverseInPlace;