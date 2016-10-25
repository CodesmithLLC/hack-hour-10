/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time and O(n) space 
 *
 */

function mergeArrays(arr1, arr2) {
    let length = arr1.length +arr2.length;
	let holder = []

	for(let i = 0; i<length; i++)	{
		if(arr1[0]>arr2[0]) {
			holder.push(arr2.shift());
		}
		else holder.push(arr1.shift());	
	}
	return holder;
}

module.exports = mergeArrays;
