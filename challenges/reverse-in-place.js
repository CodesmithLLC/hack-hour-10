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

function reverseInPlace(array, times = array.length) {
    if(times > array.length){
        return reverseInPlace(array.slice(1), times - 1).concat(array[0]);
    }
    return !array || !array.length ? [] : array;
}

module.exports = reverseInPlace;