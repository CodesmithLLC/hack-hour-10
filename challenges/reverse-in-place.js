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
    let length = array.length;
    let middle = Math.floor(length / 2);
    let temp;

    if (!Array.isArray(array)) return 'error';

    for (let i = 0; i < middle; i++) {
        temp = array[i];
        array[i] = array[length - 1 - i];
        array[length - 1 - i] = temp;
    }
    return array;
}

//finding the middle of the array and swapping each index with its inverse :)

//tests
    //reverseInPlace([]) => [];
    //reverseInPlace([1,2,3,4]); => [4,3,2,1];
    //reverseInPlace([]);['Hey'] => error;


module.exports = reverseInPlace;