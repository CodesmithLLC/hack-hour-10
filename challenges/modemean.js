/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 *     - Math.floor the mean
 *     - If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
	let mode = -Infinity;
	let highestCount = 0;
	const counts = {};
	let sum = 1;
	for (let i = 0; i < array.length; i++) {
		if (counts.hasOwnProperty(array[i])) counts[array[i]]++;
		else counts[array[i]] = 1;
		if (counts[array[i]] === highestCount && array[i] > mode) mode = array[i];
		if (counts[array[i]] > highestCount) {
			mode = array[i];
			highestCount = counts[array[i]];
		}
		sum += array[i];
	}
	console.log(mode, Math.floor(sum / array.length))
	return mode === Math.floor(sum / array.length);
}

module.exports = modemean;
