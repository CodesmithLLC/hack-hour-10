/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise.
 * A subset can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */
function subsetSum(array, target) {
  var newArray = array.filter(function(value){
     return value < target;
  });

}


// module.exports = subsetSum;


/**
 	return a boolean, determining whether ANY sum of any values held in an array equal the target.
 	edge cases:
 				- if all of the numbers are larger than target === false
 				- if all numbers are 0 & target is NOT 0 === false
 				- PATTERN:
 					* you can pick one number (say the first one) have it add to another number & if it is not equal to target, add on Another number to the sum and so on until you reach all of the numbers in the array (array.length times). To do this faster, convert the original array to an array with each value being its own array, so you can use reduce.
 					If after doing so, the additions never matched to target, then MOVE on to the next number adn continue until you have done the same pattern for EVERY value in the array.

 					OR
					sort the array from largest to smalles
 					you can subtract Target by a value in arrayif the leftover target is still > 0, keep on subtracting. if you hit 0, return true. if you go into the negative realm, return false.


 */