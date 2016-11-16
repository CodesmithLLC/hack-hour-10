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
var holder = {};
array.forEach(val => {
	if(!holder[val]) holder[val] = 1;
	else ++holder[val]
})
for(var keys in holder){
	if(holder[keys] === 2) return keys;
}
return null;
}
module.exports = repeatNumbers;
