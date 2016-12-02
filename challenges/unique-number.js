/**
 * Given an array of IDs, which contains many duplicate (there are two) integers and one unique integer,
 * find the unqiue integer.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
 		return array.reduce((acc, curr) => {
 			return acc ^ curr;
 	}, 0);
 }

// function uniqueNumber(array) {
// 	let obj = {};
// 	array.forEach(num => {
// 		if (!obj[num]) obj[num] = 1
// 		else obj[num]++
// 	})
// 	for (let key in obj) {
// 		if (obj[key] === 1) return key
// 	}
// }

module.exports = uniqueNumber;
