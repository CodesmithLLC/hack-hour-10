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
    var len;
    for(var i = 0, len = array.length; i < Math.floor(len/2); ++i){
        console.log("swapping " + array[i] + " and " +  array[len-i-1]);
        var tmp = array[i];
        array[i] = array[len-i-1]; 
        array[len -i-1] = tmp;
    }
}

module.exports = reverseInPlace;