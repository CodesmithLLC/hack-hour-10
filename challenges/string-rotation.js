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
  // Since we are only allowed one check, then we
  // need to gather all the possible rotations of s1 and then check if
  // s2 exist in it. The only way to do this is to build one large string...
  // However, we may need to think about possible overlapping so we can
  // add some sort of separator to separate words.
  //
  // To do at O(n) times, we can rotate s2 and check if s2 is a substring
  // of s1 at each rotation.

  if (s1.length !== s2.length) return false;

  let rotations = '';

  for (let i = 0; i < s1.length; i++) {
    const sub1 = s1.substring(0, i + 1);
    const sub2 = s1.substring(i + 1);
    rotations += sub2 + sub1 + ',';
  }

  return isSubstring(rotations, s2);
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
