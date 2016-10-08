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
    
    let arrayHalfLength = Math.floor(array.length/2);
 
    for (let i=0; i<arrayHalfLength; i++) {
        let front = array[i];
        let back = array[array.length -1-i];
        array[i] = back;
        array[array.length-1-i]= front; 
    }

    return array;

};

let array = [1,2,3];
console.log(reverseInPlace(array));

module.exports = reverseInPlace;