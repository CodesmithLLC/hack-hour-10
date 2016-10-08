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
	// s1 is original string
	// s2 is rotated string
	// output is boolean
	// order matters

	// search through s2 to find first letter of s1
		// if not found, return false
		// if found, get index and slice string from that point out and store
			// call isSubstring. 
			// If match, slice s2 from 0 to that same point and store
			// If no match, return false
	// concat both pieces. 
		// If s1 matches concat, return true.
		// Else, return false.

	let slice1, slice2

	if (s2.includes(s1[0])) slice1 = s2.slice(s2.indexOf(s1[0]), s2.length);
	else return false;
  
	if (s1.includes(slice1)) slice2 = s2.slice(0, s2.indexOf(s1[0]));
	else return false;

	return s1 === slice1.concat(slice2);
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
