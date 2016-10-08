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
  let s1FirstLetter = s1[0];
  let s2Index = s2.indexOf(s1FirstLetter);
  for (let i = 0; i < s1.length; i += 1) {
    if (s1[i] !== s2[s2Index]) return false;
    s2Index += 1;
    if (s2Index === s2.length) s2Index = 0;
  }
  return true;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

console.log(stringRotation("hello", "hello"))
console.log(stringRotation("hello", "llohe"))
console.log(stringRotation("hello", "he"))
console.log(stringRotation("hello", "ollhe"))
