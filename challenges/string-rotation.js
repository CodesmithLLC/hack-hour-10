/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
	if (typeof s1 !== 'string' || typeof s2 !== 'string' || s1.length !== s2.length) return false;
    for(let i = 0; i < s2.length; i++) {
  		if (!isSubstring(s1, s2[i])) return false;
    }
  	let stringDiff1to2 = s1.indexOf(s2[0]);
  	let stringDiff2to1 = s2.indexOf(s1[0]);
	
	console.log(stringDiff1to2,stringDiff2to1);
  	for (let i = 0; i < s2.length; i++) {
  		if (i + stringDiff2to1 > s1.length - 1) {
  			console.log('hi');
  			if (s1[i] !== s2[i - stringDiff1to2]) return false;
  		} else {
  			console.log(s1[i], s2[i + stringDiff2to1]);
  			if (s1[i] !== s2[i + stringDiff2to1]) return false;
  		}
  	}
  	return true;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
