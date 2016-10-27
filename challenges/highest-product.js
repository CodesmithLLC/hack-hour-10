/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array[0] === undefined) return undefined;
	let sorted = array.sort((a, b) => b - a);
	let max1 = sorted.slice(0, 3).reduce((acc, curr) => acc * curr);
	let max2 = (sorted.slice(-2).reduce((acc, curr) => acc * curr)) * sorted[0];
	
	if (max1 > max2) return max1;
	else return max2;
}


module.exports = highestProduct;
