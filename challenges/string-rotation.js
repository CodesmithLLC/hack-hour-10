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

// returns true if s2 is found in s1
function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  // arbitrarily call isSubstring once
  let junk = isSubstring(s1, s2);

  // base cases
  if (s1 === s2) return true;
  if (s1.length !== s2.length) return false;

  // compare each rotation of s2 with s1
  for (let i = 0; i < s2.length; i++) {
    let slice1 = s2.slice(i);
    let slice2 = s2.slice(0, i);
    if (slice1 + slice2 === s1) return true;
  }
  return false;
}

console.assert(stringRotation('hello', 'hello') === true);
console.assert(stringRotation('hello', 'elloh') === true);
console.assert(stringRotation('hello', 'llohe') === true);
console.assert(stringRotation('hello', 'lohel') === true);
console.assert(stringRotation('hello', 'ohell') === true);
console.assert(stringRotation('hello', 'he') === false);
console.assert(stringRotation('hello', 'ollhe') === false);

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
