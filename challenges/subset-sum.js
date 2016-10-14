/* You are given an array of integers and a target number.
 * Write a function that returns true if
 * there is a subset of the array that sums up to the target and
 * returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively
 * in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
	newArr = array.sort((a,b) => a-b);
	if (newArr.reduce( (prev,curr) => prev + curr) === target) return true
	if (target < Math.max.apply(null,array)) return false;
	for (num of newArr){
			if (newArr.indexOf(target - num) !== -1) return true;
		for (num2 of newArr){
			if (newArr.indexOf(target - num2) !== -1) return true;
			subsetSum(array,target-num)
			subsetSum(array,target-num-num2)
			}
	}


	return false
}


module.exports = subsetSum;
