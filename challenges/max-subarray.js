/* You are given an array of integers with both positive and negative numbers. Write a function to  find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the original array.

The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 * 								//  -5, -4, -2, 1, 2, 3, 7, 10 ==>
 *              maxSubarray([15,20,-5,10])  -> 40
 *

Kadane's algorithm
 */

function maxSubarray(arr) {
	let previous = 0;
	let maxSoFar = 0;
	let count = 0;

	for(var i = 0; i < arr.length; i++){
		if( arr[i] < 0){ count++;}
		if(count === arr.length){
			//the "biggest" negative will always be the largest negative numbers
			return Math.max.apply(null, arr);
		}
		// console.log(i);
		// console.log('this is array value', arr[i]);
		previous = Math.max(0, previous + arr[i]);
		// console.log('this is prev', previous);
		maxSoFar = Math.max(maxSoFar, previous);
		// console.log('this is max', maxSoFar);
}
	return maxSoFar;
}

// console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5])); // if you add all = 12
// console.log( maxSubarray([15,20,-5,10]));
// console.log(maxSubarray([20,40]));
// console.log(maxSubarray([40]));
// console.log(maxSubarray([-5,-3,-2,-20]));
//
//
module.exports = maxSubarray;

