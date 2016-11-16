/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
var repeat = {};
array.forEach(val => {
	if(!repeat[val]) repeat[val] = 1;
	else ++repeat[val]
})
for(var keys in repeat){
	if(repeat[keys] === 2) return keys;
}
return null;
}
module.exports = repeatNumbers;
