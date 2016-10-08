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
let count = 0;
function stringRotation(s1, s2) {
  if (s1.length !== s2.length) return false
  let lengths = s1.length;
  const s2array = s2.toLowerCase().split('');
  const s1array = s1.toLowerCase().split('');
  while (s1array[0] !== s2array[0] && s1array[lengths- 1] !== s2array[lengths -1] && count < lengths) {
      s2array.push(s2array.shift());
      count++;
  }
  return isSubstring(s2array.join(''), s1array.join(''))
  // return s1.split('').every(letter => s2array.includes(letter));
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
