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
  s1 = s1.toLowerCase(); s2 = s2.toLowerCase();
  if (s2.length !== s1.length) return false;
  if (s1 === s2) return true;

  let testStr = '';
  let falseCount = 0;
  for (let i = 0; i < s2.length; i++) {
    testStr += s2[i];
    if (!s1.includes(testStr)) {
      testStr = '';
      falseCount++;
    }
  }
  if (falseCount === 2) return false;

  return true;
}

console.log(stringRotation("hello", "llohe"));
module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
