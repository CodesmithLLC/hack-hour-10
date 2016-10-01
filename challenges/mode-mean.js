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
	const mean = Math.floor(array.reduce((sum, curr) => sum + curr) / array.length);
	const mode = { 'count': 0, 'value': null };
	const table = {};

	array.forEach(elem => !table.hasOwnProperty(elem) ? table[elem] = 1 : table[elem]++);

	Object.keys(table).forEach(number => {
		if (table[number] > mode.count) {
			mode.count = table[number];
			mode.value = Number(number);
		}

		// for multiple modes, store max mode
		if (table[number] === mode.count) {
			if (Number(number) > mode.value) mode.value = Number(number);
		}
	});

	return mode.value === mean;
}

module.exports = modemean;