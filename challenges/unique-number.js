/**
 * Given an array of IDs, which contains many duplicate (there are two) integers and one unique integer,
 * find the unique integer.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
	var obj = array.reduce( (a,c) => {
		if(typeof a[c] !== 'undefined'){
			a[c] += 1;
		} else {
			a[c] = 1;
		}
		return a;
	}, {});
	for (var key in obj){
		if(obj[key] === 1) return key;
	}

}

// module.exports = uniqueNumber;
console.log(uniqueNumber([1,7,7,2,1,9,3,9,3])); // -> 2


//remve all duplicates --