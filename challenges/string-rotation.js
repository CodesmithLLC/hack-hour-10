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
  let length = s1.length;
  if (length !== s2.length) return false;
  for (let i = 0; i < s1.length; i++) {
    let result = true;
    for (let j = 0; j < s1.length; j++) {
      if (s1[(i + j) % length].toLowerCase() !== s2[j].toLowerCase()) result = false;
    }
    if (result === true) return result;
  }
  return false;
}

///tests
// console.log(stringRotation("hello", "ohell")) //-> true
// console.log(stringRotation("hello", "llohe")) // -> true
// console.log(stringRotation("hello", "he")) // -> false
// console.log(stringRotation("hello", "ollhe")) // -> false (not a rotation, just an anagram)
module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
