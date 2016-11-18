/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
	if(array.length === 0) return array;
	if(array === undefined) return undefined
	var sorted = array.sort((a, b) => a[0] - b[0])
	var nu = [];
	for(var i = 0, holder = null, compare; i < sorted.length - 1; i++) {
		compare = sorted[i][1];
		if(!holder) holder = sorted[i][0]
		if(compare >= sorted[i + 1][0]) {
			compare = sorted[i + 1][1]
		}
		if(compare < sorted[i + 1][0]) {
			nu.push([holder, compare]);
			holder = null;
			compare = null;
		}

	}
	nu.push([holder, compare])
	return nu

}
module.exports = mergeRanges;
