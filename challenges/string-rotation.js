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
  if (s1 === undefined || s2 === undefined) return undefined;
  for (let tmpArr = s1.toLowerCase().split(""), i = 0; i < s1.length; tmpArr.push(tmpArr.shift()), i++) if (tmpArr.join("") === s2.toLowerCase()) return true;
  return false;
}

function stringRotation(s1, s2) {
 return isSubstring(s1, s2);
}


module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
