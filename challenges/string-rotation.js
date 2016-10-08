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
"use strict"
function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
	if (s1.length !== s2.length) return false;
	let truthArr = [];
	let stringRotate;
	for (let i = 0; i < s1.length; i++) {
		stringRotate = s2.substr(i) + s2.substr(0, i);
		truthArr.push(isSubstring(s1, stringRotate));

	}

	// console.log(truthArr);
	return truthArr.some( ele => {
		return ele === true;
	});

}


// console.log(stringRotation("hello", "hello")) // -> true
// console.log(stringRotation("hello", "llohe")) // -> true
// console.log(stringRotation("hello", "he")) // -> false
// console.log(stringRotation("hello", "ollhe")) // -> false 

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
