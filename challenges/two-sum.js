/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const cache = {};
	let result = false;
	arr.forEach(num => {
		!cache[n - num] ? cache[num] = n - num : result = true;
	});

	return result;
}

module.exports = twoSum;
